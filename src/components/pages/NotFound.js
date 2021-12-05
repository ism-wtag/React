import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div class='not-found'>
      <div class='container'>
        <div class='text-center round'>
          <span class='display-1 d-block'>404</span>
          <div class='mb-4 lead'>
            The page you are looking for was not found.
          </div>
          <Link exact to='/' class='btn btn-link'>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
