import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import { FirstPage } from './components/FirstPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/titles" element={<MovieDetails />} />
        <Route path="/title'" element={<MovieDetails filter="title" />} />
        <Route path="/country" element={<MovieDetails filter="country" />} />
        <Route path="/type" element={<MovieDetails filter="type" />} />
      </Routes>
    </BrowserRouter>
  );
};

