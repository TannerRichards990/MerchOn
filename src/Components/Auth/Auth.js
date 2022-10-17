import { useContext } from 'react';
import { useState } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { authUser } from '../../services/auth';




export default function Auth() {
  const { type } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const { user, setUser } = useContext(UserContext);

  const authenticatedUser = async () => {
    const userResponse = await authUser(email, password, type);
    setUser(userResponse);
    setEmail('');
    setPassword('');
    <Redirect to="/" />;
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <section>
      <div className="auth-header">
        <div>
          <input className="form email-input" type="text" value={ email } onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        </div>
        <div>
          <input className="form password-input" type="password" value={ password } onChange={(e) => setPassword(e.target.value)} placeholder="password" />
        </div>

        <button className="form auth-button" onClick={ authenticatedUser }>{ type }</button>

        {
          type === 'sign-in' ?
            <Link className='auth-link' to='/auth/sign-up'>sign-up</Link> :
            <Link className='auth-link' to='/auth/sign-in'>sign-in</Link>
        }

      </div>

      <div className="auth-body">
        <h1>postmodern!</h1>
        <br />
        <hr />
        <h4>login.</h4>
      </div>

    </section>
  );

}