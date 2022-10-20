import React, { useContext } from 'react';
import { useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useBusiness } from '../../Hooks/useBusiness';
import { useItems } from '../../Hooks/useItems';
import './Shop.css';

export default function Shop() {
  const businessInfo = [];
  const businessItems = [];
  const { id } = useParams();
  const { businessDetail, setBusinessDetail, loading, setLoading, error, setError } = useBusiness(id);
  const { shopItems, setShopItems } = useItems(id);
  const history = useHistory();
  const [search, setSearch] = useState('');

  if (businessDetail.length !== 0) {
    let x = JSON.parse(businessDetail.business_info);
    businessInfo.push(x);
  }
  console.log('search', search);
  
  const clickHandler = () => {
    history.push(`/items/${id}`);
  };

  const searchItems = () => {
    return shopItems.filter((item) => {
      return item.item_name.toLowerCase().includes(search);
    });
  };


  return ( 
    <>
      <div className="welcome">WELCOME TO THE SHOP</div>
      {businessDetail.length !== 0 && (
        <div>
          <div className="shop-title">Business Name: {businessInfo[0].business_name}</div>
          <div className="shop-description">Business About: {businessInfo[0].business_about}</div>
          <div className="shop-owner">Business PWNer: {businessInfo[0].business_owner}</div>

          <div className='shop-search'>
            <label htmlFor="search">
              <p>Search for an item!</p>
              <input className="shop-sort" name="search" placeholder="search" value={search} onChange={(e) => {
                setSearch(e.target.value);
              }}></input>
            </label>
          </div>
          <div className="shop-map">
            {searchItems().map((item) => (
              <div key={item.item_name} {...item}>
                <div>This should show the item name: {item.item_name}</div>
                <div>This should show the item price: {item.item_price}</div>
              </div>
            ))}
          </div>
          <div>{id}</div>
          <div>
            <button onClick={clickHandler}>Add items to shop</button>
          </div>
        </div>
      )
      }
    </>
  );
}