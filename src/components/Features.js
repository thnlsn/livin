import React from 'react';

// SVG SPRITES
import sprite from '../images/sprite.svg';

const Features = ({ features }) => {
  return (
    <section className='features'>
      {features.map((feature, index) => (
        <div className='feature' key={index}>
          <svg className='feature__icon'>
            <use xlinkHref={`${sprite}${feature.icon}`}></use>
          </svg>
          <h4 className='heading-4'>{feature.heading}</h4>
          <p className='feature__text'>{feature.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
