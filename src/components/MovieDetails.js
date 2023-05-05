import React, { useState, useEffect } from 'react';
// this shows all the movies

const MovieDetails = () => {
  const [list, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('https://project-express-api-e3l32b2upq-lz.a.run.app/titles')
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <h3>{item.country}</h3>

        </div>
      ))}
    </div>
  );
};

export default MovieDetails;

/* <BrowserRouter className="Main-container">
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/details/:movieInfo" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} /> */