import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
import React, { useRef, useState } from "react";
import SEOHeader from "../src/components/MetaData/SEOHeader";
import agencyHero from "../src/assets/images/agency-hero.png";
import mainImage from "../src/assets/images/team.png";
import teamMember from "../src/assets/images/james-h.png";
import Clients from "../src/components/clients/Clients";
import Footer from "../src/components/footer/Footer";
import axios from "axios";
import Image from "../src/components/Image/Image";
import GradientButton from "../src/components/button/GradientButton";
import PageWrapper from "../src/components/PageWrapper/PageWrapper";
import HeroContainer from "../src/components/containers/HeroContainer";
import TextWithVideoContainer from "../src/components/containers/TextWithVideoContainer";
import EmployeeCards from "../src/components/Employees/EmployeeCards";
import Employees from "../src/components/Employees/Employees";

const Studio = ({ metaData }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <SEOHeader metadata={metaData} />
      <PageWrapper>
        <section className="w-full">
          <HeroContainer imageSrc={agencyHero.src}>
            <div className="w-full">
              <h1 className="mb-2 md:mb-6 mt-6 headingBlack">
                Top{" "}
                <span className="gradientText">
                  Rated Digital Marketing Agency
                </span>
              </h1>
              <p className="paragraphBlack">
                We create the best customer experiences across your brands
                journey, transforming the way brands connect with their
                audiences by be
                <span className="gradientText">
                  {" "}
                  crafting engaging and impactful digital experiences that
                  inspire action and drive growth.
                </span>{" "}
              </p>
              <div className="mt-6 md:mt-10">
                <GradientButton
                  text="Book Free Consultation Today"
                  route="/contact"
                />
              </div>
            </div>
          </HeroContainer>
          <section className="mt-10 py-10">
            <TextWithVideoContainer
              cssClass="md:w-[100%]"
              childcssClass="hidden"
            />
          </section>
          <div className="flex mt:4 md:mt-10 justify-center flex-col items-center">
            <h2 className=" extraLargeHeading text-center blackHeadingText">
              Innovators by heart, <br />
              <span className="gradientText">Creators</span> by mind.
            </h2>
            <p className=" mb-8 text-center mt-14 max-w-4xl paragraphBlack ">
              With a team of smart and passionate professionals, our agency
              specializes in all elements of digital marketing, from social
              media management to search engine optimization. We are always on
              the cutting edge of industry trends and innovations, ensuring that
              our clients stay ahead of the competition and get the greatest
              results possible.
            </p>
            <GradientButton text="View Our Services" route="/services" />
          </div>

          <Employees />
          <section className="h-auto bgBlack py-8 md:py-20">
            <div className="flex flex-col md:flex-row items-center pagePaddingX justify-between componentsMainGap pb-10 md:pb-20 max-w-7xl mx-auto">
              <div className="w-full md:w-[50%]">
                <Image
                  width={500}
                  height={200}
                  src={mainImage.src}
                  alt="work images"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="w-full md:w-[50%] flex justify-center">
                <div className="heading whiteHeadingText leading-relaxed text-center my-8">
                  Our team is 360 degree working in every aspect of digital
                  marketing.
                </div>
              </div>
            </div>

            <EmployeeCards />
          </section>
        </section>
        <Clients />
        <Footer />
      </PageWrapper>
    </>
  );
};
export default Studio;
export async function getServerSideProps(context) {
  const DoNotChange = "Agency";
  try {
    const res = await axios.get(
      `https://app.themediagale.com/api/static-pages-metas?filters[DoNotChange][$eq]=${DoNotChange}&populate=*`
    );
    const metaData =
      res.data.data && res.data.data?.length > 0
        ? res.data.data[0]?.attributes?.metaData
        : {};
    console.log(metaData);
    return { props: { metaData: metaData } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { metaData: {} } };
  }
}
