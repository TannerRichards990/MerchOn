import { useEffect, useState } from 'react';
import { getBusinessTheme } from '../services/fetch-utils';

export function useTheme(id) {
  const [themeDetail, setThemeDetail] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBusinessTheme(id); 
        setThemeDetail(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return { themeDetail, setThemeDetail, loading, setLoading, error, setError };
}