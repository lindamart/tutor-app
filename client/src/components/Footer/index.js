import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary justify-center flex-row py-1">
      <span className="text-light">
        Made with{' '}
        <span
          className="emoji"
          role="img"
          aria-label="heart"
          aria-hidden="false"
        >
          ❤️
        </span>{' '}
        by the Tech Thoughts team.
      </span>
    </footer>
  );
};

export default Footer;
