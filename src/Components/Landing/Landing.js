import { useContext, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import './Landing.css';
import logo from '../../assets/MerchOn.png'; 


export default function Landing() {
  return (
    <div className='main-container'>
      <div className='left-side'>
        <img src={logo} />
      </div>
      <div className='right-side'>
        <div className='right-top'>
          <nav>
            <a className='log-in'>Log-In</a>
          </nav>
          <h1 className='slogan'>Any Place, Anywhere, Local Based Merch, For Anyone</h1>
        </div>
        <div className='buttons'>
          <button className='merchant'>Merchant</button>
          <button className='shopper'>Shopper</button>
        </div>
      </div>
    </div>
    
    
  );
}
