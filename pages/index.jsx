/* eslint-disable */
import Header from "../src/components/header/Header";
import kotaLogo from "../src/assets/images/tmg-logo.png";
import danLogo from "../src/assets/images/dan_grey@2x.png";
import drumLogo from "../src/assets/images/the-drum-logo.png";
import clutchLogo from "../src/assets/images/Clutch_grey@2x.png";
import awardLogo from "../src/assets/images/awward_grey@2x.png";
import cssDesignLogo from "../src/assets/images/css-design-awards.png";
import HeadingOne from "../src/components/headings/HeadingOne";
import HeadingTwo from "../src/components/headings/HeadingTwo";
import Services from "../src/components/services/Services";
import Clients from "../src/components/clients/Clients";
import Articles from "../src/components/articles/Articles";
import Footer from "../src/components/footer/Footer";
import Expertise from "../src/components/expertise/Expertise";
import Agency from "../src/components/agency/Agency";
import { work } from "../src/helpers/Helpers";
import mainImage from "../src/assets/svg/home_work_logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import hero from "../src/assets/images/hero-1.png";
import workFeaturedImage from "../src/assets/images/work-featured-1.png";
import workGallery1 from "../src/assets/images/work-gall-1.png";
import workGallery2 from "../src/assets/images/work-gall-2.png";
import ExpertiseStatic from "../src/components/expertise/ExpertiseStatic";
import Image from "../src/components/Image/Image";
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
  // {console.log("Work",blogsData)}
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
    <>
      <div className="pt-20 mb-16">
        <Header />
      </div>
      <section className="px-20 pt-16">
        <div className="w-full flex justify-between items-center">
          <div className="w-[50%] text-center">
            {/* <Image decoding="async" width={500} height={300} src={kotaLogo.src} alt="kota canvas" loading="lazy" className="max-w-full" /> */}
            <Image
              width={500}
              height={150}
              src={kotaLogo}
              alt="kota canvas"
              loading="lazy"
              className="max-w-full"
            />
          </div>
          <div className="w-[40%]">
            {/* <HeadingOne title="Transforming Businesses into Brands" cssClass="mb-6" /> */}
            <h1
              className={`mb-6 font-sofia-bold font-black leading-none text-zinc-700 heading-style`}
            >
              Transforming Businesses into
              <span className="gradient-text"> Brands</span>{" "}
            </h1>
            <p className="text-zinc-700 font-circular-medium font-medium text-style">
              We offer 360-degree marketing solutions such as PPC Advertisement,
              Search Engine Optimization and Web Development Services. Our team
              is technically and professionally equipped to make every{" "}
              <span className="gradient-text">brand a success story.</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Image
            width={500}
            height={300}
            src={danLogo.src}
            alt="dan logo"
            loading="lazy"
            className="w-[100px] object-contain"
          />
          <Image
            width={500}
            height={300}
            src={drumLogo.src}
            alt="the drum logo"
            loading="lazy"
            className="w-[100px] object-contain"
          />
          <Image
            width={500}
            height={300}
            src={clutchLogo.src}
            alt="clutch logo"
            loading="lazy"
            className="w-[100px] object-contain"
          />
          <Image
            width={500}
            height={300}
            src={awardLogo.src}
            alt="award logo"
            loading="lazy"
            className="w-[100px] object-contain"
          />
          <Image
            width={500}
            height={300}
            src={cssDesignLogo.src}
            alt="award logo"
            loading="lazy"
            className="w-[100px] object-contain"
          />
        </div>
      </section>

      {/* making brands better section*/}
      {/* <section className="flex justify-between items-center pt-20 pr-20 gap-4">
                <div className="video-wrapper w-[50%]">
                    <Image decoding="async" width={500} height={300} src={kotaLogo.src} alt="video here" />
                </div>
                <div className="w-[40%]">
                    <HeadingTwo title="Making brands a damn site better" cssClass="mb-6 text-zinc-700" />
                    <p className="paragraph">Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why waste it with bad design? Because brands win new fans when they’re brave enough to go beyond their creative comfort zone.</p>
                </div>
            </section> */}

      {/* new hero section */}
      <section>
        <div className="relative isolate overflow-hidden bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <h1 className="mt-10 font-sofia-bold font-bold heading-style leading-none text-zinc-700">
                Providing Exponential
                <span className="gradient-text"> User Experience</span>
              </h1>
              <p className="mt-6 text-zinc-700 font-circular-medium font-medium text-style">
                Let’s face it, first impressions matter. Why waste and settle
                for something less?
                <br />
                <br />
                With user-centric designs, result oriented designing tools, and
                in-house built features, we help increase sales and add value to
                your Business and e-Commerce ventures.
              </p>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    width={500}
                    height={300}
                    src={hero.src}
                    alt="App screenshot"
                    className="w-[40rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* creative digital agency section*/}

      <div className="p-20 pt-4 ">
        <div className="w-full flex items-center justify-center pb-16">
          <h2 className="w-4/5 text-center font-bold font-sofia-bold heading-style leading-tight">
            Our team bootstraps the growth of your business using these{" "}
            <span className="gradient-text">4 Elements</span>
          </h2>
        </div>
        {/* <Agency /> */}
      </div>

      <section className="bg-zinc-800 px-20 py-28 mt-16">
        <div className="flex items-center justify-between">
          <div className="w-[47%]">
            <Image
              width={500}
              height={300}
              src={mainImage.src}
              className="w-96 mx-auto"
              alt="work images"
            />
          </div>
          <div className="w-[47%] pt-64">
            <HeadingTwo
              cssClass="text-white text-style-colorless"
              title="Shit-hot work for hot-shot brands"
            />
          </div>
        </div>

        {work == "" ? (
          <ExpertiseStatic list={workStatic} cssClass="text-white" />
        ) : (
          <Expertise list={work} cssClass="text-white" />
        )}
      </section>
      <Services />
      <Clients />
      <Articles />
      <Footer />
    </>
  );
}
