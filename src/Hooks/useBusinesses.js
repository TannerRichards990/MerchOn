import { useEffect, useState } from 'react';
import { getBusinesses } from '../services/fetch-utils';

export function useBusinesses() {
  const [businesses, setBusinesses] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = getBusinesses();
        setBusinesses(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { businesses, error, loading };
}
