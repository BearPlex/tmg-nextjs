"use client";
import React, { useState, useEffect } from "react";
import MainVideoContainer from "./MainVideoContainer";
const TextWithVideoContainer = ({
  videoSrc,
  videoAlt = "services",
  id = "service",
  children,
  cssClass,
  childcssClass,
}) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div>
      <section className="max-w-7xl mx-auto  componentsMainGap pagePaddingX">
        <section
          id={id}
          className="flex flex-col md:flex-row componentsMainGap py-0  2xl:py-28 lg:py-14 "
        >
          {windowWidth > 0 && (
            <MainVideoContainer
              isMobileScreen={windowWidth > 786 ? false : true}
              videoSrc={videoSrc}
              videoAlt={videoAlt}
              cssClass={cssClass}
            />
          )}
          <div className={`w-full ${childcssClass}`}>{children}</div>
        </section>
      </section>
    </div>
  );
};

export default TextWithVideoContainer;
