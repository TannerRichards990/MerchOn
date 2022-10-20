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
  addItem,
  setAddItem
}) {
  return (
    <div className='shop-editor'>
      <div className='shop-form-control'>
        <label htmlFor='shopName'>
          <p>Shop Name:</p>
          <input name='shopName' type='text' value={shopName} 
            onChange={(e) => setShopName(e.target.value)} />
        </label>
      </div>
      <div className='shop-form-control'>
        <label htmlFor='aboutShop'>
          <p>About Shop:</p>
          <input name='aboutShop' type='text' value={aboutShop} 
            onChange={(e) => setAboutShop(e.target.value)} />
        </label>
      </div>
      <div className='shop-form-control'>
        <label htmlFor='shopImage'>
          <p>Shop Image:</p>
          <input name='shopImage' type='file' value={shopImage} 
            onChange={(e) => setShopImage(e.target.value)} />
        </label>
      </div>
      <div className='shop-form-control'>
        <label htmlFor='shopTheme'>
          <p>Shop Theme:</p>
          <select value={shopTheme} onChange={(e) => setShopTheme(e.target.value)}>
            <option value='default'>Default</option>
            <option value='glitch'>Glitch</option>
            <option value='ocean'>Ocean</option>
            <option value='forest'>Forest</option>
            <option value='space'>Space</option>
            <option value='abstract'>Abstract</option>
            
          </select>
        </label>
      </div>
      <br>
      </br>
      <div className='shop-form-control'>
        <button onClick={() => setAddItem([...addItem, { itemName: '', itemPrice: '', itemDescription: '', itemImage: '' }])}>
        Add Item</button>
      </div>
    </div>
  );
}

// write code for users to choose custom themes via the color wheel function

// This Page is the controls for editing your page
