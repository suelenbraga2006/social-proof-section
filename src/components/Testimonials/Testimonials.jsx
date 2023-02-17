import React from 'react';

import './styles.scss';

function Testimonials({ testimonial }) {
  return (
    <div className="testimonials-box">
      <div className="user-header">
        <img
          src={require(`../../assests/images/${testimonial.avatar}`)}
          alt={testimonial.name}
        />
        <div className="user-name">
          <h2>{testimonial.name}</h2>
          <span>Verified Buyer</span>
        </div>
      </div>
      <p>“ {testimonial.text} ”</p>
    </div>
  );
}

export default Testimonials;
