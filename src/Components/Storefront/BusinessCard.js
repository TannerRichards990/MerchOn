import React from 'react';
import { Link } from 'react-router-dom';
import './BusinessCard.css';
import { useBusinessImage } from '../../Hooks/useBusinessImage';

export default function BusinessCard(business) {
  const businessInfo = [];
  let x = JSON.parse(business.business_info);
  businessInfo.push(x);
  const { imageData } = useBusinessImage(business.id);

  return (
    <div className="b-card">
      <div className="details">
        <div className="title">{businessInfo[0].business_name}</div>
        <div className="description">{businessInfo[0].business_about}</div>
        <div className="business_image_el">
          <img alt='business logo' src={imageData}/>
        </div>
        <Link to={`/storefront/${business.id}`}>LINK HERE NOOB</Link>
      </div>
    </div>
  );
}
