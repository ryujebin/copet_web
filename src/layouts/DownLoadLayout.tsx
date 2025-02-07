"use client";

import React from "react";
import Image from "next/image";
import MainContainer from "@/components/common/MainContainer";
import PhoneImage from "../../public/images/down/DownPhone.png";
import Downlaod from "../../public/images/down/download.png";
import DownlaodA from "../../public/images/down/download3.png";

const DownLoadLayout = () => {
  return (
    <MainContainer>
      <div className="w-full h-full flex flex-row">
        <div className="basis-1/2 w-full text-left md:p-5 m-auto">
          <h2 className="text-6xl">
            반려동물의
            <br />
            모든 것 어디서?
          </h2>
          <h1 className="text-8xl font-blod">코펫에서!</h1>
          <div className="m-2 mt-12 ml-0 flex flex-row gap-5">
            <Image src={DownlaodA} priority={true} alt=" " width={324.03} />
            <Image src={Downlaod} priority={true} alt=" " width={324.03} />
          </div>
        </div>
        <div className="basis-1/2 h-auto m-0 p-0 flex flex-col-reverse items-center hidden md:flex">
          <Image src={PhoneImage} priority={true} alt="" width={516} />
        </div>
      </div>
    </MainContainer>
  );
};

export default DownLoadLayout;
