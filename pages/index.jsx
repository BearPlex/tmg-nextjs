/* eslint-disable */
import Header from "../src/components/header/Header";
import danLogo from "../src/assets/images/dan_grey@2x.png";
import drumLogo from "../src/assets/images/the-drum-logo.png";
import kotaLogo from "../src/assets/images/tmg-logo.png";
import clutchLogo from "../src/assets/images/Clutch_grey@2x.png";
import awardLogo from "../src/assets/images/awward_grey@2x.png";
import cssDesignLogo from "../src/assets/images/css-design-awards.png";
import Services from "../src/components/services/Services";
import Clients from "../src/components/clients/Clients";
import Articles from "../src/components/articles/Articles";
import Footer from "../src/components/footer/Footer";
import Expertise from "../src/components/expertise/Expertise";
import Agency from "../src/components/agency/Agency";
import { work } from "../src/helpers/Helpers";
import mainImage from "../src/assets/svg/home_work_logo.svg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import hero from "../src/assets/images/hero-1.png";
import workFeaturedImage from "../src/assets/images/work-featured-1.png";
import workGallery1 from "../src/assets/images/work-gall-1.png";
import workGallery2 from "../src/assets/images/work-gall-2.png";
import ExpertiseStatic from "../src/components/expertise/ExpertiseStatic";
import PageWrapper from "../src/components/PageWrapper/PageWrapper";
import Image from "../src/components/Image/Image";
import HeroContainer from "../src/components/containers/HeroContainer";
// import "swiper/css/bundle";
// import "./styles.css";
const workStatic = [
  {
    featured_image: workFeaturedImage,
    featured_title: "KINIMO COSMETICS",
    gallery_first_title: "The Brief",
    gallery_first_description:
      "Meet Kinimo Cosmetics: A Pakistani beauty brand founded in 2019, that focuses on the new age definition of beauty, offering high-quality natural products that inspire confidence and passion in everyone.They reached out to us for content creation, and website development along with SEO and since then our connection has been fruitful.",
    gallery1: workGallery1,
    gallery_second_title: "",
    gallery_second_description: "",
    gallery2: workGallery2,
  },
];
export default function Home() {
  const [work, setWork] = useState([]);
  console.log("Work", work);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/work-kinimos?populate=*")
      .then((res) => {
        // console.log("Res", res.data.data);
        setWork(res.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return (
    <React.Fragment>
      <PageWrapper>
        <div>
          <HeroContainer imageSrc={kotaLogo} landingPage={true}>
            <div className="w-full">
              <h1 className="headingBlack">
                Transforming Businesses into
                <span className="gradientText heading"> Brands</span>{" "}
              </h1>
              <p className="paragraphBlack">
                We offer 360-degree marketing solutions such as PPC
                Advertisement, Search Engine Optimization and Web Development
                Services. Our team is technically and professionally equipped to
                make every{" "}
                <span className="gradientText paragraph">
                  brand a success story.
                </span>
              </p>
            </div>
          </HeroContainer>

          <section className="w-full bgWhite overflow-x-hidden">
            <div className="px-24 flex flex-row gap-10 pl-10 md:pl-10 lg:pl-14 xl:pl-20 2xl:pl-32 pt-10 sm:pb-32 lg:py-40 3xl:max-w-7xl 3xl:mx-auto 3xl:px-0 3xl:pl-0">
              <div className="w-1/2 h-[500px] flex flex-col justify-center">
                <h1 className="headingBlack">
                  Providing Exponential
                  <span className="gradientText heading"> User Experience</span>
                </h1>
                <p className="mt-6 paragraphBlack">
                  Let’s face it, first impressions matter. Why waste and settle
                  for something less?
                  <br />
                  <br />
                  With user-centric designs, result oriented designing tools,
                  and in-house built features, we help increase sales and add
                  value to your Business and e-Commerce ventures.
                </p>
              </div>
              <div className="w-1/2 relative ">
                <div className="absolute inset-[-100px] left-0 flex items-center justify-center">
                  <Image
                    width={1000}
                    height={400}
                    src={hero.src}
                    alt="App screenshot"
                    className="w-full h-full ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="p-20 pt-16 ">
            <div className="w-full flex items-center justify-center pb-16">
              <h2 className="w-4/5 text-center headingBlack">
                Our team bootstraps the growth of your business using these{" "}
                <span className="gradientText">4 Elements</span>
              </h2>
            </div>
            {/* <Agency /> */}
          </div>
          <Services />

          <section className="bgBlack h-auto  ">
            <div className="px-10 md:px-10 lg:px-14 xl:px-20 2xl:px-32 pb-28 pt-36 3xl:max-w-7xl 3xl:mx-auto 3xl:px-0 3xl:pl-0">
              <div className="flex items-center gap-10 justify-between">
                <div className="w-[50%]">
                  <div className="w-4/6 mr-auto">
                    <Image
                      width={0}
                      height={0}
                      src={mainImage.src}
                      layout="responsive"
                      objectFit="cover"
                      alt="work images"
                    />
                  </div>
                </div>
                <div className="w-[50%] flex items-center">
                  <div className="w-5/6">
                    <p className="largeHeadingWhite">
                      Collaborating with trending brands
                    </p>
                  </div>
                </div>
              </div>

              {work && work.length ? (
                <ExpertiseStatic list={workStatic} cssClass="text-white" />
              ) : (
                <Expertise list={work} cssClass="text-white" />
              )}
            </div>
          </section>

          <Clients />
          <Articles />
          <Footer />
        </div>
      </PageWrapper>
    </React.Fragment>
  );
}
