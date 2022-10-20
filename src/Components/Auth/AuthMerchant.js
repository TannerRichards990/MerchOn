import { useContext } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { authUserSignUp } from '../../services/auth';
import { createMerchantRow } from '../../services/fetch-utils';
import './AuthMerchant.css';

export default function SignUpMerchant() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shopName, setShopName] = useState('');
  const [aboutShop, setAboutShop] = useState('');
  const [businessId, setBusinessId] = useState(0);
  const [businessStreet, setBusinessStreet] = useState('');
  const [businessCity, setBusinessCity] = useState('');
  const [businessState, setBusinessState] = useState('');
  const [businessZip, setBusinessZip] = useState('');

  let history = useHistory();
  const type = 'merchant';

  const generateId = () => {
    const now = new Date();
    let finalId = now.getTime();
    // console.log('final Id: ', finalId);
    return finalId;
  };

  if (businessId === 0) {
    const temp = generateId();
    // console.log(temp);
    if (businessId === 0) {
      setBusinessId(temp);
    }
  }

  let business_info = {
    business_name: shopName,
    business_id: businessId,
    business_owner: email,
    categories: '',
    business_about: aboutShop,
    business_location: {
      business_street: businessStreet,
      business_city: businessCity,
      business_state: businessState,
      business_zip: businessZip
    }
  };

  const { user, setUser } = useContext(UserContext);
  
  const submitHandler = async () => {
    const userResponse = await authUserSignUp(email, password);
    setUser(userResponse);
    await createMerchantRow(email, type, business_info);
    history.push('/Storefront');
  };

  if (user) {
    history.push('/Storefront');
  }

  return (
    <div className="input-container">
      <div className="inputs">
        <label htmlFor="email">
          <p>Enter User Name</p>
          <input type="text" value={ email } onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label htmlFor="password" value={ password }>
          <p>Enter your password</p>
          <input type="password" value={ password } onChange={(e) => setPassword(e.target.value)} />
        </label>

        <label htmlFor="shopName" value={shopName}>
          <p>Shop Name</p>
          <input type="text" value={shopName} onChange={(e) => setShopName(e.target.value)}/>
        </label>

        <label htmlFor="aboutShop" value={aboutShop}>
          <p>Enter your shop description</p>
          <textarea type="textarea" value={aboutShop} onChange={(e) => setAboutShop(e.target.value)} />
        </label>

        <label htmlFor="businessStreet">
          <p>Street Address</p>
          <input type="text" value={businessStreet} onChange={(e) => setBusinessStreet(e.target.value)} />
        </label>

        <label htmlFor="businessCity">
          <p>City</p>
          <input type="text" value={businessCity} onChange={(e) => setBusinessCity(e.target.value)} />
        </label>

        <label htmlFor="businessState">
          <p>State</p>
          <input type="text" value={businessState} onChange={(e) => setBusinessState(e.target.value)} />
        </label>

        <label htmlFor="businessZip">
          <p>Zip Code</p>
          <input type="text" value={businessZip} onChange={(e) => setBusinessZip(e.target.value)} />
        </label>

        <div className="submit-button">
          <button className="submit" onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </div>
  );
}