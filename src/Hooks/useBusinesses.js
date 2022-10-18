import { useEffect, useState } from 'react';
import { getBusinesses } from '../services/fetch-utils';

export function useBusinesses() {
  const [businesses, setBusinesses] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBusinesses();
        setBusinesses(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { businesses, setBusinesses, error, loading };
}
