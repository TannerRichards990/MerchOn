import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { authUserSignUp, signOut } from '../../services/auth';
import { createMerchantRow } from '../../services/fetch-utils';




export default function SignUpMerchant() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shopName, setShopName] = useState('');
  const [aboutShop, setAboutShop] = useState('');
  const [businessId, setBusinessId] = useState(0);
  // const [shopImage, setShopImage] = useState('');

  let history = useHistory();
  const type = 'merchant';

  const generateId = () => {
    const now = new Date();
    let finalId = now.getTime();
    console.log('final Id: ', finalId);
    return { finalId };
  };
  

  let business_info = {
    business_name: shopName,
    business_id: businessId,
    business_owner: email,
    categories: '',
    business_about: aboutShop,
    business_location: ''
  };


  const { user, setUser } = useContext(UserContext);
  
  

  const submitHandler = async () => {
    const temp = generateId();
    setBusinessId(10);
    console.log('businessId:', businessId);
    const userResponse = await authUserSignUp(email, password);
    setUser(userResponse);
    console.log('generate function', generateId());
    console.log(business_info);
    await createMerchantRow(email, type, business_info);
    setEmail('');
    setPassword('');
    // history.push('/Storefront');
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
          {/* <button onClick={}>generate</button> */}
        </div>
        <div>
          <label htmlFor="email">Enter User Name:</label>
          <input type="text" value={ email } onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password" value={ password }> Enter your password: </label>
          <input type="password" value={ password } onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="shopName" value={shopName}>Shop Name:</label>
          <input type="text" value={shopName} onChange={(e) => setShopName(e.target.value)}/>
          <label htmlFor="aboutShop" value={aboutShop}>Enter your shop Description:</label>
          <textarea type="textarea" value={aboutShop} onChange={(e) => setAboutShop(e.target.value)} />
          <button className="submit" onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </>
  );
}