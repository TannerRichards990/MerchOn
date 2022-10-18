import React from 'react';

export default function BusinessCard({ name, id, avatar }) {
  return (
    <div className="b-card">
      <div className="details">
        <div className="title">{name}</div>
      </div>
      <div className="business">
        <img src={avatar}
          width="50"
          height="50"/>
      </div>
    </div>
  );
}
