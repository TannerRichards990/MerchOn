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
  const [cart, setCart] = useState([]);

  if (businessDetail.length !== 0) {
    let x = JSON.parse(businessDetail.business_info);
    businessInfo.push(x);
  }
  
  const clickHandler = () => {
    history.push(`/items/${id}`);
  };

  const searchItems = () => {
    return shopItems.filter((item) => {
      return item.item_name.toLowerCase().includes(search);
    });
  };

  // localStorage.setItem('booger1', 'booger2');
  // console.log(localStorage);

  const addToCart = (thing) => {
    // console.log('clicked!');
    localStorage.setItem(thing.item_name, thing.item_price);
    // console.log(localStorage);
    alert('Your shopping cart has been updated!');
  };

  const clearCart = () => {
    localStorage.clear();
    // console.log(localStorage);
  };

  return ( 
    <>
      <div className="welcome">WELCOME TO THE SHOP</div>
      {businessDetail.length !== 0 && (
        <div>
          <div className="title">Business Name: {businessInfo[0].business_name}</div>
          <div className="description">Business About: {businessInfo[0].business_about}</div>
          <div className="owner">Business PWNer: {businessInfo[0].business_owner}</div>

          <div className='search'>
            <label htmlFor="search">Search for an item!</label>
            <input className="sort" name="search" placeholder="search" value={search} onChange={(e) => {
              setSearch(e.target.value);
            }}></input>
          </div>
          {searchItems().map((item) => (
            <div key={item.item_name} {...item}>
              <div>This should show the item name: {item.item_name}</div>
              <div>This should show the item price: {item.item_price}</div>
              <button onClick={()=> addToCart(item)}>Add to Shopping Cart</button>
              <button onClick={clearCart}>Clear Cart</button>
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