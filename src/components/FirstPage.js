import React from 'react';
import { Link } from 'react-router-dom';

export const FirstPage = () => {
  return (
    <div>
      <h1>This is my new starterpage</h1>
      <div className="navbar">
        <button type="button">
          <Link to="/titles">
            All Movies
          </Link>
        </button>
        <form>
          <input type="text" name="q" placeholder="Search movie here" />
          <button type="button"><Link to="/title">Single movie</Link></button>
        </form>
        <form>
          <input type="text" name="q" placeholder="Search country here" />
          <button type="submit">Search by country</button>
        </form>
      </div>
    </div>
  );
};
