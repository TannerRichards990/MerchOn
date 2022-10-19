import { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { signOut } from '../../services/auth';
import BusinessCard from './BusinessCard';
import './Storefront.css';
import { useBusinesses } from '../../Hooks/useBusinesses';
import { UserContext } from '../../Context/UserContext';

export default function Storefront() {
  // const history = useHistory();
  // const { location, setLocation } = useState('');
  const { businesses, 
    // setBusinesses, 
    error, 
    loading 
  } = useBusinesses(); 
  // const { user } = useContext(UserContext);
  const [search, setSearch] = useState('');

  const searchZipCode = () => {
    return businesses.filter((item) => {
      return JSON.parse(item.business_info).business_location.business_zip.includes(search);
    });
  };


  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>{error}</h1>;
  // if (!user) {
  //   return <Redirect to="/Auth/" />;
  // }

  return (
    <>
      <main>
        <h1>congrats you made it here!</h1>
        <NavLink to="/Landing/">Landing</NavLink>
        <button onClick={signOut}>Sign Out</button>

        <div className='search'>
          <label htmlFor="search">Search by zip code</label>
          <input className="sort" name="search" placeholder="enter zip" value={search} onChange={(e) => {
            setSearch(e.target.value);
          }}></input>
        </div>
        <div>
          {searchZipCode().map((item) => (
            <BusinessCard key={item.id} {...item} />
          ))}
        </div>

      </main>
    </>
  );
}