import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Countries = () => {
  const [searchByCountry, setSearchByCountry] = useState([]);
  const { country } = useParams();
  useEffect(() => {
    fetch(`https://project-express-api-e3l32b2upq-lz.a.run.app/country/${country}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchByCountry(data.body.title);
      });
  }, [country]);

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
export default Countries