"use client";

import React from "react";
import Image from "next/image";
import Walk from "../../public/assets/walk.svg";
import MapImage from "../../public/images/Map.png";
import MainContainer from "@/components/common/MainContainer";
import Map from "../components/Map";

const MapLayout = () => {
  return (
    <MainContainer>
      <div className="flex flex-col md:flex-row w-full items-center justify-center">
        <div className="basis-1/2 md:mb-10 hidden md:block">
          <Image
            src={MapImage}
            alt=""
            priority={true}
            width={650}
            height={800}
          />
        </div>
        <div className="flex flex-col items-end space-y-5">
          <div className="flex flex-col space-y-3 items-center justify-center text-right">
            <Map />
          </div>
          <div className="basis-1/2 flex flex-col text-center space-y-3 text-right">
            반경 내에 뜨는 산책 거리와 시간 기록 및 경로를 시각화하여 정보 제공.
            <br />
            <Image
              src={Walk}
              alt=" "
              priority={true}
              width={550}
              height={190}
            />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default MapLayout;
