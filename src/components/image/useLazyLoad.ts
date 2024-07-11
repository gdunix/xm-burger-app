import { useEffect, useState } from "react";

const useLazyLoad = (src: string) => {
  const [imgSrc, setImgSrc] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchImage = (src: string) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(img.src);
      setLoading(false);
    };
  };

  useEffect(() => {
    fetchImage(src);
  }, []);

  return { imgSrc, loading };
};

export default useLazyLoad;
