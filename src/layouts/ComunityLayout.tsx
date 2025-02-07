"use client";

import React from "react";
import TextComunity from "../components/Comunity/TextComunity";
import ImageComuity from "../components/Comunity/ImageComunity";
import MainContainer from "@/components/common/MainContainer";
import Human from "../../public/assets/ComunityH.svg";

const ComunityLayout = () => {
  return (
    <MainContainer>
      <div className="justify-center w-full flex flex-col md:flex-row">
        <TextComunity />
        <ImageComuity />
      </div>
    </MainContainer>
  );
};

export default ComunityLayout;
