import React, { Fragment } from 'react';

// SVG SPRITES
import sprite from '../images/sprite.svg';

const Homes = ({ homes }) => {
  const { properties, icons } = homes;

  return (
    <section className='homes'>
      {properties.map((home, index) => (
        <Fragment>
          <img
            src={home.image}
            alt={`House ${index}`}
            className='home__img'
            key={index}
          />
          <svg className='home__like'>
            <use xlinkHref={`${sprite}${icons.like}`}></use>
          </svg>
          <h5 className='home__name'>{home.name}</h5>
          <div className='home__location'>
            <svg>
              <use xlinkHref={`${sprite}${icons.location}`}></use>
            </svg>
            <p>{home.location}</p>
          </div>
          <div className='home__rooms'>
            <svg>
              <use xlinkHref={`${sprite}${icons.rooms}`}></use>
            </svg>
            <p>{home.rooms}</p>
          </div>
          <div className='home__area'>
            <svg>
              <use xlinkHref={`${sprite}${icons.size}`}></use>
            </svg>
            <p>{home.area}</p>
          </div>
          <div className='home__price'>
            <svg>
              <use xlinkHref={`${sprite}${icons.price}`}></use>
            </svg>
            <p>{home.price}</p>
          </div>
        </Fragment>
      ))}
    </section>
  );
};

export default Homes;
