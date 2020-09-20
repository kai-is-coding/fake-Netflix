import React from "react";
// import { useImage } from "react-image";

function Image({ src, alt, ...rest }) {
  return <img src={src} alt={alt} {...rest} />;
}

export default Image;
