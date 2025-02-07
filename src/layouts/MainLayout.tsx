"use client";

import MainContainer from "@/components/common/MainContainer";
import CommonButton from "@/components/common/CommonButton";
import background from "../../public/images/back.png";
import React from "react";

const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${background.src})` }}
      />
      <div className="relative w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

interface Props {
  onClick: () => void;
}
const MainLayout = ({ onClick }: Props) => {
  return (
    <Background>
      <MainContainer>
        <div className="text-6xl mt-40 text-center">
          <div className="flex">
            <h1 className="font-bold m-auto items-center">반려동물</h1>
            <h1 className="m-auto items-center">의</h1>
          </div>
          <h1 className="text-white bg-black rounded-full"> # 유대감</h1>
          <div className="flex justify-center">
            <h1 className="font-bold">코펫</h1>에서
          </div>
        </div>
        <button
          className="w-56 p-4 pb-4 m-auto border border-solid border-black bg-white text-black rounded-full shadow-lg "
          onClick={onClick}
        >
          지금 시작하기
        </button>
      </MainContainer>
    </Background>
  );
};

export default MainLayout;
