// import React from "react";
import Header from "../header/Header";
const PageWrapper = (props) => {
  const { children } = props;
  return (
    <section className="max-w-screen overflow-x-hidden">
      <Header />
      <section className="pt-32 md:pt-44 w-screen">{children}</section>
    </section>
  );
};

export default PageWrapper;
