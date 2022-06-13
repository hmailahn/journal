import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
      <Link style={{ textDecoration: 'none' }} to="/">
          <h1>Journal</h1>
          </Link>
          <nav className="text-center">
          <Link style={{ textDecoration: 'none' }} to="/login">Login</Link>
          <Link style={{ textDecoration: 'none' }} to="/signup">Signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
