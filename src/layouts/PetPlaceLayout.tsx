"use client";

import MainContainer from "@/components/common/MainContainer";
import React from "react";
import Image from "next/image";
import petPlacePhone from "../../public/images/Placephone.png";
import petPlace from "../../public/assets/petplace.svg";
import background from "../../public/images/image.png";

const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute inset-0 w-full h-90 bg-cover bg-center"
        style={{ backgroundImage: `url(${background.src})` }}
      />
      <div className="relative w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

const PetPlaceLayout = () => {
  return (
    <Background>
      <MainContainer>
        <div className="relative flex flex-col md:flex-row items-center justify-center w-full h-full gap-10">
          <div className="relative w-full md:w-1/2 flex flex-col items-center justify-center text-left p-5">
            <Image
              src={petPlace}
              alt=""
              priority={true}
              width={426}
              height={415.36}
            />
            <h2 className="y-10 mt-10">
              반려동물에게 필요한 물품 또는 언제 어디든 <br />
              함께 가고 싶은 장소를 한 곳에서 검색 가능합니다.
            </h2>
          </div>
          <div className="w-full md:w-2/4 flex justify-center items-center relative z-10">
            <Image
              src={petPlacePhone}
              alt=""
              priority={true}
              layout="responsive"
              objectFit="contain"
              width={337.68}
              height={588.97}
            />
          </div>
        </div>
      </MainContainer>
    </Background>
  );
};

export default PetPlaceLayout;
