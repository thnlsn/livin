import React from 'react';

const Header = ({ header }) => {
  const { brand, heading, seenOn } = header;

  return (
    <header className='header'>
      <div className='header__brand'>
        <img src={brand.logo} alt='' className='header__logo' />
        <a href='#' className='header__link'>
          livin
        </a>
      </div>
      <h3 className='heading-3'>{heading.prefix}</h3>
      <h1 className='heading-1'>{heading.text}</h1>
      <button className='btn'>{heading.buttonText}</button>
      <div className='header__seen-on-text'>{seenOn.text}</div>
      <div className='header__seen-on-logos'>
        {seenOn.logos.map((logo, index) => (
          <img src={logo} alt={`Seen on logo ${index}`} />
        ))}
      </div>
    </header>
  );
};

export default Header;
