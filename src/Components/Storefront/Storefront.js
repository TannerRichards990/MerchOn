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