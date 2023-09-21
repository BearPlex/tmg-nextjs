import React from "react";
import Image from "../Image/Image";
const WorkCard = (props) => {
  const {
    imageSrc,
    featured_title,
    gallery_first_description,
    website_tag,
    branding_tag,
    marketing_tag,
    cardText,
    seo_tag,
    index,
    backGroundBlack,
    alt,
  } = props;
  return (
    <div className="mt-10  white group hover:bg-[#EE245F] bg-opacity-0 hover:bg-opacity-50 relative bg-transparent duration-300 overflow-hidden">
      <div className="group">
        <div className="relative group work-images overflow-hidden">
          {imageSrc && imageSrc !== "" && (
            <Image
              width={500}
              height={300}
              className="object-cover object-center  group-hover:opacity-50 duration-300 transition-in-out overflow-hidden scale-100 group-hover:scale-110"
              src={imageSrc}
              alt={alt}
              loading="lazy"
              decoding="async"
              layout="responsive"
              objectFit="cover"
            />
          )}
        </div>

        <div className="relative group group-hover:ml-2 duration-300 transition-in-out pb-1">
          <span
            key={index + 900}
            className={`inline-block mt-3 md:mt-7 text-pink-400  uppercase smallText mr-4 tracking-widest  ${
              backGroundBlack
                ? " group-hover:whiteDescriptionText "
                : "group-hover:blackDescriptionText "
            } `}
          >
            {marketing_tag ? "Marketing" : ""}
          </span>
          <span
            key={index + 1000}
            className={`inline-block mt-3 md:mt-7 text-pink-400  uppercase smallText mr-4 tracking-widest  ${
              backGroundBlack
                ? " group-hover:whiteDescriptionText "
                : "group-hover:blackDescriptionText "
            } `}
          >
            {branding_tag ? "Branding" : ""}
          </span>
          <span
            key={index + 1100}
            className={`inline-block mt-3 md:mt-7 text-pink-400  uppercase smallText mr-4 tracking-widest  ${
              backGroundBlack
                ? " group-hover:whiteDescriptionText "
                : "group-hover:blackDescriptionText "
            } `}
          >
            {website_tag ? "Website" : ""}
          </span>
          <span
            key={index + 1200}
            className={`inline-block mt-3 md:mt-7 text-pink-400 uppercase smallText mr-4 tracking-widest ${
              backGroundBlack
                ? " group-hover:whiteDescriptionText "
                : " group-hover:blackDescriptionText "
            }`}
          >
            {seo_tag ? "SEO" : ""}
          </span>
          <div
            className={`my-2 lg:my-4 md:my-4 smallHeading font-bold ${
              backGroundBlack ? " whiteHeadingText " : " blackHeadingText "
            }`}
          >
            {featured_title}
          </div>
          <p
            className={`w-full ${
              backGroundBlack ? " paragraphWhite " : " paragraphBlack "
            }`}
          >
            {cardText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
