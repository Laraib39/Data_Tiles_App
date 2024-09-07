import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TileView from './TileView';

const GridView = () => {
  const [data, setData] = useState([]);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleExpand = (item) => {
    setExpandedItem(item);
  };

  const handleClose = () => {
    setExpandedItem(null);
  };

  return (
    <div className="grid-container">
      {expandedItem ? (
        <TileView item={expandedItem} onClose={handleClose} />
      ) : (
        <div className="grid-view">
          {data.map(item => (
            <div key={item.id} className="grid-item" onClick={() => handleExpand(item)}>
              <h3>{item.name}</h3>
              <p>{item.username}</p>
              <p>{item.email}</p>
              <button onClick={(e) => e.stopPropagation()}>Edit</button>
              <button onClick={(e) => e.stopPropagation()}>Flag</button>
              <button onClick={(e) => e.stopPropagation()}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GridView;
