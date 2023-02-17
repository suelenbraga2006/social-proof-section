import React from 'react';

import './styles.scss';
import user from '../../assests/images/image-colton.jpg';

function Testimonials() {
  return (
    <div className="testimonials-box">
      <div className="user-header">
        <img src={user} alt="Colton" />
        <div className="user-name">
          <h2>Colton Smith</h2>
          <span>Verified Buyer</span>
        </div>
      </div>
      <p>
        “ We needed the same printed design as the one we had ordered a week
        prior. Not only did they find the original order, but we also received
        it in time. Excellent! ”
      </p>
    </div>
  );
}

export default Testimonials;
