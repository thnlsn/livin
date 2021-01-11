import React from 'react';

const Gallery = ({ gallery }) => {
  return (
    <section className='gallery'>
      {gallery.map((image, index) => (
        <img
          src={image}
          alt={`Gallery image ${index++}`}
          className='gallery__img'
          key={index}
        />
      ))}
    </section>
  );
};

export default Gallery;
