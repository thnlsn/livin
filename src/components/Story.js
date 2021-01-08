import React, { Fragment } from 'react';

const Story = ({ story }) => {
  const { pictures, content } = story;

  return (
    <Fragment>
      <div className='story__pictures'>Story pictures</div>
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
