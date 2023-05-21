import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getImages() {
    try {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getImages()
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , []);

  return {
    images,
    isLoading
  }
}
