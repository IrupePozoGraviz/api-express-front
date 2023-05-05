import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

export const FirstPage = () => {
  return (
    <div>
      <h1>This is my new starterpage</h1>
      <div className="buttons">
        <button type="button"><Link to="/titles">All Titles</Link></button>
        <button type="button"><Link to="/title">Search for movies</Link></button>
        <button type="button"><Link to="/nonenglish">Search for countries</Link></button>
      </div>
    </div>
  );
};
