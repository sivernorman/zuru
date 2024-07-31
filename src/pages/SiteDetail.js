import React from 'react';
import { useParams } from 'react-router-dom';

function SiteDetail() {
  const { id } = useParams();
  const site = {
id,
name: 'Serengeti National Park',
contry:'Tanzania',
rating: 4.8,
description: 'A vast ecosystem in East Africa known for its annual migration of over 1.5 million white-bearded wildbeast and 250,00 zebra.'
  };
  
return (
  <div>
    <h2>{site.name}</h2>
    <p>Country:{site.country}</p>
    <p>Rating:{site.rating}/5</p>
    <p>{site.description}</p>


  </div>
);

 }

export default SiteDetail;
