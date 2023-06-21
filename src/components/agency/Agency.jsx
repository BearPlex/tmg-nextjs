/* eslint-disable */
import React, { useEffect, useState } from "react";
// import { agency } from '../../helpers/Helpers';
import agencyImage1 from "../../assets/images/homepage-lovebrands.png";
import agencyImage2 from "../../assets/images/homepage-tribepad.png";
import agencyImage3 from "../../assets/images/homepage-sym.png";
import Image from "../Image/Image";
const Agency = () => {
  const [imageSrc, setImageSrc] = useState(agencyImage1.src);
  useEffect(() => {
    const handleScroll = () => {
      const beautyRef = document.getElementById("beautyRef");
      const thoughRef = document.getElementById("thoughRef");
      let newImageSrc = agencyImage1.src;

      if (
        beautyRef.getBoundingClientRect().top < 0 &&
        thoughRef.getBoundingClientRect().top > 0
      ) {
        newImageSrc = agencyImage2.src;
      } else if (thoughRef.getBoundingClientRect().top < 0) {
        newImageSrc = agencyImage3.src;
      }

      if (newImageSrc !== imageSrc) {
        setImageSrc(newImageSrc);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [imageSrc]);

  // const handleScroll = () => {
  //   const image = document.getElementById("imageRef");
  //   const beautyRef = document.getElementById("beautyRef");
  //   const thoughRef = document.getElementById("thoughRef");
  //   if (
  //     beautyRef.getBoundingClientRect().top < 0 &&
  //     thoughRef.getBoundingClientRect().top > 0
  //   ) {
  //     image.src = agencyImage2.src;
  //   } else if (thoughRef.getBoundingClientRect().top < 0) {
  //     image.src = agencyImage3.src;
  //   } else image.src = agencyImage1.src;
  // };

  return (
    <div className="pt-20 flex items-start justify-between">
      <div className="w-1/2">
        <div className="pb-60 max-w-[80%]">
          <h2
            id="beautyRef"
            className="heading-style mb-5 font-bold text-zinc-700 leading-none relative pl-6"
          >
            <sup className="text-sm text-pink-400 font-medium inline-block absolute top-3 left-0">
              01
            </sup>{" "}
            Beauty
          </h2>
          <p className="text-text-medium font-medium font-circular-medium text-zinc-700 pl-5">
            Developing stunning one-of-a-kind digital design that catches
            people’s eye and brings your brand to life online.
          </p>
        </div>
        <div className="pb-60 max-w-[80%]">
          <h2
            id="thoughRef"
            className="heading-style mb-5 font-bold text-zinc-700 leading-none relative pl-6"
          >
            <sup className="text-sm text-pink-400 font-medium inline-block absolute top-3 left-0">
              02
            </sup>{" "}
            Thought
          </h2>
          <p className="text-text-medium font-medium font-circular-medium text-zinc-700 pl-5">
            Developing stunning one-of-a-kind digital design that catches
            people’s eye and brings your brand to life online.
          </p>
        </div>
        <div className="pb-60 max-w-[80%]">
          <h2 className="heading-style mb-5 font-bold text-zinc-700 leading-none relative pl-6">
            <sup className="text-sm text-pink-400 font-medium inline-block absolute top-3 left-0">
              03
            </sup>{" "}
            Impact
          </h2>
          <p className="text-text-medium font-medium font-circular-medium text-zinc-700 pl-5">
            Developing stunning one-of-a-kind digital design that catches
            people’s eye and brings your brand to life online.
          </p>
        </div>
      </div>
      <div className="w-1/2 sticky">
        <Image
          width={500}
          height={300}
          id="imageRef"
          src={imageSrc}
          alt="agency images"
          className="rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};
export default Agency;
