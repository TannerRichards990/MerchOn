import { useEffect, useState } from 'react';
import { getShopItems } from '../services/fetch-utils';

export function useItems(id) {
  const [shopItems, setShopItems] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getShopItems(id);
        setShopItems(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id, setShopItems]);

  return { shopItems, setShopItems, loading, setLoading, error, setError };
}
