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
  console.log(user);
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
    <div className='main-container'>
      <div className='left-side'>
        <img src={logo} />
      </div>
      <div className='right-side'>
        <div className='right-top'>
          <h1 className='slogan'>Any Place, Anywhere, Local Based Merch, For Anyone</h1>
          <div className="log-in-element">
            <h3>Already have an account?</h3>
            <label htmlFor="email">Email: </label>
            <input type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
            <label htmlFor="password"> Password: </label>
            <input type="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
            <button onClick={logInHandler}>Log-In</button>
          </div>
        </div>
        <div className='buttons'>
          <button className='merchant' onClick={clickMerchantHandler}>Merchant</button>
          <button className='shopper' onClick={clickShopperHandler}>Shopper</button>
        </div>
      </div>
    </div>
  );
}
