import React, { useState, useEffect } from 'react';

const MovieDetails = () => {
  const [list, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('https://project-express-api-e3l32b2upq-lz.a.run.app/titles')
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data);
        console.log(data);
      });
  }, [])

  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}

    </div>
  )
};

export default MovieDetails;

