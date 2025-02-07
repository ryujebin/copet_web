"use client";

import SectionContainer from "@/components/common/SectionContainer";
import React, { useEffect, useRef } from "react";
import {
  MainLayout,
  IntroductionLayout,
  PetPlaceLayout,
  MapLayout,
  ComunityLayout,
  DownLoadLayout,
} from "./index";
import ScrollButton from "@/components/ScrollButton/ScrollButton";
import { useScroll } from "@/hooks/useScroll";
import Footer from "@/components/Footer";

const LayoutIndex = () => {
  const layoutRefs = useRef<HTMLElement[]>([]); // ref 타입을 HTMLElement[]로 변경
  const { setIsScrolling, currentLayout, setCurrentLayout } =
    useScroll(layoutRefs);

  useEffect(() => {
    // layoutRefs.current[0]가 null이 아닌 경우에만 실행
    if (layoutRefs.current[0]) {
      layoutRefs.current[0].scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, []);

  useEffect(() => {
    if (layoutRefs.current[currentLayout]) {
      layoutRefs.current[currentLayout]?.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentLayout]);

  return (
    <div>
      <SectionContainer
        ref={(e: HTMLElement) => {
          if (e) layoutRefs.current[0] = e;
        }}
      >
        <MainLayout
          onClick={() => {
            setCurrentLayout(1);
            setIsScrolling(true);
          }}
        />
      </SectionContainer>
      <SectionContainer
        ref={(e: HTMLElement) => {
          if (e) layoutRefs.current[1] = e;
        }}
      >
        <IntroductionLayout />
      </SectionContainer>
      <SectionContainer
        ref={(e: HTMLElement) => {
          if (e) layoutRefs.current[2] = e;
        }}
      >
        <PetPlaceLayout />
      </SectionContainer>
      <SectionContainer
        ref={(e: HTMLElement) => {
          if (e) layoutRefs.current[3] = e;
        }}
      >
        <MapLayout />
      </SectionContainer>
      <SectionContainer
        ref={(e: HTMLElement) => {
          if (e) layoutRefs.current[4] = e;
        }}
      >
        <ComunityLayout />
      </SectionContainer>
      <SectionContainer
        ref={(e: HTMLElement) => {
          if (e) layoutRefs.current[5] = e;
        }}
      >
        <DownLoadLayout />
      </SectionContainer>
      <section
        ref={(e: HTMLElement) => {
          if (e) layoutRefs.current[6] = e;
        }}
      >
        <Footer />
      </section>
      <div className="fixed inset-y-0 right-6 md:right-16 w-16 flex flex-col">
        <div className="flex flex-col m-auto">
          {Array.from({ length: 7 }, (_, i) => (
            <ScrollButton
              key={i}
              onClick={() => {
                setCurrentLayout(i);
                setIsScrolling(true);
              }}
              isSelected={currentLayout === i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayoutIndex;
