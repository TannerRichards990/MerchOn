import { useHistory } from 'react-router-dom';
import './Landing.css';
import logo from '../../assets/MerchOn.png'; 
import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';
import { Email } from '@mui/icons-material';
import { useState } from 'react';
import { authUser } from '../../services/auth';

export default function Landing() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  let history = useHistory();  

  const { user } = useContext(UserContext);

  if (user) {
    history.push('/Storefront');
  }
  
  const clickMerchantHandler = () => {
    history.push('/AuthMerchant');
  };
  const clickShopperHandler = () => {
    history.push('/AuthShopper/');
  };
  const logInHandler = () => {
    authUser(userEmail, userPassword);
    history.push('/Storefront');
  };
  
  return (
    <div className='landing-container'>
      <div className='left-side'>
        <img src={logo} />
      </div>
      <div className='right-side'>
        <div className='right-top'>
          <nav>
            <a className='log-in'>Log-In</a>
          </nav>
          <h1 className='slogan'>
            Any Place
            <br />
            Anywhere
            <br />
            Local Based Merch
            <br />
            For Everyone
          </h1>
        </div>
        <div className='buttons'>
          <button className='merchant' onClick={clickMerchantHandler}>Merchant</button>
          <button className='shopper' onClick={clickShopperHandler}>Shopper</button>
        </div>
      </div>
    </div>
  );
}
