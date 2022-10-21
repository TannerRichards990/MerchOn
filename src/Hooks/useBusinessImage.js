import { useState } from 'react';
import { useEffect } from 'react';
import { fetchImage, fetchImageName } from '../services/fetch-utils';

export function useBusinessImage(id) {
  const [imageData, setImageData] = useState();
  const [error, setError] = useState('');
  // console.log(imageData);
  useEffect(() => {
    const getThatImageYo = async () => {
      try {
        const data = await fetchImageName(id);
        // console.log('data: ', data);
        const data2 = await fetchImage(data.business_image_name);
        // console.log('data2: ', data2);
        setImageData(data2.publicURL);
      } catch (e) {
        setError(e.message);
      }
    };
    getThatImageYo();
  }, [id]);
  return { imageData, error };
}