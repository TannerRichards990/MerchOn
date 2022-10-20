import { useContext } from 'react';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { authUserSignUp } from '../../services/auth';
import { createShopperRow } from '../../services/fetch-utils';
import './AuthShopper.css';

export default function SignUpShopper() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const type = 'shopper';
  const { user, setUser } = useContext(UserContext);

  const submitHandler = async () => {
    const userResponse = await authUserSignUp(email, password);

    setUser(userResponse);
    createShopperRow(email, type);
    setEmail('');
    setPassword('');

    <Redirect to="/Storefront" />;
  };

  if (user) {
    history.push('/Storefront');
  }

  return (
    <>
      <div className="auth-container">

        <div>
          <label htmlFor="email">
            <p>Enter User Name</p>
            <input type="text" value={ email } onChange={(e) => setEmail(e.target.value)} />
          </label>
          
          <label htmlFor="password" value={ password }>
            <p>Enter your password</p>
            <input type="password" value={ password } onChange={(e) => setPassword(e.target.value)} />
          </label>

          <label>
            <p>Click to Submit</p>
            <button className="submit" onClick={submitHandler}>Submit</button>
          </label>

        </div>
      </div>
    </>
  );
}