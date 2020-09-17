import React from "react";
import { Img } from "react-image";

function Image({ src, ...rest }) {
  return (
    <div>
      <Img {...rest} src={[src]} />
    </div>
  );
}

export default Image;
