/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form className="thought-form" onSubmit={onFormSubmit} aria-label="Happy Thoughts Form">
      <h2 aria-hidden="true">{'What\'s making you happy right now?'}</h2>
      <label htmlFor="happy-thought-input" className="sr-only" aria-hidden="true">Type your happy thought here:</label>
      <textarea
        id="happy-thought-input"
        placeholder="Type your happy thought here"
        className="text-area"
        value={newThought}
        onChange={onNewThoughtChange}
        aria-label="Happy thought input" />
      <button className="form-btn" type="submit">❤️ Send Happy Thought! ❤️</button>
    </form>
  );
}

export default ThoughtForm;

