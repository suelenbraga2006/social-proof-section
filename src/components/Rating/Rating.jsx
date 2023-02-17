import React from 'react';

import './styles.scss';
import star from '../../assests/images/icon-star.svg';

function Rating({ phrase }) {
  return (
    <div className="rating-box">
      <div className="stars">
        <img src={star} alt="rating" />
        <img src={star} alt="rating" />
        <img src={star} alt="rating" />
        <img src={star} alt="rating" />
        <img src={star} alt="rating" />
      </div>
      <p>{phrase}</p>
    </div>
  );
}

export default Rating;
