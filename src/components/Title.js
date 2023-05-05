import React, { useState, useEffect } from 'react';

const Title = () => {
  const [singleTitle, setSingleTitle] = useState([]);

  useEffect(() => {
    fetch('https://project-express-api-e3l32b2upq-lz.a.run.app/title/:title')
      .then((res) => res.json())
      .then((data) => {
        setSingleTitle(data.title);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {singleTitle.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Title;