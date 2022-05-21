import React from "react";
import Header from "../../Header";

type Props = {
  children: React.ReactNode;
};

const LayoutHeader = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayoutHeader;
