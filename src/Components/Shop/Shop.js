import React, { useContext } from 'react';
import { useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useBusiness } from '../../Hooks/useBusiness';
import { useItems } from '../../Hooks/useItems';
import './Shop.css';

export default function Shop() {
  const { user } = useContext(UserContext);
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
          <div className="title">{businessInfo[0].business_name}</div>
          <div className="description">About: {businessInfo[0].business_about}</div>
          <h2 className="owner">Owner: {businessInfo[0].business_owner}</h2>

          <div className='search'>
            <label htmlFor="search">Search for an item!</label>
            <input className="sort" name="search" placeholder="search" value={search} onChange={(e) => {
              setSearch(e.target.value);
            }}></input>
          </div>
          {searchItems().map((item) => (
            <div className="shop-item-el" key={item.item_name} {...item}>
              <div>Item Name: {item.item_name}</div>
              <div>Item Price: {item.item_price}</div>
              <div>Item Quantity: {item.item_availability}</div>
              <div>Description: {item.item_description}</div>
            </div>
          ))}
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