import React from 'react';

const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form className="thoughtForm" onSubmit={onFormSubmit}>
      <h1>{'What\'s making you happy right now'}</h1>
      <textarea className="textArea" value={newThought} onChange={onNewThoughtChange} />
      <button className="formBtn" type="submit">❤️ Send Happy Thought! ❤️</button>
    </form>
  );
}

export default ThoughtForm;