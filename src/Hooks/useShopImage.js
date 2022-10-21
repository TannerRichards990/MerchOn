import { useEffect, useState } from 'react';
import { fetchShopImage, fetchShopImageName } from '../services/fetch-utils';

export function useShopImage(id) {
  const [shopImageData, setShopImageData] = useState();
  const [error, setError] = useState('');
  useEffect(() => {
    const getThatImageG = async () => {
      try {
        const data = await fetchShopImageName(id);
        const data2 = await fetchShopImage(data.shop_image_name);
        setShopImageData(data2.publicURL);
      } catch (e) {
        setError(e.message);
      } 
    };
    getThatImageG();
  }, [id]);
  return { shopImageData, error };
}