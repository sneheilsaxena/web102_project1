import React from 'react';

export default function Card({ item }) {
  return (
    <div className="card">
      <p className="category">{item.category}</p>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
}
