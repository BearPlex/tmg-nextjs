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
        "campaigns that earn attention, spark emotion & increase conversions.",
    },
    digital: {
      img: marketingImage.src,
      detail:
        "eye-catching online marketing campaigns that earn attention, spark emotion & increase conversions.",
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
    <section
      className="px-20 py-28 background-gradient"
      // style={{
      //   backgroundImage: "linear-gradient(91.87deg, #F79B60 0%, #EE245F 100%)",
      // }}
    >
      <span className="block mb-16 uppercase text-white font-bold text-base tracking-wider heading-style-colorless">
        Our Services
      </span>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3
            className={`mb-6 text-[5.5rem] font-bold text-white cursor-pointer transition-opacity leading-none ${
              type === "design" ? "text-[35px]" : "text-3xl"
            }`}
            onClick={() => setType("design")}>
            Web Design & Development
          </h3>
          <h3
            className={`mb-6 text-[5.5rem] text-white font-bold cursor-pointer transition-opacity leading-none ${
              type === "branding" ? "text-[35px]" : "text-3xl"
            }`}
            onClick={() => setType("branding")}>
            Branding
          </h3>
          <h3
            className={`mb-6 text-[5.5rem] text-white font-bold cursor-pointer transition-opacity leading-none ${
              type === "digital" ? "text-[35px]" : "text-3xl"
            }`}
            onClick={() => setType("digital")}>
            Digital Marketing
          </h3>
          {/* <a
            href="/services"
            className="mt-8 border-2 rounded-full w-[200px] h-14 text-white px-6 inline-flex items-center justify-center text-md hover:bg-white hover:text-fuchsia-500 font-medium"
          >
             View All Services
          </a> */}
        </div>
        <div>
          <Image
            width={100}
            height={300}
            src={`${handleGetImages().img}`}
            alt="images"
            loading="lazy"
            className="w-[100%]"
          />
          <p className="text-lg text-white font-normal mt-10 leading-loose">
            {handleGetImages().detail}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Services;
