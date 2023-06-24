/* eslint-disable */
import React, { useEffect, useState } from "react";
import kotaLogo from "../../src/assets/images/Blog-pic.png";
import brand1 from "../../src/assets/images/brand-img.png";
import brand2 from "../../src/assets/images/brand-img2.png";
import book from "../../src/assets/images/brand1-brand.png";
import mobile3 from "../../src/assets/images/brand2-brand.png";
import mobile2 from "../../src/assets/images/brand3-brand.png";
import tmg from "../../src/assets/images/TMG-pic.png";
import hand from "../../src/assets/images/hand.png";
import Header from "../../src/components/header/Header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Expertise from "../../src/components/expertise/Expertise";
import axios from "axios";
import Footer from "../../src/components/footer/Footer";
import Image from "../../src/components/Image/Image";
import GradientButton from "../../src/components/button/GradientButton";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
function Seo() {
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
      <PageWrapper>
        <setcion className="w-full">
          <section className="">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 px-20 gap-4 pt-12 items-center">
                <div className="w-full text-center mt-10 xl:mt-10">
                  <Image
                    width={500}
                    height={300}
                    src={brand1.src}
                    alt="kota canvas"
                    loading="lazy"
                    className="w-[466px] h-[303px]"
                  />
                  <Image
                    width={500}
                    height={300}
                    src={brand2.src}
                    alt="kota canvas"
                    loading="lazy"
                    className="w-[466px] h-[303px] mt-10"
                  />
                </div>
                <div className="w-full">
                  <h4 className="mb-6  heading-style">
                    <span className="gradientText">Brand Identity</span> and
                    Creative Management Services
                  </h4>
                  <p className="text-style mb-6">
                    TMG combines strategic directions with creative designs to
                    ensure{" "}
                    <span className="gradientText">unique brand identity.</span>{" "}
                  </p>
                  <GradientButton
                    text="Book Free Consultation Today"
                    route="/contact"
                  />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="bgWhite py-20">
              <div className="relative isolate ">
                <div className="px-32 py-10 sm:py-10 lg:flex lg:items-center gap-10 lg:py-10">
                  <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 w-1/2 lg:flex-grow">
                    <h1
                      className={`mb-6 font-sofia-bold font-black leading-none text-zinc-700 smallHeading md:text-5xl`}
                    >
                      Specialized branding services that
                      <span className="gradientText"> creates trust</span>{" "}
                    </h1>
                  </div>
                  <div className="lg:flex-auto w-1/2">
                    <p className="mt-6 text-style">
                      Every brand must have a distinctive design, coherence and
                      a story that keeps the audience engaged. 
                      <br />
                      <br />
                      From brand positioning, logo design, design collaterals,
                      and packaging, we collaborate closely with your team to
                      ensure your branding embraces the essence of your
                      business.
                      <br />
                      <br />
                      Our branding packages include{" "}
                      <span className="gradientText">
                        {" "}
                        Brand Image Creation, Social Presence and Tone of Voice;
                      </span>
                      each delivering an expert-led service that starts with
                      discovery and ends with the fundamental elements your
                      business needs to become unmissable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="background-gradient py-24 sm:py-32">
              <div className="px-10 md:px-10 lg:px-14 xl:px-20 2xl:px-32">
                <dl className="mt-16 grid grid-cols-1 gap-10 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  <div>
                    <dd className="mt-10 text-white relative text-6xl font-bold top-6">
                      What makes us sooo good at it?
                    </dd>
                  </div>
                  <div>
                    <dt className="font-bold text-white text-5xl">
                      Experience
                    </dt>
                    <dd className="mt-6 text-white text-base ">
                      We’ve worked with brands from a huge range of industries
                      to showcase their differences through strategic design
                      that positions them perfectly. {" "}
                    </dd>

                    <dt className="font-bold text-white text-5xl xl:mt-10">
                      Strategy
                    </dt>
                    <dd className="mt-6 text-white text-base">
                      With our certified team, we ensure to create effective
                      cost saving strategies that help campaigns perform well so
                      you can focus more on counting sales.{" "}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-bold text-white text-5xl ">
                      Creativity
                    </dt>
                    <dd className="mt-6 text-white text-base">
                      Guided by your vision and values, our branding services
                      will bring your business to life with artistic flair and
                      attention to detail, to create a brand that is unique and
                      memorable.{" "}
                    </dd>
                    <dt className="font-bold text-white text-5xl xl:mt-4">
                      Sustainability
                    </dt>
                    <dd className="mt-6 text-white text-base">
                      We ensure that the image that has been forged to the
                      consumer mind stays on top with consistent artistic
                      content to increase engagement and recall value.{" "}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-[#212121]">
              <div className="w-full pt-14">
                <div className="px-10 md:px-10 lg:px-14 xl:px-20 2xl:px-32 py-16 sm:py-24 flex items-center gap-20 lg:py-20">
                  <div className="lg:mx-0 w-1/2 lg:flex-auto">
                    <h1 className="mt-10 smallHeading font-bold tracking-tight text-white sm:text-[35px]">
                      Brand Image
                    </h1>
                    <p className="mt-6 paragraph leading-8 text-white font-normal">
                      Building a brand image is one of the most important
                      aspects of any business. It is what sets your company
                      apart from the competition and helps you build a loyal
                      customer base.
                      <br />
                      <br />
                      Your brand image should be consistent and should stand out
                      across all channels - from your website to your social
                      media accounts and your physical collateral. 
                    </p>
                    <div className="flex items-center gap-x-6 mt-8">
                      <GradientButton text="Learn More" route="/" />
                    </div>
                  </div>
                  <div className="mt-16 sm:mt-24 lg:mt-0 w-1/2">
                    <Image
                      width={500}
                      height={300}
                      src={book.src}
                      alt="book"
                      layout="responsive"
                      objectFit="cover"
                      className="drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="px-10 md:px-10 lg:px-14 xl:px-20 2xl:px-32 py-12 sm:py-14 flex items-center gap-20 lg:py-16">
                  <div className="mt-16 sm:mt-24 lg:mt-0 w-1/2">
                    <Image
                      width={0}
                      height={0}
                      src={mobile3.src}
                      alt="mobile3"
                      layout="responsive"
                      objectFit="cover"
                      className="drop-shadow-xl"
                    />
                  </div>
                  <div className="lg:mx-0 w-1/2 lg:flex-auto">
                    <h1 className="mt-10 heading font-bold tracking-tight text-white sm:text-[35px]">
                      Social Presence
                    </h1>
                    <p className="mt-6 paragraph leading-8 text-white font-normal">
                      The internet has massively impacted the way businesses
                      operate and reach their customer base. To build a strong
                      social presence, businesses need to have an effective
                      brand strategy that helps them dig their feet further into
                      the existing industry and stick around for longer. 
                      <br />
                      <br />
                      We create customized branding solutions  which are
                      designed to help businesses reach their target audience
                      and achieve their desired results.  
                    </p>
                    <div className="flex items-center gap-x-6 mt-8">
                      <GradientButton text="Learn More" route="/" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full pt-14">
                <div className="px-10 md:px-10 lg:px-14 xl:px-20 2xl:px-32 py-12 sm:py-14 flex items-center gap-20 lg:py-16">
                  <div className="lg:mx-0 w-1/2 lg:flex-auto">
                    <h1 className="mt-10 max-w-lg smallHeading font-bold tracking-tight text-white sm:text-[35px]">
                      Tone of Voice{" "}
                    </h1>
                    <p className="mt-6 paragraph leading-8 text-white font-normal">
                      A unique tone of voice helps brands build trust and become
                      memorable in the minds of their audience. We’ll
                      collaborate with your team to devise a tone that resonates
                      with your customers and inspires them to action.
                    </p>
                    <div className="flex items-center gap-x-6 mt-8">
                      <GradientButton text="Learn More" route="/" />
                    </div>
                  </div>
                  <div className="mt-16 sm:mt-24 lg:mt-0 w-1/2">
                    <Image
                      width={500}
                      height={300}
                      src={mobile2.src}
                      alt="mobile 2"
                      layout="responsive"
                      objectFit="cover"
                      className="drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>

              <div className="relative isolate ">
                <div className="px-10 md:px-10 lg:px-14 xl:px-20 2xl:px-32 py-12 sm:py-14 flex items-center gap-20 lg:py-16">
                  <div className="mt-16 sm:mt-24 lg:mt-0 w-1/2">
                    <Image
                      width={500}
                      height={300}
                      src={tmg.src}
                      alt="tmg"
                      layout="responsive"
                      objectFit="cover"
                      className="drop-shadow-xl"
                    />
                  </div>
                  <div className="w-1/2 lg:flex-auto">
                    <h1 className="mt-10 max-w-lg smallHeading font-bold tracking-tight text-white sm:text-[35px]">
                      What else?
                    </h1>
                    <p className="mt-6 paragraph leading-8 text-white font-normal">
                      As your dedicated SEO agency, we go a step further than
                      just make your website perform well. We strategize with
                      reasoning and depend on the market research so we can
                      showcase the results to you, that would help your business
                      get authentic traffic without spending another dime on
                      it. 
                    </p>
                    <div className=" flex items-center gap-x-6 mt-8">
                      <GradientButton text="Learn More" route="/" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <Tabs className="p-20 px-28 tabs-wrapper">
              <TabList>
                {
                  // work.filter(x => x.hasOwnProperty('tabTitle')).map((item, index) => <Tab key={index}>{item.tabTitle}</Tab>)
                  // work.map((item, index) => <Tab key={index}>Hello</Tab>)
                }
              </TabList>
              {work.map((item, index) => (
                <TabPanel key={index}>
                  {" "}
                  <Expertise list={work} cssClass="text-black" />
                </TabPanel>
              ))}
            </Tabs>
          </section>

          <section className="background-gradient pb-16">
            <div className="relative isolate ">
              <div className="max-w-7xl lg:flex lg:items-center lg:gap-x-10">
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                  <Image
                    width={500}
                    height={300}
                    src={hand.src}
                    alt="hand"
                    className="w-[658px] h-[836px] drop-shadow-xl"
                  />
                </div>
                <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                  <h1 className="mt-10 max-w-lg heading font-bold tracking-tight text-white sm:text-[35px]">
                    Dedicated Resource Allocation
                  </h1>
                  <p className="mt-6 paragraph leading-8 text-white font-normal">
                    At TMG, we understand that your brand is much more than just
                    a logo or a name. It is the overall look and feel that a
                    customer experiences - from your website and marketing
                    materials to the way you interact with your customers.
                    That/'s why we offer dedicated resources based on needs that
                    fit your job requirement.
                    <br />
                    <br />
                    From Website Developers, Content Creators and Managers to
                    SEO Experts - we make sure that your daily work requirement
                    is fulfilled remotely.
                  </p>
                  <div className=" flex items-center gap-x-6">
                    {/* <button className="relative w-48  h-14 mt-12 rounded-full overflow-hidden">
                  <div className="">
                    <div className="absolute inset-0  border-2 border-pink-500 border-t-0 border-l-0 rounded-full py-3"></div>
                    <div className="absolute inset-0 border-2  border-orange-500 border-b-0 border-r-0 rounded-full"></div>
                    <p className="absolute inset-0 flex items-center justify-center font-medium text-orange-500 ">
                      Learn <span className="text-pink-500"> More</span>
                    </p>
                  </div>
                </button> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="-mt-28">
            <Footer />
          </div>
        </setcion>
      </PageWrapper>
    </>
  );
}

export default Seo;
