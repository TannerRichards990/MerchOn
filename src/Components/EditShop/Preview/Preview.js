import React from 'react';

import './Preview.css';

export default function Preview({ shopName, aboutShop, shopImage, shopTheme, shopFont, addItem }) {
  return (
    <div className={`preview ${shopFont}`} style={{ shopTheme }}>
      <div className='shop-preview-header'>
        <h1>{shopName}</h1>
        <h3>{aboutShop}</h3>
      </div>
      <div className='shop-preview-body'>
        <img src={shopImage} alt='shop' />
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



