import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SiteList() {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    // Fetch sites data (simulated for now)
    function fetchSites() {
      const trueSites = [
        { id: 1, name: 'Serengeti National Park', country: 'Tanzania', rating: 4.8 },
        { id: 2, name: 'Maasai Mara', country: 'Kenya', rating: 4.6 },
        { id: 3, name: 'Bwindi Impenetrable National Park', country: 'Uganda', rating: 4.6 },
      ];
      setSites(trueSites);
    }
    fetchSites();
  }, []);

  return (
    <div>
      <h2>Popular East African Destinations</h2>
      <ul>
        {sites.map(site => (
          <li key={site.id}>
            <Link to={`/sites/${site.id}`}>{site.name} - {site.country}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SiteList;
