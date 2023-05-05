import React, { useState } from 'react';
import MovieDetails from './MovieDetails';

export const FirstPage = () => {
  const [title, setTitle] = useState('');
  const [country, setCountry] = useState('');

  const handleTitleSearch = (e) => {
    e.preventDefault();
    // Pass query parameter to fetch movie by title
    setTitle(title.trim());
    setCountry('');
  };

  const handleCountrySearch = (e) => {
    e.preventDefault();
    // Pass query parameter to fetch movies by country
    setTitle('');
    setCountry(country.trim());
  };

  const handleAllMovies = (e) => {
    e.preventDefault();
    // Pass empty query parameter to fetch all movies
    setTitle('');
    setCountry('');
  };

  return (
    <div>
      <h1>This is my new starterpage</h1>
      <form>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit" onClick={handleTitleSearch}>Title</button>
        <input value={country} onChange={(e) => setCountry(e.target.value)} />
        <button type="submit" onClick={handleCountrySearch}>Country</button>
      </form>
      <button type="submit" onClick={handleAllMovies}>All movies</button>
      <MovieDetails title={title} country={country} />
    </div>
  );
};
