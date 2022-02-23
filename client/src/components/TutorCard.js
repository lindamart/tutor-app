// import React from 'react';


// <header id="heroImage">
// {/* https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog.nsslha.org%2Fwp-content%2Fuploads%2F2019%2F06%2FPaporto_Tutoring-1060x707.jpg&imgrefurl=https%3A%2F%2Fblog.nsslha.org%2F2019%2F06%2F18%2Fsmart-people-dont-need-tutoring-right-wrong%2F&tbnid=B-iYGDrVYB_EOM&vet=12ahUKEwipr7PMwZb2AhVZsXIEHegVBhUQMygMegUIARDqAQ..i&docid=omJ7tPhbg8SjSM&w=1060&h=707&q=tutoring&ved=2ahUKEwipr7PMwZb2AhVZsXIEHegVBhUQMygMegUIARDqAQ */}
// <div className='heroImageText'>
//     Welcome!
// </div>

    
// </header>

import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Triple T Academy</h1>
          </Link>
          <p className="m-0">Find the help that you need.</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
