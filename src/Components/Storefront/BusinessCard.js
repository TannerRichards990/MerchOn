import React from 'react';
import { Link } from 'react-router-dom';
import './BusinessCard.css';

export default function BusinessCard(business) {
  const businessInfo = [];
  let x = JSON.parse(business.business_info);
  businessInfo.push(x);

  return (
    <div className="b-card">
      <div className="business-card-details">
        <div className="bc-title">{businessInfo[0].business_name}</div>
        <div className="bc-description">{businessInfo[0].business_about}</div>
        <Link to={`/storefront/${business.id}`} className="bc-store">CLICK TO ENTER SHOP</Link>
      </div>
    </div>
  );
}
