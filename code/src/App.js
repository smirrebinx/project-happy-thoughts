/* eslint no-underscore-dangle: 0 */
import React, { useState, useEffect } from 'react';
import ThoughtList from 'components/ThoughtList';
import ThoughtForm from 'components/ThoughtForm';
import Header from 'components/Header';

export const App = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => {
        console.log('Response from API:', res);
        return res.json();
      })
      .then((data) => {
        console.log('Response data:', data);
        setThoughtList(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  }

  const handleFormCleanup = () => {
    setNewThought('');
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

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(() => handleFormCleanup());
  }

  const handleLikes = (_id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`, options)
      .then((res) => {
        console.log('Response from POST request:', res);
        return res.json();
      })
      .then((data) => {
        console.log('Response data:', data);
        const updatedThoughtList = thoughtList.map((thought) => {
          if (thought._id === data._id) {
            return {
              ...thought,
              hearts: data.hearts
            };
          }
          return thought;
        });
        setThoughtList(updatedThoughtList);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="outerWrapper">
      <Header />
      <div className="innerWrapper">
        <ThoughtForm
          newThought={newThought}
          onNewThoughtChange={handleNewThoughtChange}
          onFormSubmit={onFormSubmit} />
        <ThoughtList
          loading={loading}
          thoughtList={thoughtList}
          handleLikes={handleLikes} />
      </div>
    </div>
  );
}
