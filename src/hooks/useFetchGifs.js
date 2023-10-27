import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };
  useEffect(() => {
    //getGifs(category).then(newImages=>setImages(newImages));
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
