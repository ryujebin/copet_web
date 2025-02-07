"use client";

import MainContainer from "@/components/common/MainContainer";
import Whatiscopet from "../../public/assets/whatisCopet.svg";
import React from "react";
import Copetext from "../components/copetext";

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="relative flex items-center justify-center absolute inset-0 w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${Whatiscopet.src})`,
        backgroundPosition: "center calc(50% - 100px)",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
};

const IntroductionLayout = () => {
  return (
    <Background>
      <MainContainer>
        <Copetext />
        <div className="text-center mt-8 w-full max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            코펫이란 무엇인가?
          </h1>
          <h1 className="text-xl sm:text-1xl md:text-2xl lg:text-3xl mb-4">
            반려동물과 보호자를 위한 어플!
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-1xl">
            반려동물을 키우는 사용자들끼리 지식과 경험을 공유하고, 소통할 수
            있는 커뮤니티 플랫폼. 사용자들이 서로 도움을 주고 받으며, 반려동물에
            대한 애정과 책임을 공유할 수 있도록 합니다.
          </h2>
        </div>
      </MainContainer>
    </Background>
  );
};

export default IntroductionLayout;
