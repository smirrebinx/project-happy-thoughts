import React from 'react';

const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form className="thoughtForm" onSubmit={onFormSubmit}>
      <h2>{'What\'s making you happy right now?'}</h2>
      <textarea placeHolder="Type your happy thought here" className="textArea" value={newThought} onChange={onNewThoughtChange} />
      <button className="formBtn" type="submit">❤️ Send Happy Thought! ❤️</button>
    </form>
  );
}

export default ThoughtForm;