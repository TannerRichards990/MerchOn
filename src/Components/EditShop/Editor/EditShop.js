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
  shopFont,
  setShopFont,
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
        <button onClick={() => setAddItem([...addItem, { itemName: '', itemPrice: '', itemDescription: '', itemImage: '' }])}>
        Add Item</button>
      </div>
      <div>
        <button className="add" onClick={handleClick}>EDIT</button>
      </div>
    </div>
  );
}

// write code for users to choose custom themes via the color wheel function


