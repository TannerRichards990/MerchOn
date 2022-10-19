import React, { useContext } from 'react';
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

  if (businessDetail.length !== 0) {
    let x = JSON.parse(businessDetail.business_info);
    businessInfo.push(x);
  }
  console.log('getShopItems', shopItems);
  
  const clickHandler = () => {
    history.push(`/items/${id}`);
  };

  return ( 
    <>
      <div className="welcome">WELCOME TO THE SHOP</div>
      {businessDetail.length !== 0 && (
        <div>
          <div className="title">Business Name: {businessInfo[0].business_name}</div>
          <div className="description">Business About: {businessInfo[0].business_about}</div>
          <div className="owner">Business PWNer: {businessInfo[0].business_owner}</div>
          {shopItems.map((item) => (
            <div key={item.item_name} {...item}>
              <div>This should show the item name: {item.item_name}</div>
              <div>This should show the item price: {item.item_price}</div>
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