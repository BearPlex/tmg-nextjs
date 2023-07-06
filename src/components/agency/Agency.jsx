/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";
// import { agency } from '../../helpers/Helpers';
import agencyImage1 from "../../assets/images/agency-create-1.png";
import agencyImage2 from "../../assets/images/agency-analyze-2.png";
import agencyImage3 from "../../assets/images/agency-commuication-3.png";
import agencyImage4 from "../../assets/images/agency-execute-4.png";
import Image from "../Image/Image";
const Agency = () => {
  let mobileScreen = false;
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    mobileScreen = true;
    console.log("Window width is less than 768");
  } else {
    mobileScreen = false;
    console.log("Window width is 768 or greater");
  }
  const [imageSrc, setImageSrc] = useState(agencyImage1.src);
  const [isVisible, setIsVisible] = useState(false);
  const agencyRef = useRef();
  useEffect(() => {
    if (!mobileScreen) {
      const options = {
        root: null, // relative to document viewport
        rootMargin: "-50px", // margin around root. Values are similar to css property. Unitless values not allowed
        threshold: 0, // visible amount of item shown in relation to root
      };
      const observer = new IntersectionObserver(([entry]) => {
        // console.log(entry);
        // console.log("entry");
        setIsVisible(entry.isIntersecting);
      }, options);
      if (agencyRef.current) {
        observer.observe(agencyRef.current);
      }
      return () => {
        if (agencyRef.current) {
          observer.unobserve(agencyRef.current);
        }
      };
    }
  });
  useEffect(() => {
    if (!mobileScreen) {
      const handleScroll = () => {
        const beautyRef = document.getElementById("beautyRef");
        const thoughRef = document.getElementById("thoughRef");
        const communicateRef = document.getElementById("communicateRef");
        const executeRef = document.getElementById("executeRef"); // new line
        let newImageSrc = agencyImage1.src;

        if (
          beautyRef.getBoundingClientRect().top < 0 &&
          thoughRef.getBoundingClientRect().top > 0
        ) {
          newImageSrc = agencyImage2.src;
        } else if (
          thoughRef.getBoundingClientRect().top < 0 &&
          communicateRef.getBoundingClientRect().top > 0
        ) {
          newImageSrc = agencyImage3.src;
        } else if (
          communicateRef.getBoundingClientRect().top < 0 &&
          executeRef.getBoundingClientRect().top > 0
        ) {
          newImageSrc = agencyImage4.src;
        } else if (executeRef.getBoundingClientRect().top < 0) {
          // new condition
          newImageSrc = agencyImage4.src; // new image for the fourth section
        }

        if (newImageSrc !== imageSrc) {
          setImageSrc(newImageSrc);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [imageSrc]);

  // useEffect(() => {
  //   if (!mobileScreen) {
  //     const handleScroll = () => {
  //       const beautyRef = document.getElementById("beautyRef");
  //       const thoughRef = document.getElementById("thoughRef");
  //       const communicateRef = document.getElementById("communicateRef");
  //       let newImageSrc = agencyImage1.src;

  //       if (
  //         beautyRef.getBoundingClientRect().top < 0 &&
  //         thoughRef.getBoundingClientRect().top > 0
  //       ) {
  //         newImageSrc = agencyImage2.src;
  //       } else if (thoughRef.getBoundingClientRect().top < 0) {
  //         newImageSrc = agencyImage3.src;
  //       } else if (communicateRef.getBoundingClientRect().top < 0) {
  //         newImageSrc = agencyImage4.src;
  //       }

  //       if (newImageSrc !== imageSrc) {
  //         setImageSrc(newImageSrc);
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }
  // }, [imageSrc]);

  return (
    <div
      ref={agencyRef}
      className="pagePaddingX pt-7 md:pt-20 flex items-start justify-between relative 3xl:max-w-7xl 3xl:mx-auto h-full"
    >
      {!mobileScreen ? (
        <div>
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
            <div className="flex h-[60vh] w-full flex-col justify-center">
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
          {isVisible && (
            <div className="w-1/2 fixed top-[30vh] left-[50vw]">
              <Image
                width={500}
                height={300}
                id="imageRef"
                src={imageSrc}
                alt="agency images"
                loading="lazy"
                objectFit="cover"
                // className="rounded-lg"
              />
            </div>
          )}

          <div></div>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex w-full flex-col justify-center">
            <div className="w-full">
              <Image
                width={500}
                height={300}
                id="imageRef"
                src={imageSrc}
                alt="agency images"
                loading="lazy"
                objectFit="cover"
              />
            </div>
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
              Analyzing the market and consumer data helps us provide customized
              solutions to everyday business challenges.
            </p>
          </div>
          <div className="flex h-[60vh] w-full flex-col justify-center">
            <h2 className="heading mb-5 font-bold blackDescriptionText leading-none relative pl-6">
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
          <div className="flex h-[60vh] w-full flex-col justify-center">
            <h2 className="heading mb-5 font-bold blackDescriptionText leading-none relative pl-6">
              <sup className="smallText text-pink-400 font-medium inline-block absolute top-3 left-0">
                04
              </sup>{" "}
              Execute
            </h2>
            <p className="text-text-medium font-medium font-circular-medium blackDescriptionText pl-5">
              We execute our ideas into actions through strategies to make every
              business a winning story.
            </p>
          </div>
          <div className="w-full" style={{ display: "none" }}>
            <Image
              width={500}
              height={300}
              id="imageRef"
              src={imageSrc}
              alt="agency images"
              loading="lazy"
              objectFit="cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Agency;
