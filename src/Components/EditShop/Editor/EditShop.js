// This Page is the controls for editing your page

import React from 'react';
import { useParams } from 'react-router-dom';
import { useBusiness } from '../../../Hooks/useBusiness';
import { changeMerchantRow } from '../../../services/fetch-utils';
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

  const { id } = useParams();
  const { businessDetail, setBusinessDetail, loading, setLoading, error, setError } = useBusiness(id);

  const handleClick = async () => {
    try {
      await changeMerchantRow(id, businessDetail); 
    } catch (e) {
        //eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

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
          <textarea name='aboutShop' type='textarea' value={aboutShop} 
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
            <option value='light'>Light</option>
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
      <div>
        <button className="add" onClick={handleClick}>EDIT</button>
      </div>
    </div>
  );
}