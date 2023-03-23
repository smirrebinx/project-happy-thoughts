import React from 'react';

const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form className="thought-form" onSubmit={onFormSubmit}>
      <h2>{'What\'s making you happy right now?'}</h2>
      <textarea placeholder="Type your happy thought here" className="text-area" value={newThought} onChange={onNewThoughtChange} />
      <button className="form-btn" type="submit">❤️ Send Happy Thought! ❤️</button>
    </form>
  );
}

export default ThoughtForm;