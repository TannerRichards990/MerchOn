import { useContext, useState } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { signOut } from '../../services/auth';
import BusinessCard from './BusinessCard';
import './Storefront.css';
import { useBusinesses } from '../../Hooks/useBusinesses';
import { UserContext } from '../../Context/UserContext';

export default function Storefront() {
  const history = useHistory();
  const { location, setLocation } = useState('');
  const { businesses, setBusinesses, error, loading } = useBusinesses(); 
  const { user } = useContext(UserContext);
  const [search, setSearch] = useState('');

  const searchZipCode = () => {
    return businesses.filter((item) => {
      return JSON.parse(item.business_info).business_location.business_zip.includes(search);
    });
  };

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <main className="storefront-main">
        <h1 className="storefront-title">Welcome to MerchOn</h1>

        <div className='storefront-search'>
          <label htmlFor="search">
            <p>Search by Zip</p>
            <input className="sort" name="search" placeholder="Enter Zip" value={search} onChange={(e) => {
              setSearch(e.target.value);
            }}></input>
          </label>
        </div>
        <div className="storefront-map">
          {searchZipCode().map((item) => (
            <BusinessCard key={item.id} {...item} />
          ))}
        </div>

      </main>
    </>
  );
}