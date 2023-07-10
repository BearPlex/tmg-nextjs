import React from "react";
import approch from "../../assets/images/approch1.png";
import Image from "../Image/Image";
function section3Image(props) {
  const { work } = props;
  // console.log("Approch Data", work);
  return (
    <>
      <div className="flex  flex-col items-center justify-center">
        <div className="pb-60 max-w-[80%] mt-1 md:mt-5 lg:mt-16">
          <h2
            id="beautyRef"
            className="heading mb-5 font-bold blackDescriptionText leading-none relative pl-6"
          >
            <sup className="smallText text-pink-400 font-medium inline-block absolute top-3 left-0">
              02
            </sup>
            {work?.gallery_second_title}
          </h2>
          <p className="text-text-medium font-medium font-circular-medium blackDescriptionText pl-5">
            {work?.gallery_second_description}
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center">
          {work?.gallery2.data.map((data) => {
            return (
              <Image
                width={500}
                height={300}
                alt="attributes"
                key={data?.attributes.id}
                src={`https://tmg-strapi-w6pu3.ondigitalocean.app${data?.attributes.url}`}
                className="pb-12"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default section3Image;
