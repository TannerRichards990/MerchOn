import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import { authUserSignUp } from '../../services/auth';

export default function SignUpMerchant() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const [merchantName, setMerchantName] = useState('');

  const { user, setUser } = useContext(UserContext);

  const submitHandler = async () => {
    const userResponse = await authUserSignUp(email, password);
    setUser(userResponse);
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className="main-container">
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