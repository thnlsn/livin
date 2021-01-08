import React from 'react';

const Features = ({ features }) => {
  return (
    <section className='features'>
      {features.map((feature, index) => (
        <div className='feature'>
          <svg className='feature__icon'>
            <use xlinkHref={`../images/sprite.svg#icon-${feature.icon}`}></use>
          </svg>
          <h4 className='heading-4'>{feature.heading}</h4>
          <p className='feature__text'>{feature.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
