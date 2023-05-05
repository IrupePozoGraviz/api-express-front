import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import { FirstPage } from './components/FirstPage'
import Title from './components/Title'
import Country from './components/Countries'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <h1>hej </h1>
        <FirstPage />
        <Routes>
          <Route path="/titles" element={<MovieDetails />} />
          <Route path="/title'" element={<Title />} />
          <Route path="/country" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

