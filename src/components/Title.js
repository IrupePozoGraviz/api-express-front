import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Title = () => {
  const [singleTitle, setSingleTitle] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    fetch(`https://project-express-api-e3l32b2upq-lz.a.run.app/title/${title}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleTitle(data.body.title);
        console.log(data);
      });
  }, [title]);

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