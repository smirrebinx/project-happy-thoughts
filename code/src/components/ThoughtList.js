/* eslint no-underscore-dangle: 0 */
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const ThoughtList = ({ loading, thoughtList, handleLikes }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <section className="thoughtList">
      {thoughtList.map((thought) => (
        <div className="singleThought" key={thought._id}>{/* eslint-disable-line */}
          <h3>{thought.message}</h3>
          <div className="likeAndTime">
            <div className="btnAndCounter">
              <button
                type="button"
                className="likeBtn"
                onClick={() => { handleLikes(thought._id); }}
                style={{ background: thought.hearts >= 1 ? 'rgb(241, 198, 198)' : 'lightgrey' }}>
                                ❤️
              </button>
              <p className="counter">{thought.hearts}</p>
            </div>
            <p className="time">{formatDistanceToNow(
              new Date(thought.createdAt),
              Date.now(),
              { addSuffix: true }
            )}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ThoughtList;