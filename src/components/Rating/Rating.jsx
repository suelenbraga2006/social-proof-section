import React from 'react';

import './styles.scss';
import star from '../../assests/images/icon-star.svg';

function Rating() {
  return (
    <div className="rating-box">
      <div className="stars">
        <img src={star} alt="rating" />
        <img src={star} alt="rating" />
        <img src={star} alt="rating" />
        <img src={star} alt="rating" />
        <img src={star} alt="rating" />
      </div>
      <p>Rated 5 Stars in Reviews</p>
    </div>
  );
}

export default Rating;
