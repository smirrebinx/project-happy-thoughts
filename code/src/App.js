/* eslint no-underscore-dangle: 0 */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import ThoughtList from 'components/ThoughtList';
import ThoughtForm from 'components/ThoughtForm';
import Header from 'components/Header';

export const App = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  const APIURL = 'https://project-happy-thoughts-api-kpnlmcrmoq-lz.a.run.app'

  const fetchThoughts = () => {
    setLoading(true);
    fetch(`${APIURL}/thoughts`)
      .then((response) => {
        return response.json(); // Convert response to JSON
      })
      .then((data) => {
        setThoughtList(data); // Update thought list state with fetched data
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false)); // Set loading state to false regardless of success or failure
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  /* eslint-disable no-unused-vars */
  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value); // Update new thought state with input value
  }

  // Define function to clean up after form submission
  const handleFormCleanup = () => {
    setNewThought(''); // Reset new thought state to empty string
    setLoading(false);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    }

    fetch(`${APIURL}/thoughts`, options)
      .then((response) => response.json())
      .then(() => fetchThoughts())
      .finally(() => handleFormCleanup());
  };

  const handleLikes = (_id) => {
    const options = { // Define options for fetch request
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(`${APIURL}/thoughts/${_id}/like`, options)
      .then((response) => response.json())
      .then((data) => {
        const updatedThoughtList = thoughtList.map((thought) => {
          if (thought._id === data.response._id) {
            thought.hearts += 1;
            return thought;
          }
          return thought;
        });
        setThoughtList(updatedThoughtList);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="outer-wrapper">
      <Header />
      <div className="inner-wrapper">
        <ThoughtForm
          newThought={newThought}
          setNewThought={setNewThought}
          onFormSubmit={onFormSubmit} />
        <ThoughtList
          loading={loading}
          thoughtList={thoughtList}
          handleLikes={handleLikes} />
      </div>
    </div>
  );
}