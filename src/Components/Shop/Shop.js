import React, { useContext } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useBusiness } from '../../Hooks/useBusiness';
import './Shop.css';

export default function Shop() {
  const businessInfo = [];
  const { id } = useParams();
  const { businessDetail, setBusinessDetail, loading, setLoading, error, setError } = useBusiness(id);
  const history = useHistory();

  if (businessDetail.length !== 0) {
    let x = JSON.parse(businessDetail.business_info);
    businessInfo.push(x);
  }
  // console.log('business Detail', businessDetail);
  // console.log('business Info', businessInfo);
  
  const clickHandler = () => {
    history.push(`/items/${id}`);
  };




  return ( 
    <>
      <div className="welcome">WELCOME TO THE SHOP</div>
      {businessDetail.length !== 0 && (
        <div>
          <div className="title">{businessInfo[0].business_name}1</div>
          <div className="description">{businessInfo[0].business_about}2</div>
          <div className="owner">{businessInfo[0].business_owner}3</div>
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
