import React, { useState, useEffect } from 'react';

function DataComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/items')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur:', error));
  }, []);

  return (
    <div>
      <h1>Données de la base de données</h1>
      <ul>
        {data.map(item => (
/*           <li key={item.id}>{item.name}{item.description}</li>, */
          <li key={item.id}>{item.id} → {item.name} → {item.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataComponent;
