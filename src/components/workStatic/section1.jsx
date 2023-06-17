import React from "react";
import Image from "../src/components/Image/Image";
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
  console.log("Work", work);
  // console.log("Work Image",work?.gallery1.data)
  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="flex justify-center mt-20">
          <Image
            width={500}
            height={300}
            alt="featured"
            src={work[0].featured_image.src}
          />
        </div>
        <h1 className="text-center text-[50px] font-bold text-orange_theme-500">
          {work[0].featured_title}{" "}
        </h1>
        <div className="flex justify-center">
          <div className="pb-60 max-w-[80%] mt-16">
            <h2
              id="beautyRef"
              className="heading-style mb-5 font-bold text-zinc-700 leading-none relative pl-6"
            >
              <sup className="text-sm text-pink-400 font-medium inline-block absolute top-3 left-0">
                01
              </sup>{" "}
              {work[0].gallery_first_title}
            </h2>
            <p className="text-text-medium font-medium font-circular-medium text-zinc-700 pl-5">
              {work[0].gallery_first_description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default section1;
