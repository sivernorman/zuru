import React from 'react';
import { useParams } from 'react-router-dom';

function SiteDetail() {
  let { id } = useParams();

  return (
    <div>
      <h2>Site Detail</h2>
      <p>Viewing details for site with ID: {id}</p>
      {/* Add more details here once you have the data */}
    </div>
  );
}

export default SiteDetail;
 