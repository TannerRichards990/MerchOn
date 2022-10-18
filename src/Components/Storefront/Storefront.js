import { useContext, useState } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { signOut } from '../../services/auth';
import FilterStorefronts from './FilterStorefronts';
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
  const businessInfo = [];

  // console.log('businesses', businesses);
  

  
  if (businesses.length !== 0) {
    for (let i = 0; i < businesses.length; i++) {
      console.log('in first loop');
      let x = JSON.parse(businesses[i].business_info);
      businessInfo.push(x);
    }
  }
  // console.log('businesses', businesses);
  // console.log('businessInfo', businessInfo);

  const searchZipCode = () => {
    return businessInfo.filter((item) => {
      return item.businessInfo.match(search);
    });
  };

  console.log(search);
  console.log(searchZipCode);

  // why is our first call to filter businesses return undefined?
  // console.log(data);

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
          <FilterStorefronts location={location} setLocation={setLocation}/>
        </div>
        <div>
          {businesses.map((item) => (
            <BusinessCard key={item.id} {...item} />
          ))}
        </div>

      </main>
    </>
  );
}