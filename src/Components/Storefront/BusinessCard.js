import React from 'react';
import { Link } from 'react-router-dom';
import './BusinessCard.css';
import { useBusinessImage } from '../../Hooks/useBusinessImage';

export default function BusinessCard(business) {
  const businessInfo = [];
  let x = JSON.parse(business.business_info);
  businessInfo.push(x);
  const { imageData } = useBusinessImage(business.id);
  console.log(imageData);
  return (
    <div className="b-card">
      <div className="business-card-details">
        <div className="bc-title">{businessInfo[0].business_name}</div>
        <div className="bc-description">{businessInfo[0].business_about}</div>
        <div className="business_image_el">
          <img className="business-logo" alt='business-logo' src={imageData}/>
        </div>
        <Link to={`/storefront/${business.id}`} className="bc-store">CLICK TO ENTER SHOP</Link>
      </div>
    </div>
  );
}
