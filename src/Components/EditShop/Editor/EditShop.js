import React from 'react';

import './EditShop.css';



export default function EditShop({
  shopName,
  setShopName,
  aboutShop,
  setAboutShop,
  shopImage,
  setShopImage,
  shopTheme,
  setShopTheme,
  shopFont,
  setShopFont,
  addItem,
  setAddItem
}) {
  return (
    <div className='shop-editor'>
      <div className='shop-form-control'>
        <input name='shopName' type='text' value={shopName} 
          onChange={(e) => setShopName(e.target.value)} />
        <label htmlFor='shopName'>Shop Name</label>
      </div>
      <div className='shop-form-control'>
        <input name='aboutShop' type='text' value={aboutShop} 
          onChange={(e) => setAboutShop(e.target.value)} />
        <label htmlFor='aboutShop'>About Shop</label>
      </div>
      <div className='shop-form-control'>
        <input name='shopImage' type='src' value={shopImage} 
          onChange={(e) => setShopImage(e.target.value)} />
        <label htmlFor='shopImage'>Shop Image</label>
      </div>
      <div className='shop-form-control'>
        
        <select value={shopTheme} onChange={(e) => setShopTheme(e.target.value)}>
          <option value='default'>Default</option>
          <option value='dark'>Dark</option>
          <option value='light'>Light</option>
        </select>
        <label htmlFor='shopTheme'>Shop Theme</label>
      </div>
      <div className='shop-form-control'>
        
        <select value={shopFont} onChange={(e) => setShopFont(e.target.value)}>
          <option value='default'>Default</option>
          <option value='cursive'>Cursive</option>
          <option value='sans-serif'>Sans-Serif</option>
        </select>
        <label htmlFor='shopFont'>Shop Font</label>
      </div>
      <div className='shop-form-control'>
        <button onClick={addItem}>Add Item
        </button>
      </div>
    </div>
  );
}


