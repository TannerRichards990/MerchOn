import { useContext } from 'react';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { authUserSignUp, signOut } from '../../services/auth';
import { createShopperRow } from '../../services/fetch-utils';

export default function SignUpShopper() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const type = 'shopper';
  const { user, setUser } = useContext(UserContext);

  const submitHandler = async () => {
    const userResponse = await authUserSignUp(email, password);
    // setType('merchant');
    setUser(userResponse);
    createShopperRow(email, type);
    setEmail('');
    setPassword('');
    <Redirect to="/Storefront" />;
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
          {/* <label htmlFor="merchantName">Enter your Business Name</label>
          <input type="text" value={merchantName}></input> */}
          <button className="submit" onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </>
  );
}