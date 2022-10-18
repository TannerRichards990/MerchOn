import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../services/auth';
import FilterStorefronts from './FilterStorefronts';
import './Storefront.css';

export default function Storefront() {
  const { location, setLocation } = useState('');
  // const { businesses, setBusinesses, filterBusinesses } = useBusiness();
  return (
    <>
      <main>
        <h1>congrats you made it here!</h1>
        <NavLink to="/Landing/">Landing</NavLink>
        <button onClick={signOut}>Sign Out</button>
        <div>
          <FilterStorefronts location={location} setLocation={setLocation}/>
        </div>
        <div>
          {/* {filterBusinesses().map((item) => (
            <BusinessCard key={item.id} {...item} />
          ))} */}
        </div>

      </main>
    </>
  );
}