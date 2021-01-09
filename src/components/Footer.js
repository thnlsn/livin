import React from 'react';

const Footer = ({ footer }) => {
  const { links, copyright } = footer;

  return (
    <footer className='footer'>
      <ul className='nav'>
        {links.map((link, index) => (
          <li className='nav__item' key={index}>
            <a href={link.url} className='nav__link'>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
