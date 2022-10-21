import React from 'react';
import { useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { useBusiness } from '../../../Hooks/useBusiness';
import { useBusinessImage } from '../../../Hooks/useBusinessImage';
import { changeMerchantRow, getBusinessDetail } from '../../../services/fetch-utils';
import './EditShop.css';

export default function EditShop({
  shopName,
  setShopName,
  aboutShop,
  setAboutShop,
  // shopImage,
  // setShopImage,
  shopTheme,
  setShopTheme,
  addItem,
  setAddItem
}) {
  let history = useHistory();
  let businessInfo = [];
  let businessInfoTwo = [];
  let businessInfoThree = [];
  const { id } = useParams();
  const { businessDetail, setBusinessDetail, loading, setLoading, error, setError } = useBusiness(id);
  const [shopImage, setShopImage] = useState();
  // console.log(businessDetail.business_info);
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setShopImage(e.target.files[0]);
    }
  };
  
  if (businessDetail.length !== 0) {
    let x = JSON.parse(businessDetail.business_info);
    businessInfo.push(x);
  }
  
  if (businessDetail.length !== 0) {
    // console.log(businessInfo[0].business_info);
    let business_info_new = {
      business_name: shopName,
      business_id: businessInfo[0].business_id,
      business_owner: businessInfo[0].business_owner,
      categories: '',
      business_about: aboutShop,
      business_location: {
        business_street: businessInfo[0].business_location.business_street,
        business_city: businessInfo[0].business_location.business_city,
        business_state: businessInfo[0].business_location.business_state,
        business_zip: businessInfo[0].business_location.business_zip
      }
    };
    businessInfoTwo.push(business_info_new);
  } 
  const handleItemButton = () => {
    history.push('/Items/:id');
  };

  const handleClick = async () => {
    try {
      await changeMerchantRow(id, businessInfoTwo[0]); 
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
            onChange={imageChange} />
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
        <button onClick={handleItemButton}>
        Add Item</button>
      </div>
      <div>
        <button className="add" onClick={handleClick}>Save Edits</button>
      </div>
    </div>
  );
}

// write code for users to choose custom themes via the color wheel function

// This Page is the controls for editing your page
