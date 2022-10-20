import { useState, useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { authUser } from '../../services/auth';
import { Redirect } from 'react-router-dom';
import './AuthLogIn.css';

export default function AuthLogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(UserContext);

  const clickHandler = async () => {
    const userResp = await authUser(email, password);
    setUser(userResp);
    setEmail('');
    setPassword('');
  };

  if (user) {
    return <Redirect to="/Storefront" />;
  }

  return (
    <div>
      <div className="form-controls">
        <label htmlFor="email">Email:</label>
        <input className="input" type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-controls">
        <label htmlFor="password">Password:</label>
        <input className="input" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="submit" onClick={clickHandler}>Submit</button>
    </div>
  );
}
