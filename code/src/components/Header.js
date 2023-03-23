import React from 'react';
import celebration from 'images/celebration.png'

const Header = () => {
  return (
    <div className="header">
      <h1>Happy Thoughts</h1>
      <div className="stage">
        <div className="image bounce">
          <img
            src={celebration}
            className="celebration-img"
            alt="Illustration of people celebrating" />
        </div>
      </div>
    </div>
  );
}

export default Header;