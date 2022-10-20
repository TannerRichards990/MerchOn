import { useEffect, useState } from 'react';
import { getBusinessDetail } from '../services/fetch-utils';

export function useBusiness(id) {
  const [businessDetail, setBusinessDetail] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBusinessDetail(id); 
        setBusinessDetail(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return { businessDetail, setBusinessDetail, loading, setLoading, error, setError };
}
