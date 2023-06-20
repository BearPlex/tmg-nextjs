// import React from "react";
import Header from "../header/Header";
const PageWrapper = (props) => {
  const { children } = props;
  return (
    <section className="w-full ">
      <Header />
      <section className="pt-44 w-full">{children}</section>
    </section>
  );
};

export default PageWrapper;
