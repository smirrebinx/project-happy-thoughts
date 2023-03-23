import React from 'react';
import celebration from 'images/celebration.png'

const Header = () => {
  return (
    <div className="header">
      <h1>Happy Thoughts</h1>
      <img
        src={celebration}
        className="celebration-img"
        alt="Illustration of people celebrating" />
    </div>
  );
}

export default Header;