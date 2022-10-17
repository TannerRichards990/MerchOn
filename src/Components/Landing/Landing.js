import { useContext, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';


export default function Landing() {
  return (
    <div className='main-container'>
      <div className='left-side'>
        <img src={'../../../public/assets/MerchOn.png'} alt='MerchOn Logo' />
      </div>
      <div className='right-side'>
        <div className='right-top'>
          <nav>
            <a className='log-in'>Log-In</a>
          </nav>
          <h1 className='Slogan'>Any Place, Anywhere, Local Based Merch, For Anyone</h1>
        </div>
        <div className='Buttons'>
          <button className='Merchant'>Merchant</button>
          <button className='Shopper'>Shopper</button>
        </div>
      </div>
    </div>
    
    
  );
}
