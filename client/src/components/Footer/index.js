import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto bg-primary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className=" btn  btn-warning bg-info text-white text-lightmb-3"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <h4 className="text-light">
          Made {' '}
          {/* <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '} */}
          by Triple T Academy
        
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
