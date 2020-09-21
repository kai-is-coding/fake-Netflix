import React from "react";
import { useImage } from "react-image";

function Image({ imageURL, alt, ...rest }) {
  const { src, isLoading, error } = useImage({
    srcList: [
      imageURL,
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxMNso6QcSI03KFMAmy6MskzaaXp6eG-XxlA&usqp=CAU",
    ],
    useSuspense: false,
  });
  // console.log("loading", isLoading);
  // console.log("errors", error);
  return <img src={src} alt={alt} {...rest} />;
}

export default Image;
