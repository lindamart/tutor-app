import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light px-3 justify-space-between align-center flex-row">
      <div>
        <Link className="text-light" to="/">
          <h1>Triple T Academy</h1>
        </Link>
        <p>Find the help that you need.</p>
      </div>
      <div>
        {Auth.loggedIn() ? (
          <>
            <span>Hey there, {Auth.getProfile().data.username}!</span>
            <button className="btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="mx-1 btn" to="/login">
              Login
            </Link>
            <Link className="btn" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
