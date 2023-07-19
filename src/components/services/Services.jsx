/* eslint-disable */
import Link from "next/link";
import { useState, useEffect } from "react";
import designDevelopmentImage from "../../assets/images/design-development.png";
import digitalImage from "../../assets/images/digital.png";
import marketingImage from "../../assets/images/marketing.png";
import Image from "../Image/Image";

const Services = () => {
  const [type, setType] = useState("design");
  const [imgSrc, setImgSrc] = useState(designDevelopmentImage.src);
  const [opacity, setOpacity] = useState(1);

  const servicesData = {
    design: {
      img: designDevelopmentImage.src,
      detail:
        "Delivering effective digital strategies & eye-catching online marketing campaigns that earn attention, spark emotion & increase conversions.",
    },
    branding: {
      img: digitalImage.src,
      detail:
        "Campaigns that earn attention, spark emotion & increase conversions.",
    },
    digital: {
      img: marketingImage.src,
      detail:
        "Eye-catching online marketing campaigns that earn attention, spark emotion & increase conversions.",
    },
  };

  const changeImage = (newType) => {
    setOpacity(0); // Start to fade out
    setTimeout(() => {
      setType(newType); // After 500ms, change the type
      setImgSrc(servicesData[newType].img); // set the new image source
      setOpacity(1); // Start to fade in
    }, 500);
  };
  return (
    <section className="background-gradient">
      <div className="w-full  pagePaddingX componentsMainGap py-10 md:py-28 3xl:max-w-7xl 3xl:mx-auto 3xl:px-0 3xl:pl-0">
        <span className="block mb-4 md:mb-10 uppercase smallText whiteHeadingText ">
          Our Services
        </span>
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4">
            <div className="flex flex-col justify-center">
              <h3
                className={`mb-2 md:mb-6    cursor-pointer duration-300 transition-in-out xl2Heading ${
                  type === "design" ? " whiteHeadingText" : "text-[#FFCBC2]"
                }`}
                onClick={() => changeImage("design")}
              >
                Web Design & Development
              </h3>
              <h3
                className={`mb-2 md:mb-6   font-bold cursor-pointer duration-300 transition-in-out xl2Heading ${
                  type === "branding" ? "whiteHeadingText" : "text-[#FFCBC2]"
                }`}
                onClick={() => changeImage("branding")}
              >
                Branding
              </h3>
              <h3
                className={`mb-2 md:mb-6  font-bold cursor-pointer duration-300 transition-in-out xl2Heading ${
                  type === "digital" ? "whiteHeadingText" : "text-[#FFCBC2]"
                }`}
                onClick={() => changeImage("digital")}
              >
                Digital Marketing
              </h3>
            </div>
            <div style={{ transition: "ease-in-out 0.3s", opacity }}>
              <div>
                <Image
                  width={100}
                  height={300}
                  src={imgSrc}
                  alt="images"
                  loading="lazy"
                  className="w-[100%] "
                />
              </div>
              <p className="paragraphWhite mt:4 md:mt-10 leading-loose min-h-[120px]">
                {servicesData[type].detail}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Show and hide on desktop */}
        <div className="block md:hidden lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-6">
            <div className="flex flex-col justify-center">
              <h3 className="mb-2 md:mb-6 cursor-pointer transition-opacity xl2Heading  whiteHeadingText">
                Web Design & Development
              </h3>

              <Image
                width={100}
                height={300}
                src={designDevelopmentImage}
                alt="images"
                loading="lazy"
                className="w-[100%] py-4"
              />

              <p className="paragraphWhite mt:4 md:mt-10 leading-loose">
                Delivering effective digital strategies & eye-catching online
                marketing campaigns that earn attention, spark emotion &
                increase conversions.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="mb-2 md:mb-6 cursor-pointer transition-opacity xl2Heading  whiteHeadingText">
                Branding
              </h3>

              <Image
                width={100}
                height={300}
                src={digitalImage}
                alt="images"
                loading="lazy"
                className="w-[100%] py-4"
              />

              <p className="paragraphWhite mt:4 md:mt-10 leading-loose">
                Campaigns that earn attention, spark emotion & increase
                conversions.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="mb-2 md:mb-6 cursor-pointer transition-opacity xl2Heading  whiteHeadingText">
                Digital Marketing
              </h3>

              <Image
                width={100}
                height={300}
                src={marketingImage}
                alt="images"
                loading="lazy"
                className="w-[100%] py-4"
              />

              <p className="paragraphWhite mt:4 md:mt-10 leading-loose">
                Eye-catching online marketing campaigns that earn attention,
                spark emotion & increase conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
