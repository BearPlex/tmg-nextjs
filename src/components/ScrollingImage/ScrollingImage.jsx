/* eslint-disable */
"use client";
import React, { useEffect, useState, useRef } from "react";
import debounce from "lodash/debounce";
import Image from "../Image/Image";
import agencyImage1 from "../../assets/images/agency-create.png";
import agencyImage2 from "../../../public/webp/agency-analyze.9945b0af.webp";
import agencyImage3 from "../../../public/webp/agency-commuication.0886a8f5.webp";
import agencyImage4 from "../../../public/webp/agency-execute.e75b99c3.webp";

let mobileScreen = false;
let offsetTop = 0;
let imageContainerEnd = 0;
let imageHeight = 0;
if (typeof window !== "undefined" && window.innerWidth < 768) {
  mobileScreen = true;
} else {
  mobileScreen = false;
}
const Agency = () => {
  const [imageSrc, setImageSrc] = useState(agencyImage1.src);
  const [imageOpacity, setImageOpacity] = useState(1);

  const [scrollY, setScrollY] = useState(90);
  const [fixedImagePostion, setFixedImagePostion] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const agencyRef = useRef();
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [imageSrc]);
  const handleScrollY = () => {
    let element = document.querySelector(".mainContainer");
    let offsetTop = 0;
    if (element && element?.offsetTop) {
      offsetTop = element.offsetTop;
    }

    setScrollY(window.scrollY + scrollY - offsetTop);
  };
  const debouncedHandleScroll = debounce(handleScrollY, 0);
  function getDivEnd(element) {
    let offsetTop = element.offsetTop;
    let offsetHeight = element.offsetHeight;
    return offsetTop + offsetHeight;
  }
  const getTransformValue = (scrollY, imageContainerEnd) => {
    if (scrollY > 90 && scrollY <= imageContainerEnd) {
      return `translateY(${scrollY}px)`;
    }
    if (scrollY > 90 && scrollY > imageContainerEnd) {
      return `translateY(${imageContainerEnd}px)`;
    }
    return `translateY(0px)`;
  };
  useEffect(() => {
    if (scrollY > 90 && scrollY <= imageContainerEnd) {
      if (!fixedImagePostion && !window && !window?.scrollY) {
        setFixedImagePostion(false);
      }
      if (!fixedImagePostion) {
        setFixedImagePostion(true);
      }
    } else if (scrollY > 0 && scrollY > imageContainerEnd) {
      if (fixedImagePostion) {
        setFixedImagePostion(false);
      }
    } else {
      if (fixedImagePostion) {
        setFixedImagePostion(false);
      }
    }
  }, [scrollY]);

  useEffect(() => {
    let divElement = document.querySelector(".imageContainer");
    let imageElement = document.querySelector(".imageWrapper");
    imageHeight = imageRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    const offset = 0.3 * viewportHeight;
    imageContainerEnd = getDivEnd(divElement) - imageHeight - offset;

    // imageContainerEnd = getDivEnd(divElement) - imageHeight - 120;
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);
  const handleScroll = () => {
    const beautyRef = document?.getElementById("beautyRef");
    const thoughRef = document?.getElementById("thoughRef");
    const communicateRef = document?.getElementById("communicateRef");
    const executeRef = document?.getElementById("executeRef");
    let newImageSrc = agencyImage1.src;
    const beautyRect = beautyRef?.getBoundingClientRect();
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
      newImageSrc = agencyImage4.src;
    }
    if (newImageSrc !== imageSrc) {
      setImageOpacity(0);
      // setTimeout(() => {
      setImageSrc(newImageSrc);
      setImageOpacity(1);
      // }, 200);
    }
  };
  return (
    <div
      ref={agencyRef}
      className="pagePaddingX my-8 md:my-10 flex items-start justify-between relative max-w-7xl mx-auto h-full mainContainer"
    >
      <div className="w-full hidden md:block  relative mt-10">
        <div className="w-full flex flex-row relative top-[90px]">
          <div className="w-1/2 pr-6">
            <div className="flex h-[70vh] w-full flex-col justify-start">
              <h2
                id="beautyRef"
                className="heading mb-5 blackHeadingText leading-none relative mt-[8vw]"
              >
                Create
              </h2>
              <p className="paragraph blackDescriptionText">
                We think outside the box and push boundaries to create fresh and
                original content.
              </p>
            </div>
            <div className="flex h-[100vh] w-full flex-col justify-center">
              <h2
                id="thoughRef"
                className="heading mb-5 mt-10 blackHeadingText leading-none relative"
              >
                Analyze
              </h2>
              <p className="paragraph blackDescriptionText">
                Analyzing the market and consumer data helps us provide
                customized solutions to everyday business challenges.
              </p>
            </div>
            <div className="flex h-[100vh] w-full flex-col justify-center">
              <h2
                id="communicateRef"
                className="heading mb-5 mt-10 blackHeadingText leading-none relative"
              >
                Communicate
              </h2>
              <p className="paragraph blackDescriptionText">
                Through personal and digital mediums, we provide fast and clear
                communication to keep information flow open.{" "}
              </p>
            </div>
            <div className="flex h-[100vh] w-full flex-col justify-center">
              <h2
                id="executeRef"
                className="heading mb-5 mt-10 blackHeadingText leading-none relative"
              >
                Execute
              </h2>
              <p className="paragraph blackDescriptionText">
                We execute our ideas into actions through strategies to make
                every business a winning story.
              </p>
            </div>
          </div>
          <div className="flex imageContainer" ref={imageContainerRef}>
            <div
              className={`h-fit  ${
                fixedImagePostion
                  ? "image-scroll-wrapper image-scroll-width imageTransitionEffect"
                  : "image-scroll-width imageTransitionEffect"
              }`}
              style={
                !fixedImagePostion
                  ? {
                      transform: getTransformValue(scrollY, imageContainerEnd),
                      // transition: "transform 0.3s linear",
                      transition:
                        "transform 0.1s cubic-bezier(0.4, 0, 0.01, 1)",
                    }
                  : {
                      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.1, 1)",
                    }
              }
            >
              <div className="imageWrapper" ref={imageRef}>
                <Image
                  width={500}
                  height={300}
                  id="imageRef"
                  src={imageSrc}
                  alt="agency images"
                  loading="eager"
                  decoding="sync"
                  style={{ opacity: imageOpacity }}
                  layout="responsive"
                  objectFit="fit"
                  className="imageTransitionEffect  imageRounded object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full block md:hidden">
        <div className="flex w-full flex-col justify-center mb-8 md:mb-16">
          <div className="w-full mb-4">
            <Image
              width={500}
              height={300}
              id="imageRef"
              src={agencyImage1}
              alt="agency images"
              loading="eager"
              decoding="sync"
              layout="responsive"
              objectFit="cover"
              className=" imageRounded image-animation"
            />
          </div>
          <h2
            id="beautyRef"
            className="heading mb-2 pt-2 blackHeadingText leading-none relative"
          >
            Create
          </h2>
          <p className="paragraph mb-15 blackDescriptionText">
            We think outside the box and push boundaries to create fresh and
            original content.
          </p>
        </div>

        <div className="flex w-full flex-col justify-center mb-8 md:mb-16">
          <div className="w-full mb-4">
            <Image
              width={500}
              height={300}
              id="imageRef"
              src={agencyImage2.src}
              alt="agency images"
              loading="eager"
              decoding="sync"
              layout="responsive"
              objectFit="cover"
              className=" imageRounded image-animation"
            />
          </div>
          <h2
            id="thoughRef"
            className="heading mb-2 pt-2 blackHeadingText leading-none relative"
          >
            Analyze
          </h2>
          <p className="paragraph mb-15 blackDescriptionText">
            Analyzing the market and consumer data helps us provide customized
            solutions to everyday business challenges.
          </p>
        </div>

        <div className="flex w-full flex-col justify-center mb-8 md:mb-16">
          <div className="w-full mb-4">
            <Image
              width={500}
              height={300}
              id="imageRef"
              src={agencyImage3}
              alt="agency images"
              loading="eager"
              decoding="sync"
              layout="responsive"
              objectFit="cover"
              className=" imageRounded image-animation"
            />
          </div>
          <h2 className="heading mb-2 pt-2 blackHeadingText leading-none relative">
            Communicate
          </h2>
          <p className="paragraph mb-15 blackDescriptionText">
            Through personal and digital mediums, we provide fast and clear
            communication to keep information flow open.{" "}
          </p>
        </div>

        <div className="flex w-full flex-col justify-center mb-5 md:mb-16">
          <div className="w-full mb-4">
            <Image
              width={500}
              height={300}
              id="imageRef"
              src={agencyImage4}
              alt="agency images"
              loading="eager"
              decoding="sync"
              layout="responsive"
              objectFit="cover"
              className=" imageRounded image-animation"
            />
          </div>
          <h2 className="heading mb-2 pt-2 blackHeadingText leading-none relative">
            Execute
          </h2>
          <p className="paragraph mb-15 blackDescriptionText">
            We execute our ideas into actions through strategies to make every
            business a winning story.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Agency;
