import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { grabID } from '../services/fetch-utils';

export function useUser(email) {
  const [supaUser, setSupaUser] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  // const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await grabID(email);
        setSupaUser(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [email]);

  return { supaUser, setSupaUser, loading, setLoading, error, setError };
}
