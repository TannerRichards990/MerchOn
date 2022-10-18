import { useContext, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { signOut } from '../../services/auth';
import FilterStorefronts from './FilterStorefronts';
import BusinessCard from './BusinessCard';
import './Storefront.css';
import { useBusinesses } from '../../Hooks/useBusinesses';
import { UserContext } from '../../Context/UserContext';

export default function Storefront() {
  const { location, setLocation } = useState('');
  const { businesses, setBusinesses, filterBusinesses, error, loading } = useBusinesses(); 
  const { user } = useContext(UserContext);
  const data = filterBusinesses();
  console.log(data);

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
        <div>
          <FilterStorefronts location={location} setLocation={setLocation}/>
        </div>
        <div>
          {filterBusinesses().map((item) => (
            <BusinessCard key={item.business_id} {...item} />
          ))}
        </div>

      </main>
    </>
  );
}