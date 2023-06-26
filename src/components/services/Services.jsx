/* eslint-disable */
import Link from "next/link";
import { useState } from "react";
import designDevelopmentImage from "../../assets/images/design-development.png";
import digitalImage from "../../assets/images/digital.png";
import marketingImage from "../../assets/images/marketing.png";
import Image from "../Image/Image";
const Services = () => {
  const [type, setType] = useState("design");
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
  const handleGetImages = () => {
    switch (type) {
      case "design":
        return servicesData.design;

      case "branding":
        return servicesData.branding;
      case "digital":
        return servicesData.digital;
      default:
        return servicesData.design;
    }
  };

  return (
    <section className="background-gradient">
      <div className="w-full pagePaddingX componentsMainGap py-10 md:py-28 3xl:max-w-7xl 3xl:mx-auto 3xl:px-0 3xl:pl-0">
        <span className="block mb-4 md:mb-10 uppercase smallText whiteHeadingText ">
          Our Services
        </span>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <h3
              className={`mb-2 md:mb-6    cursor-pointer transition-opacity xl2Heading ${
                type === "design" ? " whiteHeadingText" : "blackDescriptionText"
              }`}
              onClick={() => setType("design")}
            >
              Web Design & Development
            </h3>
            <h3
              className={`mb-2 md:mb-6   font-bold cursor-pointer transition-opacity xl2Heading ${
                type === "branding"
                  ? "whiteHeadingText"
                  : "blackDescriptionText"
              }`}
              onClick={() => setType("branding")}
            >
              Branding
            </h3>
            <h3
              className={`mb-2 md:mb-6  font-bold cursor-pointer transition-opacity xl2Heading ${
                type === "digital" ? "whiteHeadingText" : "blackDescriptionText"
              }`}
              onClick={() => setType("digital")}
            >
              Digital Marketing
            </h3>
            {/* <a
            href="/services"
            className="mt-8 border-2 rounded-full w-[200px] h-14 text-white px-6 inline-flex items-center justify-center text-md hover:bgWhite hover:text-fuchsia-500 font-medium"
          >
             View All Services
          </a> */}
          </div>
          <div>
            <div>
              <Image
                width={100}
                height={300}
                src={`${handleGetImages().img}`}
                alt="images"
                loading="lazy"
                className="w-[100%]"
              />
            </div>
            <p className="paragraphWhite mt:4 md:mt-10 leading-loose min-h-[120px]">
              {handleGetImages().detail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
