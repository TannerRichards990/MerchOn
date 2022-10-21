/* eslint-disable no-console */
import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useBusiness } from '../../Hooks/useBusiness';
import { useBusinessImage } from '../../Hooks/useBusinessImage';
import { useItems } from '../../Hooks/useItems';
import { useTheme } from '../../Hooks/useTheme';
import './Shop.css';

export default function Shop() {
  const { user } = useContext(UserContext);
  const businessInfo = [];
  const { id } = useParams();
  const { businessDetail } = useBusiness(id);
  const { shopItems } = useItems(id);
  const history = useHistory();
  const [search, setSearch] = useState('');
  const { imageData } = useBusinessImage(id);
  const { themeDetail } = useTheme(id);

  if (!user) {
    history.push('/landing');
  }

  if (businessDetail.length !== 0) {
    let x = JSON.parse(businessDetail.business_info);
    businessInfo.push(x);
  }

  const searchItems = () => {
    return shopItems.filter((item) => {
      return item.item_name.toLowerCase().includes(search);
    });
  };

  const addToCart = (thing) => {
    let cartItem = [
      thing.item_name,
      thing.item_price,
    ];
    console.log('clicked!');
    let cart = [];
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(localStorage);
    alert('Your shopping cart has been updated!');
  };
  return ( 
    <>
      <div className='welcome' >WELCOME TO THE SHOP</div>
      <div className='shop-container'> 
        {businessDetail.length !== 0 && themeDetail[0] && (
          <div className={`standard-${themeDetail[0].theme}`}>
            <div className="shop-title"> {businessInfo[0].business_name}</div>
            <div className="shop-description"> {businessInfo[0].business_about}</div>
            <div className="shop-owner"> {businessInfo[0].business_owner}</div>
            <div className="business_image_el">
              <img className='business-logo' alt='business logo' src={imageData}/>
            </div>
          
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
                <>              
                  <div key={item.item_name} {...item}>
                    <div> item name: {item.item_name}</div>
                    <div> item price: {item.item_price}</div>
                  </div>
                  <button onClick={() => (addToCart(item))}>Add items to shopping cart</button>
                </>
              ))}
            </div>
            <div>{id}</div>
            <div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}