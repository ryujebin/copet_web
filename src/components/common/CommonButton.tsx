import React from "react";
import Down from "../../../public/images/down/download.png";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}
const CommonButton = ({ children, onClick }: Props) => {
  return (
    <button
      className="w-44 p-4 pb-4 bg-white m-2 ml-0 text-black rounded-2xl shadow-lg"
      style={{
        backgroundImage: `url(${Down})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CommonButton;
