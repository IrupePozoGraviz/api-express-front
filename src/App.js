import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import { FirstPage } from './components/FirstPage'
import Title from './components/Title'
import Country from './components/Countries'
import './index.css'

export const App = () => {
  return (
    <>
      <FirstPage />

      <BrowserRouter>
        <Routes>

          <Route path="/titles" element={<MovieDetails />} />
          <Route path="/title'" element={<Title />} />
          <Route path="/country" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

