import React from 'react';
import './BusinessCard.css';

export default function BusinessCard(business) {
  return (
    <div className="b-card">
      <div className="details">
        <div className="title">{business.business_name}</div>
        <div className="description">{business.business_about}</div>
      </div>
    </div>
  );
}
