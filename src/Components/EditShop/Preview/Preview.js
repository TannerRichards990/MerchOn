import React from 'react';
import { useParams } from 'react-router-dom';
import { useBusinessImage } from '../../../Hooks/useBusinessImage';
import './Preview.css';

export default function Preview({ shopName, aboutShop, shopImage, shopTheme, addItem }) {
  const { id } = useParams();
  const { imageData } = useBusinessImage(id);
  
  
  return (
    <div className={`preview ${shopTheme}`}>
      <div className='shop-preview-header'>
        <h1>{shopName}</h1>
        <h3>{aboutShop}</h3>
      </div>
      <div className='shop-preview-body'>
        <img src={imageData} />
      </div>
      <div className='items-preview'>
        {addItem.map((item, index) => {
          return (
            <div key={index} className='item-preview'>
              <img src={item.itemImage} alt='item' />
              <h3>{item.itemName}</h3>
              <h4>{item.itemPrice}</h4>
              <p>{item.itemDescription}</p>
            </div>
          );
        }
        )}
      </div>
    </div>
  );
}


//This page is for previewing all the edits you made to your store