import React, { Fragment } from 'react';

const Story = ({ story }) => {
  const { pictures, content } = story;

  return (
    <Fragment>
      <div
        className='story__pictures'
        // Style for background-image set in here because we want clients to be able to easily change the background image, which cannot be updated from a single location if it were to be defined in the css stylesheet
        style={{
          backgroundImage: `url(${pictures.backgroundImage})`,
        }}
      >
        <img src={pictures.imageOne} alt='Couple' className='story__img--1' />
        <img src={pictures.imageTwo} alt='Home' className='story__img--2' />
      </div>
      <div className='story__content'>
        <h3 className='heading-3 u-mb-sm'>{content.heading}</h3>
        <h2 className='heading-2 heading-2--dark u-mb-md'>
          &ldquo;{content.quote}&rdquo;
        </h2>
        <p className='story__text'>{content.text}</p>
        <button className='btn'>{content.buttonText}</button>
      </div>
    </Fragment>
  );
};

export default Story;
