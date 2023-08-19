import React from "react";
import Image from "../Image/Image";
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
  return (
    <>
      <section className="pagePaddingX max-w-7xl mx-auto">
        <div className="flex justify-center mt-9 md:mt-20">
          <Image
            width={500}
            height={300}
            alt="featured"
            src={work[0].featured_image.src}
          />
        </div>
        <h1 className="text-center largeHeading font-bold gradientText">
          {work[0].featured_title}{" "}
        </h1>
        <div className="flex justify-center">
          <div className="pb-20 md:pb-40 lg:pb-60 max-w-[80%] mt-1 md:mt-5 lg:mt-16">
            <h2 className="heading mb-5 font-bold blackDescriptionText leading-none relative pl-6">
              {/* <sup className="smallText text-pink-400   inline-block absolute top-3 left-0">
                01
              </sup>{" "} */}
              {work[0].gallery_first_title}
            </h2>
            <p className="paragraph blackDescriptionText pl-5">
              {work[0].gallery_first_description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default section1;
