import React from 'react';
import { Link } from 'react-router-dom';

function SiteList() {
  // This is just a placeholder. You'll replace this with actual data later.
  const sites = [
    { id: 1, name: 'Site 1' },
    { id: 2, name: 'Site 2' },
    { id: 3, name: 'Site 3' },
  ];

  return (
    <div>
      <h2>Explore Sites</h2>
      <ul>
        {sites.map(site => (
          <li key={site.id}>
            <Link to={`/sites/${site.id}`}>{site.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SiteList;