/* eslint-disable */
import React, { useEffect, useState } from "react";
import kotaLogo from "../../src/assets/images/Blog-pic.png";
import brand1 from "../../src/assets/images/brand1.png";
import brand2 from "../../src/assets/images/brand2.png";
import book from "../../src/assets/images/on-seo.png";
import mobile3 from "../../src/assets/images/off-seo.png";
import mobile2 from "../../src/assets/images/content-opt.png";
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
import TextWithImageContainer from "../../src/components/containers/TextWithImageContainer";
function BrandManagement() {
  const [work, setWork] = useState([]);
  // {console.log("Work",blogsData)}
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/work-kinimos?populate=*")
      .then((res) => {
        console.log("Res", res.data.data);
        setWork(res.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return (
    <>
      <PageWrapper>
        <section className="w-full">
          <section>
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
                  <h4 className="mb-6 smallHeading md:ext-7xl font-bold leading-tight">
                    Performance Driven <span className="gradientText">SEO</span>{" "}
                    Services
                  </h4>
                  <p className="largeParagraph">
                    A highly optimized website is essential for a business to
                    generate new leads and sales on the internet. However, to
                    achieve this requires a website to have a content strategy,
                    technically proficient and conform to the latest search
                    engine optimization{" "}
                    <span className="gradientText"> recommendations</span> and{" "}
                    <span className="gradientText"> best-practices.</span>{" "}
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
            <div className="bgWhite">
              <div className="relative isolate ">
                <div className="mx-auto max-w-7xl px-6 py-10 sm:py-10 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-10">
                  <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                    <h1 className={`mb-6 leading-none largeHeading  max-w-xl`}>
                      Content strategy that
                      <span className="gradientText">
                        {" "}
                        increases visibility
                      </span>{" "}
                    </h1>
                  </div>
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                    <p className="mt-6 paragraphBlack leading-8 ">
                      We provide On Page and Off Page solutions that help
                      increase your website search rank so you do not need to
                      pay a dime for traffic.
                      <br />
                      <br />
                      Our SEO packages include content marketing, local seo,
                      technical audits, social media presence, link building,
                      guest posting and on site optimization which is expert-led
                      service that enhances both credibility on Google and
                      domain authority.
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
                      Expert Analysis
                    </dt>
                    <dd className="mt-6 text-white text-base ">
                      We make sure to analyze the market competition
                      landscape.This helps us form accurate predictions about
                      how we are going to rank your business on Google rankings.
                    </dd>

                    <dt className="font-semibold text-white text-5xl xl:mt-10">
                      Smart Audit
                    </dt>
                    <dd className="mt-6 text-white text-base">
                      We make sure to diagnose your website so we know what we
                      are operating. This helps us drive a result oriented
                      strategy that eliminates loose ends on your website and
                      performs better.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-white text-5xl ">
                      Keyword Search
                    </dt>
                    <dd className="mt-6 text-white text-base">
                      We do a comprehensive keyword search relevant to your
                      business and shortlist top traffic driving search terms
                      with less competition. This helps us to map and optimize
                      the website.
                    </dd>
                    <dt className="font-semibold text-white text-5xl xl:mt-4">
                      Growth
                    </dt>
                    <dd className="mt-6 text-white text-base">
                      We aim to strive for growth oriented results. With our
                      expert-led optimisation, we ensure that your website ranks
                      on the highest search result with the right targeting.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <section>
            <div className="bgBlack w-full">
              <TextWithImageContainer
                imageSrc={book.src}
                imageAlt="book"
                blackContainer={true}
                imageRight={true}
              >
                <div>
                  <h1 className="mt-10 smallHeading font-bold tracking-tight text-white sm:text-[35px]">
                    On Page SEO 
                  </h1>
                  <p className="mt-6 paragraph leading-8 text-white font-normal">
                    While search engine rankings are driven from link building
                    campaigns, ongoing on-page optimization of your website
                    hosting, code, content is foundational when it comes to user
                    experience. That is why we ensure to optimize your pages
                    which include Meta Title and Descriptions, Title Tags and
                    Creating GMB Profile.
                  </p>
                  <div className=" flex items-center gap-x-6 pt-10">
                    <GradientButton text="Learn More" route="/" />
                  </div>
                </div>
              </TextWithImageContainer>
              <TextWithImageContainer
                imageSrc={mobile3.src}
                imageAlt="mobile3"
                blackContainer={true}
                imageRight={false}
              >
                <div>
                  <h1 className="mt-10 smallHeading font-bold tracking-tight text-white sm:text-[35px]">
                    Off Page SEO
                  </h1>
                  <p className="mt-6 paragraph leading-8 text-white font-normal">
                    Link Building and Content Marketing is essential to scale
                    your website and to drive meaningful traffic to perform
                    action. Our package includes Content Marketing, Link
                    Building on good websites, Guest Posting, Increasing Social
                    Media Presence and Removing Toxic Links to help increase
                    authority and website credibility on Google.
                  </p>
                  <div className=" flex items-center gap-x-6 pt-10">
                    <GradientButton text="Learn More" route="/" />
                  </div>
                </div>
              </TextWithImageContainer>
              <TextWithImageContainer
                imageSrc={mobile2.src}
                imageAlt="mobile2"
                blackContainer={true}
                imageRight={true}
              >
                <div>
                  <h1 className="mt-10 smallHeading font-bold tracking-tight text-white sm:text-[35px]">
                    Content Optimization {" "}
                  </h1>
                  <p className="mt-6 paragraph leading-8 text-white font-normal">
                    TMG provides content optimization services to help make your
                    content more effective, and improve quality, making it more
                    informative and engaging for your audience. We can also help
                    you target specific keywords and topics to ensure that your
                    content is being seen by the right people.
                  </p>
                  <div className=" flex items-center gap-x-6 pt-10">
                    <GradientButton text="Learn More" route="/" />
                  </div>
                </div>
              </TextWithImageContainer>
              <TextWithImageContainer
                imageSrc={tmg.src}
                imageAlt="tmg"
                blackContainer={true}
                imageRight={false}
              >
                <div>
                  <h1 className="mt-10 smallHeading font-bold tracking-tight text-white sm:text-[35px]">
                    What else?
                  </h1>
                  <p className="mt-6 paragraph leading-8 text-white font-normal">
                    As your dedicated SEO agency, we go a step further than just
                    make your website perform well. We strategize with reasoning
                    and depend on the market research so we can showcase the
                    results to you, that would help your business get authentic
                    traffic without spending another dime on it. 
                  </p>
                  <div className=" flex items-center gap-x-6 pt-10">
                    <GradientButton text="Learn More" route="/" />
                  </div>
                </div>
              </TextWithImageContainer>
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
                  <h1 className="mt-10 max-w-lg smallHeading font-bold tracking-tight text-white sm:text-[35px]">
                    Dedicated Resource Allocation
                  </h1>
                  <p className="mt-6 paragraph leading-8 text-white font-normal">
                    At TMG, we understand that your brand is much more than just
                    a logo or a name. It is the overall look and feel that a
                    customer experiences - from your website and marketing
                    materials to the way you interact with your customers.
                    That's why we offer dedicated resources based on needs that
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
        </section>
      </PageWrapper>
    </>
  );
}

export default BrandManagement;
