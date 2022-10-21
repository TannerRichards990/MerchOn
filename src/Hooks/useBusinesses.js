import { useEffect, useState } from 'react';
import { getBusinesses } from '../services/fetch-utils';

export function useBusinesses() {
  const [businesses, setBusinesses] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getBusinesses();
        setBusinesses(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  return { businesses, setBusinesses, error, loading };
}