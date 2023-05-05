import React, { useState, useEffect } from 'react';
// search for countries

const Countries = () => {
  const [searchByCountry, setSearchByCountry] = useState([]);

  useEffect(() => {
    fetch('https://project-express-api-e3l32b2upq-lz.a.run.app/country')
      .then((res) => res.json())
      .then((data) => {
        setSearchByCountry(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {searchByCountry.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          <h3>{item.country}</h3>
        </div>
      ))}
    </div>
  );
};

export default Countries;