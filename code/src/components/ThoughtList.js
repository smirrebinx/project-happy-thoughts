/* eslint no-underscore-dangle: 0 */
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

// Define a component called ThoughtList that takes in three props:
// loading, thoughtList, and handleLikes.
const ThoughtList = ({ loading, thoughtList, handleLikes }) => {
  // If the loading prop is true, render a loading message.
  if (loading) {
    return <h3 className="loading">Loading...</h3>
  }
  // Otherwise, render the list of thoughts.
  return (
    <section className="thought-list">
      {/* Map over the thoughtList array and render each thought. */}
      {thoughtList.map((thought) => (
        <div className="single-thought" key={thought._id}>
          <h2>{thought.message}</h2>
          <div className="like-and-time">
            <div className="btn-and-counter">
              {/* A button is rendered to allow users to "like" a thought. */}
              <button
                aria-label="Like-button"
                type="button"
                className="like-btn"
                onClick={() => { handleLikes(thought._id, thought.hearts); }}
                style={{ background: thought.hearts >= 1 ? 'rgb(237, 164, 175)' : 'lightgrey' }}>
                                ❤️
              </button>
              <span className="counter">x {thought.hearts}</span>
            </div>
            {/* The time elapsed since the thought was created is displayed using */}
            {/* the formatDistanceToNow function from date-fns. */}
            <p className="time">{formatDistanceToNow(
              new Date(thought.createdAt),
              Date.now(),
              { addSuffix: true }
            )} ago
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ThoughtList;