import Image from "../Image/Image";
import React from "react";
import { convertStringForImage } from "../../helpers/Helpers";
function section1(props) {
  const { work } = props;
  return (
    <>
      <section className="pagePaddingX max-w-7xl mx-auto">
        <div className="flex justify-center mt-9 md:mt-20">
          {work?.image1 && work?.featured_title !== "" && (
            <Image
              width={500}
              height={300}
              alt="attributes"
              layout="responsive"
              objectFit="cover"
              src={`https://beta.themediagale.com/public_images/work/${convertStringForImage(
                work?.featured_title
              )}.png`}
            />
          )}
        </div>
        <h2 className="mt-3 md:mt-10 text-center largeHeading font-bold gradientText">
          {work?.featured_title}{" "}
        </h2>
        <div className="flex w-full">
          <div className="pb-10 md:pb-20 lg:pb-30 mt-1 md:mt-5 lg:mt-16 w-full">
            <h2 className="heading mb-5 font-bold blackDescriptionText leading-none pl-6">
              {work?.gallery_first_title}
            </h2>
            <p className="paragraph whitespace-pre blackDescriptionText pl-5 w-full">
              {work?.gallery_first_description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default section1;
