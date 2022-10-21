import { useHistory } from 'react-router-dom';
import './Landing.css';
import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';
import ReactPlayer from 'react-player/lazy';




import { Email } from '@mui/icons-material';
import { useState } from 'react';
import { authUser, signOut } from '../../services/auth';

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
    console.log('clicked merchant handler!');
    history.push('/AuthMerchant');
  };
  const clickShopperHandler = () => {
    console.log('clicked shopper handler!');
    history.push('/AuthShopper/');
  };
  const logInHandler = () => {
    history.push('/AuthLogIn');
  };
  const logOutHandler = async () => {
    await signOut();
  };
  
  return (
    <div className='main-container'>
      <div className='top-side'>
      </div>
      <div className='bottom-side'>
        <div className='right-top'>
          <nav>
            <button className='button' onClick={logInHandler}>Log-In</button>
            <button className='button' onClick={logOutHandler}>Log-Out</button>
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
      {/* <ReactPlayer className='music' url={'https://soundcloud.com/bassti_music/pure-imagination?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'} volume={0.1} playing={true} /> */}
    </div>
  );
}
  
