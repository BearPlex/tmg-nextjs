/* eslint-disable */
import Image from "../Image/Image";
import React from "react";

function section1(props) {
  const {
    featureImage,
    title1st,
    title2nd,
    workHeading,
    workDescription1st,
    workDescription2nd,
    work,
  } = props;
  function convertString(str) {
    return str.replace(/ /g, "-");
  }
  // console.log("Work",work)
  // console.log("Work Image",work?.gallery1.data)
  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="flex justify-center mt-9 md:mt-20">
          <Image
            width={500}
            height={300}
            alt="attributes"
            src={`https://beta.themediagale.com/public_images/${
              work?.featured_title && work?.featured_title !== ""
                ? convertString(work?.featured_title)
                : "Women-Rise"
            }.png`}
            // src={`https://tmg-strapi-w6pu3.ondigitalocean.app${work?.featured_image.data.attributes.url}`}
          />
          {/* <Image decoding="async" width={500} height={300} width={500} height={500} src={`https://tmg-strapi-w6pu3.ondigitalocean.app${work?.featured_image.data.attributes.url}`}/> */}
        </div>
        <h1 className="text-center text-[50px] font-bold gradientText">
          {work?.featured_title}{" "}
        </h1>
        <div className="flex justify-center">
          <div className="pb-60 max-w-[80%] mt-1 md:mt-5 lg:mt-16">
            <h2
              id="beautyRef"
              className="heading mb-5 font-bold blackDescriptionText leading-none relative pl-6"
            >
              <sup className="smallText text-pink-400 font-medium inline-block absolute top-3 left-0">
                01
              </sup>{" "}
              {work?.gallery_first_title}
            </h2>
            <p className="text-text-medium font-medium font-circular-medium blackDescriptionText pl-5">
              {work?.gallery_first_description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default section1;
