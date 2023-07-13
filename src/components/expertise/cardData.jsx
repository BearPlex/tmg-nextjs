import React from "react";
import Image from "../Image/Image";
const MainCard = (props) => {
  const {
    imageSrc,
    featured_title,
    gallery_first_description,
    website_tag,
    branding_tag,
    marketing_tag,
    seo_tag,
    index,
  } = props;
  return (
    <div>
      <div className="group">
        <div className="relative work-images">
          <Image
            width={500}
            height={300}
            src={imageSrc}
            alt="work images"
            loading="lazy"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="group-hover:text-pink-400 group-hover:transition-all">
          <span
            key={index}
            className="inline-block mt-3 md:mt-7 text-pink-400 uppercase paragraph font-medium mr-4 tracking-widest"
          >
            {marketing_tag ? "Marketing" : ""}
          </span>
          <span
            key={index}
            className="inline-block mt-3 md:mt-7 text-pink-400 uppercase paragraph font-medium mr-4 tracking-widest"
          >
            {branding_tag ? "Branding" : ""}
          </span>
          <span
            key={index}
            className="inline-block mt-3 md:mt-7 text-pink-400 uppercase paragraph font-medium mr-4 tracking-widest"
          >
            {website_tag ? "Website" : ""}
          </span>
          <span
            key={index}
            className="inline-block mt-3 md:mt-7 text-pink-400 uppercase paragraph font-medium mr-4 tracking-widest"
          >
            {seo_tag ? "SEO" : ""}
          </span>
          <div className="my-2 lg:my-4 md:my-4 headingWhite leading-tight">
            {featured_title}
          </div>
          <p className={`paragraphWhite w-full`}>{gallery_first_description}</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
