"use client";
/* eslint-disable */

import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
// import { agency } from '../../helpers/Helpers';
import agencyImage1 from "../../assets/images/agency-create-1.png";
import agencyImage2 from "../../assets/images/agency-analyze-2.png";
import agencyImage3 from "../../assets/images/agency-commuication-3.png";
import agencyImage4 from "../../assets/images/agency-execute-4.png";
import Image from "../Image/Image";

let mobileScreen = false;
if (typeof window !== "undefined" && window.innerWidth < 768) {
  mobileScreen = true;
  console.log("Window width is less than 768");
} else {
  mobileScreen = false;
  console.log("Window width is 768 or greater");
}
const Agency = () => {
  const [screenYScroll, setScreenYScroll] = useState(0);
  // let screenYScroll = 0;
  // if (typeof window !== "undefined" && window.pageYOffset) {
  //   setScreenYScroll(window.pageYOffset);
  // }
  const agencyRef = useRef();
  const [imageSrc, setImageSrc] = useState(agencyImage1.src);
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      mobileScreen = true;
    } else {
      mobileScreen = false;
    }
    if (!mobileScreen) {
      const handleScroll = () => {
        const beautyRef = document?.getElementById("beautyRef");
        const thoughRef = document?.getElementById("thoughRef");
        const communicateRef = document?.getElementById("communicateRef");
        const executeRef = document?.getElementById("executeRef"); // new line
        let newImageSrc = agencyImage1.src;
        if (
          beautyRef?.getBoundingClientRect().top < 0 &&
          thoughRef?.getBoundingClientRect().top > 0
        ) {
          newImageSrc = agencyImage2.src;
        } else if (
          thoughRef?.getBoundingClientRect().top < 0 &&
          communicateRef?.getBoundingClientRect().top > 0
        ) {
          newImageSrc = agencyImage3.src;
        } else if (
          communicateRef?.getBoundingClientRect().top < 0 &&
          executeRef?.getBoundingClientRect().top > 0
        ) {
          newImageSrc = agencyImage4.src;
        } else if (executeRef?.getBoundingClientRect().top < 0) {
          // new condition
          newImageSrc = agencyImage4.src; // new image for the fourth section
        }

        if (newImageSrc !== imageSrc) {
          setImageSrc(newImageSrc);
        }
      };

      window.addEventListener("scroll", handleScroll);
      if (typeof window !== "undefined" && window.pageYOffset) {
        setScreenYScroll(window.pageYOffset);
      }
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [imageSrc]);
  const [scrollY, setScrollY] = useState(-100);

  const [stickyTop, setStickyTop] = useState(0);
  const imageContainerRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window !== "undefined" && window.pageYOffset) {
      setScreenYScroll(window.pageYOffset);
    }
    const handleScrollLayout = () => {
      if (!imageContainerRef.current) return;

      const containerHeight = imageContainerRef.current.offsetHeight;
      const newStickyTop = window.pageYOffset + 300;

      setStickyTop(newStickyTop);
    };

    window.addEventListener("scroll", handleScrollLayout);
    return () => window.removeEventListener("scroll", handleScrollLayout);
  }, [screenYScroll]);

  return (
    <div
      ref={agencyRef}
      className="pagePaddingX pt-7 md:pt-20 flex items-start justify-between relative 3xl:max-w-7xl 3xl:mx-auto h-full"
    >
      <div className="w-full hidden md:block  relative">
        <div className="w-full flex flex-row">
          <div className="w-1/2">
            <div className="flex h-[50vh] w-full flex-col justify-center">
              <h2
                id="beautyRef"
                className="heading mb-5 font-bold blackDescriptionText leading-none relative pl-6"
              >
                <sup className="smallText text-pink-400 font-medium inline-block absolute top-3 left-0">
                  01
                </sup>{" "}
                Beauty
              </h2>
              <p className="text-text-medium font-medium font-circular-medium blackDescriptionText pl-5">
                We think outside the box and push boundaries to create fresh and
                original content.
              </p>
            </div>
            <div className="flex h-[100vh] w-full flex-col justify-center">
              <h2
                id="thoughRef"
                className="heading mb-5 font-bold blackDescriptionText leading-none relative pl-6"
              >
                <sup className="smallText text-pink-400 font-medium inline-block absolute top-3 left-0">
                  02
                </sup>{" "}
                Analyze
              </h2>
              <p className="text-text-medium font-medium font-circular-medium blackDescriptionText pl-5">
                Analyzing the market and consumer data helps us provide
                customized solutions to everyday business challenges.
              </p>
            </div>
            <div className="flex h-[100vh] w-full flex-col justify-center">
              <h2
                id="communicateRef"
                className="heading mb-5 font-bold blackDescriptionText leading-none relative pl-6"
              >
                <sup className="smallText text-pink-400 font-medium inline-block absolute top-3 left-0">
                  03
                </sup>{" "}
                Communicate
              </h2>
              <p className="text-text-medium font-medium font-circular-medium blackDescriptionText pl-5">
                Through personal and digital mediums, we provide fast and clear
                communication to keep information flow open.{" "}
              </p>
            </div>
            <div className="flex h-[80vh] w-full flex-col justify-center">
              <h2
                id="executeRef"
                className="heading mb-5 font-bold blackDescriptionText leading-none relative pl-6"
              >
                <sup className="smallText text-pink-400 font-medium inline-block absolute top-3 left-0">
                  04
                </sup>{" "}
                Execute
              </h2>
              <p className="text-text-medium font-medium font-circular-medium blackDescriptionText pl-5">
                We execute our ideas into actions through strategies to make
                every business a winning story.
              </p>
            </div>
          </div>
          <div className="w-1/2 flex" ref={imageContainerRef}>
            <div
              className="h-fit"
              style={{ position: "sticky", top: `${stickyTop}px` }}
              // style={{ position: "sticky", top: `${stickyTop}px` }}
            >
              <Image
                width={500}
                height={300}
                id="imageRef"
                src={imageSrc}
                alt="agency images"
                loading="lazy"
                layout="responsive"
                objectFit="cover"
                className="relative"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full block md:hidden">
        <div className="flex w-full flex-col justify-center mb-16">
          <div className="w-full mb-4">
            <Image
              width={500}
              height={300}
              id="imageRef"
              src={agencyImage1}
              alt="agency images"
              loading="lazy"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <h2
            id="beautyRef"
            className="heading mb-2 font-bold blackDescriptionText leading-none relative pl-6"
          >
            <sup className=" text-pink-400 font-medium inline-block absolute top-3 left-0">
              01
            </sup>{" "}
            Beauty
          </h2>
          <p className="paragraph mb-15 font-medium font-circular-medium blackDescriptionText pl-5">
            We think outside the box and push boundaries to create fresh and
            original content.
          </p>
        </div>

        <div className="flex w-full flex-col justify-center mb-16">
          <div className="w-full mb-4">
            <Image
              width={500}
              height={300}
              id="imageRef"
              src={agencyImage2}
              alt="agency images"
              loading="lazy"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <h2
            id="thoughRef"
            className="heading mb-2 font-bold blackDescriptionText leading-none relative pl-6"
          >
            <sup className=" text-pink-400 font-medium inline-block absolute top-3 left-0">
              02
            </sup>{" "}
            Analyze
          </h2>
          <p className="paragraph mb-15 font-medium font-circular-medium blackDescriptionText pl-5">
            Analyzing the market and consumer data helps us provide customized
            solutions to everyday business challenges.
          </p>
        </div>

        <div className="flex w-full flex-col justify-center mb-16">
          <div className="w-full mb-4">
            <Image
              width={500}
              height={300}
              id="imageRef"
              src={agencyImage3}
              alt="agency images"
              loading="lazy"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <h2 className="heading mb-2 font-bold blackDescriptionText leading-none relative pl-6">
            <sup className=" text-pink-400 font-medium inline-block absolute top-3 left-0">
              03
            </sup>{" "}
            Communicate
          </h2>
          <p className="paragraph mb-15 font-medium font-circular-medium blackDescriptionText pl-5">
            Through personal and digital mediums, we provide fast and clear
            communication to keep information flow open.{" "}
          </p>
        </div>

        <div className="flex w-full flex-col justify-center mb-16">
          <div className="w-full mb-4">
            <Image
              width={500}
              height={300}
              id="imageRef"
              src={agencyImage4}
              alt="agency images"
              loading="lazy"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <h2 className="heading mb-2 font-bold blackDescriptionText leading-none relative pl-6">
            <sup className=" text-pink-400 font-medium inline-block absolute top-3 left-0">
              04
            </sup>{" "}
            Execute
          </h2>
          <p className="paragraph mb-15 font-medium font-circular-medium blackDescriptionText pl-5">
            We execute our ideas into actions through strategies to make every
            business a winning story.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Agency;
