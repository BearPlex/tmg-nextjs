import React from "react";
import approch from "../../assets/images/approch1.png";
import Image from "../Image/Image";
import { convertStringForImage } from "../../helpers/Helpers";
function section3Image(props) {
  const { work } = props;
  console.log(work?.gallery_second_title);
  console.log("work?.gallery_second_title");
  return (
    <>
      <div className="pagePaddingX max-w-7xl mx-auto w-full flex flex-col">
        <div className="flex justify-center">
          <div className="flex justify-center">
            <Image
              width={500}
              height={300}
              alt="attributes"
              loading="lazy"
              layout="responsive"
              objectFit="cover"
              src={`https://beta.themediagale.com/public_images/${
                work?.gallery_second_title && work?.gallery_second_title !== ""
                  ? convertStringForImage(work?.gallery_second_title)
                  : "Women-Rise"
              }.png`}
              className="pb-10"
            />
          </div>
        </div>
        <div className="pb-20 md:pb-40 lg:pb-60 mt-1 md:mt-5 lg:mt-16">
          <h2 className="heading mb-5 font-bold blackDescriptionText leading-none relative pl-6">
            {work?.gallery_second_title}
          </h2>
          <p className="paragraph blackDescriptionText pl-5 whitespace-pre">
            {work?.gallery_second_description}
          </p>
        </div>
      </div>
    </>
  );
}

export default section3Image;
