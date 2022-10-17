import { useContext } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { authUserSignUp, signOut } from '../../services/auth';
import { createRow } from '../../services/fetch-utils';



export default function SignUpMerchant() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shopName, setShoName] = useState('');
  const [aboutShop, setAboutShop] = useState('');
  const [shopImage, setShopImage] = useState('');

  let history = useHistory();
  const type = 'merchant';

//   const [type, setType] = useState('');
//   const [merchantName, setMerchantName] = useState('');

  const { user, setUser } = useContext(UserContext);

  const submitHandler = async () => {
    const userResponse = await authUserSignUp(email, password);
    // setType('merchant');
    setUser(userResponse);
    createRow(email, type);
    setEmail('');
    setPassword('');
    history.push('/Storefront');
  };

  const signOutHandler = () => {
    signOut();
    history.push('/');
  };
  
  if (user) {
    history.push('/Storefront');
  }

  return (
    <>
      <div className="main-container">
        <div>
          <button onClick={signOutHandler}>Sign Out</button>
        </div>
        <div>
          <label htmlFor="email">Enter User Name:</label>
          <input type="text" value={ email } onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password" value={ password }> Enter your password: </label>
          <input type="password" value={ password } onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="shopName">Shop Name:</label>
          <input type="text" value={shopName} />
          <button className="submit" onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </>
  );
}