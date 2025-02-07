import React, { ReactNode, forwardRef } from "react";

interface Props {
  children: ReactNode;
}
const SectionContainer = (
  { children }: Props,
  ref: React.ForwardedRef<HTMLElement>,
) => {
  return (
    <section
      className="flex flex-col items-center text-center
      h-screen w-vw max-w-screen-3xl m-0 p-0 
      border-solid border-2"
      ref={ref}
    >
      {children}
    </section>
  );
};

export default forwardRef(SectionContainer);
