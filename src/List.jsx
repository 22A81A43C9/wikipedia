import React from 'react';
import './List.css';

function List({ name, color }) {
  return <li style={{ borderLeftColor: color }}>{name}</li>;
}

export default List;
