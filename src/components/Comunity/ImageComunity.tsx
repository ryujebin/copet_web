import React from "react";
import "../../css/copetText.css";

const ImageComunity = () => {
  return (
    <div className="continer">
      <div className="Imaain">
        <img
          src="/images/ComunityS.png"
          alt=" "
          className="hidden md:block"
          width={300}
          height={773}
        />
        <img src="/assets/ComunityH.svg" alt=" " />
      </div>
    </div>
  );
};

export default ImageComunity;
