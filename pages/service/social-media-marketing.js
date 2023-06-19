/* eslint-disable */
import React, { useEffect, useState } from "react";
import kotaLogo from "../../src/assets/images/Blog-pic.png";
import serviceBottle from "../../src/assets/images/service-bottle.png";
import body from "../../src/assets/images/body-img.png";
import book from "../../src/assets/images/social2-img.png";
import mobile3 from "../../src/assets/images/social1-img.png";
import mobile2 from "../../src/assets/images/mobile1.png";
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
function Socialmediamarketing() {
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
      <div className="pt-20">
        <Header />
      </div>
      <section>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 px-20 gap-4 pt-12 items-center">
            <div className="w-full text-center mt-10 xl:mt-10">
              <Image
                width={500}
                height={300}
                src={body.src}
                alt="kota canvas"
                loading="lazy"
                className="w-[466px] h-[303px] "
              />
              <Image
                width={500}
                height={300}
                src={serviceBottle.src}
                alt="kota canvas"
                loading="lazy"
                className="w-[466px] h-[303px] mt-10"
              />
            </div>
            <div className="w-full">
              <h4 className="mb-6 text-3xl md:ext-7xl font-bold leading-tight">
                Performance Driven Digital Marketing Services
              </h4>
              <p className="text-2xl">
                With proven game changing results, our award winning performance
                experts ensure that all the leads turn into a
                <span className="gradient-text">profitable conversion.</span>{" "}
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
        <div className="bg-white">
          <div className="relative isolate ">
            <div className="mx-auto max-w-7xl px-6 py-10 sm:py-10 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-10">
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <h1
                  className={`mb-6 font-sofia-bold font-black leading-none text-zinc-700 text-3xl md:text-6xl max-w-xl`}
                >
                  High Performance
                  <span className="gradient-text">
                    {" "}
                    breakthrough{" "}
                    <span className="gradient-text">campaigns</span>
                  </span>{" "}
                </h1>
              </div>
              <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Getting noticed and remembered by the right audience is a slow
                  delicate process. It takes multiple testing, creative input
                  and high performing campaign structures to ensure better
                  conversions.
                  <br />
                  <br />
                  We specialize in performance marketing campaigns using content
                  and audience building strategies that support our campaigns to
                  perform well. With our in-house team of experienced and
                  certified marketers, we ensure that your advertisement is well
                  remembered.
                  <br />
                  <br />
                  As a direct partnership or white labeled solutions, The
                  MediaGale ensures to enhance visibility, drive deeper
                  engagement and generate better quality conversions from social
                  and search engine platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="background-gradient py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div>
                <dd className="mt-10 text-white relative text-6xl top-6 max-w-xs">
                  What makes us sooo good at it?
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-white text-5xl">
                  Experience
                </dt>
                <dd className="mt-6 text-white text-base ">
                  We’ve worked with brands from a huge range of industries to
                  showcase their differences through strategic design that
                  positions them perfectly. 
                </dd>

                <dt className="font-semibold text-white text-5xl xl:mt-10">
                  Strategy
                </dt>
                <dd className="mt-6 text-white text-base">
                  With our certified team, we ensure to create effective cost
                  saving strategies that help campaigns perform well so you can
                  focus more on counting sales.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-white text-5xl ">
                  Creativity
                </dt>
                <dd className="mt-6 text-white text-base">
                  Guided by your vision and values, our branding services will
                  bring your business to life with artistic flair and attention
                  to detail, to create a brand that is unique and memorable.
                </dd>
                <dt className="font-semibold text-white text-5xl xl:mt-4">
                  Sustainability
                </dt>
                <dd className="mt-6 text-white text-base">
                  We ensure that the image that has been forged to the consumer
                  mind stays on top with consistent artistic content to increase
                  engagement and recall value.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#212121]">
          <div className="relative isolate pt-14">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-20">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <h1 className="mt-10 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-[35px]">
                  Brand Name
                </h1>
                <p className="mt-6 text-xl leading-8 text-white font-normal">
                  Building a brand image is one of the most important aspects of
                  any business. It is what sets your company apart from the
                  competition and helps you build a loyal customer base.
                  <br />
                  <br />
                  Your brand image should be consistent and should stand out
                  across all channels - from your website to your social media
                  accounts and your physical collateral. 
                </p>
                <div className=" flex items-center gap-x-6">
                  <GradientButton text="Learn More" route="/" />
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <Image
                  width={500}
                  height={300}
                  src={book.src}
                  alt="book"
                  className="w-[528px] h-[724px] drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="relative isolate ">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-16">
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <Image
                  width={500}
                  height={300}
                  src={mobile3.src}
                  alt="mobile"
                  className="w-[528px] h-[390px] drop-shadow-xl"
                />
              </div>
              <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <h1 className="mt-10 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-[35px]">
                  Brand Name
                </h1>
                <p className="mt-6 text-xl leading-8 text-white font-normal">
                  Building a brand image is one of the most important aspects of
                  any business. It is what sets your company apart from the
                  competition and helps you build a loyal customer base.
                  <br />
                  <br />
                  Your brand image should be consistent and should stand out
                  across all channels - from your website to your social media
                  accounts and your physical collateral. 
                </p>
                <div className=" flex items-center gap-x-6">
                  <GradientButton text="Learn More" route="/" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative isolate pt-14">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-20">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <h1 className="mt-10 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-[35px]">
                  Brand Name
                </h1>
                <p className="mt-6 text-xl leading-8 text-white font-normal">
                  Building a brand image is one of the most important aspects of
                  any business. It is what sets your company apart from the
                  competition and helps you build a loyal customer base.
                  <br />
                  <br />
                  Your brand image should be consistent and should stand out
                  across all channels - from your website to your social media
                  accounts and your physical collateral. 
                </p>
                <div className=" flex items-center gap-x-6">
                  <GradientButton text="Learn More" route="/" />
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <Image
                  width={500}
                  height={300}
                  src={mobile2.src}
                  alt="mobile2"
                  className="w-[528px] h-[702px] drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="relative isolate ">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-16">
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <Image
                  width={500}
                  height={300}
                  src={tmg.src}
                  alt="tmg"
                  className="w-[528px] h-[359px] drop-shadow-xl"
                />
              </div>
              <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <h1 className="mt-10 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-[35px]">
                  Brand Name
                </h1>
                <p className="mt-6 text-xl leading-8 text-white font-normal">
                  Building a brand image is one of the most important aspects of
                  any business. It is what sets your company apart from the
                  competition and helps you build a loyal customer base.
                  <br />
                  <br />
                  Your brand image should be consistent and should stand out
                  across all channels - from your website to your social media
                  accounts and your physical collateral. 
                </p>
                <div className=" flex items-center gap-x-6">
                  <GradientButton text="Learn More" route="/" />
                  {/* <button className="relative w-48  h-14 mt-12 rounded-full overflow-hidden">
                    <div className="">
                      <div className="absolute inset-0  border-2 border-pink-500 border-t-0 border-l-0 rounded-full py-3"></div>
                      <div className="absolute inset-0 border-2  border-orange-500 border-b-0 border-r-0 rounded-full"></div>
                      <p className="absolute inset-0 flex items-center justify-center font-medium text-orange-500 ">
                        Learn{" "}
                        <span className="text-pink-500 relative ml-[5px]">
                          {" "}
                          More
                        </span>
                      </p>
                    </div>
                  </button> */}
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

      <section className="background-gradient">
        <div className="relative isolate ">
          <div className="max-w-7xl   lg:flex lg:items-center lg:gap-x-10">
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
              <h1 className="mt-10 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-[35px]">
                Dedicated Resource Allocation
              </h1>
              <p className="mt-6 text-xl leading-8 text-white font-normal">
                At TMG, we understand that your brand is much more than just a
                logo or a name. It is the overall look and feel that a customer
                experiences - from your website and marketing materials to the
                way you interact with your customers. That's why we offer
                dedicated resources based on needs that fit your job
                requirement.
                <br />
                <br />
                From Website Developers, Content Creators and Managers to SEO
                Experts - we make sure that your daily work requirement is
                fulfilled remotely.
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
      <div className="mt-0">
        <Footer />
      </div>
    </>
  );
}

export default Socialmediamarketing;
