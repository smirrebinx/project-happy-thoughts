import React, { useState, useEffect } from 'react';
import ThoughtList from 'components/ThoughtList';
import ThoughtForm from 'components/ThoughtForm';

export const App = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  }

  const handleFormCleanup = (event) => {
    setNewThought('');
    setLoading(false);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        body: JSON.stringify({ message: newThought })
      }
    }

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(() => handleFormCleanup(false));
  }

  return (
    <div className="outerWrapper">
      <div className="innerWrapper">
        <ThoughtForm
          newThought={newThought}
          onNewThoughtChange={handleNewThoughtChange}
          onFormSubmit={onFormSubmit} />
        <ThoughtList
          loading={loading}
          thoughtList={thoughtList}
          setThoughtList={setThoughtList}
          handleLikes={handleLikes} />
      </div>
    </div>
  );
}