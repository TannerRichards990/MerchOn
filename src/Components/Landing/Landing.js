import { useHistory } from 'react-router-dom';
import './Landing.css';
import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';
import ReactPlayer from 'react-player/lazy';





export default function Landing() {
  let history = useHistory();  

  const { user } = useContext(UserContext);
  console.log(user);
  if (user) {
    history.push('/Storefront');
  }
  

  const clickMerchantHandler = () => {
    // eslint-disable-next-line no-console
    console.log('I am Clicked... now, I die');
    history.push('/AuthMerchant');
  };
  const clickShopperHandler = () => {
    history.push('/AuthShopper/');
  };

  const clickSignIn = () => {
    history.push('/Storefront');
  };
  

  
  return (
    <div className='main-container'>
      

      <div className='top-side'>
      </div>
      <div className='bottom-side'>
        <div className='right-top'>
          <nav>
            <button className='button' onClick={clickSignIn}>Log-In</button>
          </nav>
          <h1 className='slogan'>Any Place, Anywhere, Local Based Merch, For Anyone</h1>
        </div>
        <div className='buttons'>
          <button className='merchant' onClick={clickMerchantHandler}>Merchant</button>
          <button className='shopper' onClick={clickShopperHandler}>Shopper</button>
        </div>
      </div>
      <ReactPlayer className='music' url={'https://soundcloud.com/bassti_music/pure-imagination?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'} volume={0.1} playing={true} />
    </div>
  );
}
  
