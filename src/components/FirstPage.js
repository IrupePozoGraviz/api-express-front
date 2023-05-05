import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const FirstPage = () => {
  const [movie, setMovie] = useState('');
  const [country, setCountry] = useState('');
  return (
    <div>
      <h1>API express project for technigo bootcamp</h1>
      <h4>API used: https://project-express-api-e3l32b2upq-lz.a.run.app</h4>
      <div className="navbar">
        <button type="button">
          <Link to="/titles">
            All Movies
          </Link>
        </button>
        <form>
          <input
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            type="text"
            name="q"
            placeholder="Search movie here" />
          <button
            type="button">
            <Link to={`/title/${movie}`}>
              Single movie
            </Link>
          </button>
        </form>
        <form>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            name="q"
            placeholder="Search country here" />
          <button
            type="submit">
            <Link to={`/country/${country}`}>
              Search by country
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};
