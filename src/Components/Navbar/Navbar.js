import React, { useState, useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useParams } from 'react-router-dom';
import { NavbarData } from './NavbarData';
import { useUser } from '../../Hooks/useUser';
import './Navbar.css';
import { UserContext } from '../../Context/UserContext';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Groups2Icon from '@mui/icons-material/Groups2';
import LogoutIcon from '@mui/icons-material/Logout';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [email, setEmail] = useState('');
  const showSidebar = () => setSidebar(!sidebar);
  const { id } = useParams();
  const { user } = useContext(UserContext);

  if (user) {
    setEmail(user.email);
  }

  const { supaUser, setSupaUser, loading, setLoading, error, setError } = useUser(email);
  console.log(email);
  console.log(supaUser.id);

  return (
    <>
    
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <MenuIcon onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <CloseIcon />
            </Link>
          </li>
          <li className='nav-text'>
            <Link to='/'>
              <StoreIcon />
              <span>Storefront</span>
            </Link>
          </li>
          <li className='nav-text'>
            <Link to={`/Editor/${supaUser.id}`}>
              <StoreIcon />
              <span>My Shop</span>
            </Link>
          </li>
          <li className='nav-text'>
            <Link to={`/Profile/${supaUser.id}`}>
              <AccountCircleIcon />
              <span>Profile</span>
            </Link>
          </li>
          <li className='nav-text'>
            <Link to='/About'>
              <Groups2Icon />
              <span>About</span>
            </Link>
          </li>
          <li className='nav-text'>
            <Link to={`/Cart`}>
              <Groups2Icon />
              <span>Shopping Cart</span>
            </Link>
          </li>
          <li className='nav-text'>
            <Link to='SignOut'>
              <LogoutIcon />
              <span>SignOut</span>
            </Link>
          </li>

        </ul>
      </nav>
    </>
  );
}

export default Navbar;