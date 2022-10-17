// import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { UserContext } from '../../Context/UserContext';
import './Landing.css';
import logo from '../../assets/MerchOn.png'; 


export default function Landing() {
  let history = useHistory();  
  const clickMerchantHandler = () => {
    // eslint-disable-next-line no-console
    console.log('I am Clicked... now, I die');
    history.push('/AuthMerchant');
  };
  const clickShopperHandler = () => {
    history.push('/AuthShopper/');
  };

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
          <button className='merchant' onClick={clickMerchantHandler}>Merchant</button>
          <button className='shopper' onClick={clickShopperHandler}>Shopper</button>
        </div>
      </div>
    </div>
    
    
  );
}
