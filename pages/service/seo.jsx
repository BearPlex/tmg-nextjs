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
import axios from "axios";
import Footer from "../../src/components/footer/Footer";
import Image from "../../src/components/Image/Image";
import GradientButton from "../../src/components/button/GradientButton";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import TextWithImageContainer from "../../src/components/containers/TextWithImageContainer";
import TextWithVideoContainer from "../../src/components/containers/TextWithVideoContainer";
import ExpertiseSmall from "../../src/components/expertise/ExpertiseSmall";
function BrandManagement() {
  const [work, setWork] = useState([]);
  // {console.log("Work",blogsData)}
  useEffect(() => {
    axios
      .get(
        "https://tmg-strapi-w6pu3.ondigitalocean.app/api/work-kinimos?populate=*"
      )
      .then((res) => {
        console.log("Res", res.data.data);
        const sortedWork = [...res.data.data].sort((a, b) => {
          const dateA = new Date(a.attributes.publishedAt);
          const dateB = new Date(b.attributes.publishedAt);
          return dateA - dateB;
        });

        // Update the state with the sorted array
        setWork(sortedWork);

        // setWork(res.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return (
    <>
      <PageWrapper>
        <section className="w-full">
          <TextWithVideoContainer>
            <div className="w-full">
              <h4 className="mb-2 md:mb-6  heading blackDescriptionText ">
                Performance Driven <span className="gradientText">SEO</span>{" "}
                Services
              </h4>
              <p className="paragraph blackDescriptionText">
                A highly optimized website is essential for a business to
                generate new leads and sales on the internet. However, to
                achieve this requires a website to have a content strategy,
                technically proficient and conform to the latest search engine
                optimization{" "}
                <span className="gradientText"> recommendations</span> and{" "}
                <span className="gradientText"> best-practices.</span>{" "}
              </p>
              <div className="mt-4 md:mt-10">
                <GradientButton
                  text="Book Free Consultation Today"
                  route="/contact"
                />
              </div>
            </div>
          </TextWithVideoContainer>
          <section>
            <div className="bgWhite py-10 md:py-20 w-full">
              <div className="pagePaddingX w-full 3xl:max-w-7xl 3xl:mx-auto">
                <div className="w-full py-4 sm:py-10 flex flex-col items-center md:flex-row componentsMainGap md:py-10">
                  <div className="mt-1 md:mt-5 lg:mt-16 sm:mt-24 lg:flex-shrink-0 w-full md:w-1/2 lg:flex-grow">
                    <h1 className="blackDescriptionText largeHeading">
                      Content strategy that
                      <span className="gradientText">
                        {" "}
                        increases visibility
                      </span>{" "}
                    </h1>
                  </div>
                  <div className="lg:flex-auto w-full md:w-1/2">
                    <p className="mt-0 md:mt-2 lg:mt-6 paragraph  blackDescriptionText">
                      We provide On Page and Off Page solutions that help
                      increase your website search rank so you do not need to
                      pay a dime for traffic.
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
            <div className="background-gradient py-12 sm:py-28 md:py-40">
              <div className="pagePaddingX 3xl:max-w-7xl 3xl:mx-auto">
                <dl className="flex flex-col lg:flex-row componentsMainGap">
                  <div className="mx-auto items-center">
                    <dd className="relative  extraLargeHeadingWhite">
                      What makes us sooo good at it?
                    </dd>
                  </div>
                  <div className="flex flex-col md:flex-row componentsMainGap">
                    <div>
                      <dt className="largeHeadingWhite">Expert Analysis</dt>
                      <dd className="mt-0 md:mt-2 lg:mt-6 smallTextWhite  ">
                        We make sure to analyze the market competition
                        landscape.This helps us form accurate predictions about
                        how we are going to rank your business on Google
                        rankings.
                      </dd>

                      <dt className=" largeHeadingWhite xl:mt-10">
                        Smart Audit
                      </dt>
                      <dd className="mt-0 md:mt-2 lg:mt-6 smallTextWhite ">
                        We make sure to diagnose your website so we know what we
                        are operating. This helps us drive a result oriented
                        strategy that eliminates loose ends on your website and
                        performs better.
                      </dd>
                    </div>
                    <div>
                      <dt className="largeHeadingWhite ">Keyword Search</dt>
                      <dd className="mt-0 md:mt-2 lg:mt-6 smallTextWhite ">
                        We do a comprehensive keyword search relevant to your
                        business and shortlist top traffic driving search terms
                        with less competition. This helps us to map and optimize
                        the website.
                      </dd>
                      <dt className="largeHeadingWhite  xl:mt-4">Growth</dt>
                      <dd className="mt-0 md:mt-2 lg:mt-6 smallTextWhite ">
                        We aim to strive for growth oriented results. With our
                        expert-led optimisation, we ensure that your website
                        ranks on the highest search result with the right
                        targeting.
                      </dd>
                    </div>
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
                  <h1 className="mt-4 md:mt-10 heading whiteHeadingText">
                    On Page SEO 
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    While search engine rankings are driven from link building
                    campaigns, ongoing on-page optimization of your website
                    hosting, code, content is foundational when it comes to user
                    experience. That is why we ensure to optimize your pages
                    which include Meta Title and Descriptions, Title Tags and
                    Creating GMB Profile.
                  </p>
                  <div className=" flex items-center gap-x-6 pt-3 md:pt-10">
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
                  <h1 className="mt-4 md:mt-10 heading whiteHeadingText">
                    Off Page SEO
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    Link Building and Content Marketing is essential to scale
                    your website and to drive meaningful traffic to perform
                    action. Our package includes Content Marketing, Link
                    Building on good websites, Guest Posting, Increasing Social
                    Media Presence and Removing Toxic Links to help increase
                    authority and website credibility on Google.
                  </p>
                  <div className=" flex items-center gap-x-6 pt-3 md:pt-10">
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
                  <h1 className="mt-4 md:mt-10 heading whiteHeadingText">
                    Content Optimization {" "}
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    TMG provides content optimization services to help make your
                    content more effective, and improve quality, making it more
                    informative and engaging for your audience. We can also help
                    you target specific keywords and topics to ensure that your
                    content is being seen by the right people.
                  </p>
                  <div className=" flex items-center gap-x-6 pt-3 md:pt-10">
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
                  <h1 className="mt-4 md:mt-10 heading whiteHeadingText">
                    What Else?
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteDescriptionText ">
                    As your dedicated SEO agency, we go a step further than just
                    make your website perform well. We strategize with reasoning
                    and depend on the market research so we can showcase the
                    results to you, that would help your business get authentic
                    traffic without spending another dime on it. 
                  </p>
                  <div className=" flex items-center gap-x-6 pt-3 md:pt-10 mb-10 md:mb-16">
                    <GradientButton text="Learn More" route="/" />
                  </div>
                </div>
              </TextWithImageContainer>
            </div>
          </section>

          <section className="pagePaddingX w-full 3xl:max-w-7xl 3xl:mx-auto">
            <Tabs className="tabs-wrapper">
              {work.map((item, index) => (
                <TabPanel key={index}>
                  <ExpertiseSmall
                    backGroundBlack={false}
                    list={work}
                    cssClass="text-black"
                  />
                </TabPanel>
              ))}
            </Tabs>
          </section>

          <section className="background-gradient pb-16 md:pb-0">
            <div className="w-full 3xl:max-w-7xl 3xl:mx-auto">
              <div className="flex flex-col md:flex-row items-center 3xl:px-0 3xl:pl-0 ">
                <div className="w-full md:w-1/2">
                  <Image
                    width={500}
                    height={300}
                    src={hand.src}
                    alt="hand"
                    className="w-[658px] h-[836px] drop-shadow-xl"
                  />
                </div>
                <div className="pagePaddingX w-full md:w-1/2  ">
                  <h1 className="mt-2 md:mt-10 largeHeading whiteHeadingText">
                    Dedicated Resource Allocation
                  </h1>
                  <p className="mt-0 md:mt-2 lg:mt-6 paragraph whiteHeadingText">
                    At TMG, we understand that your brand is much more than just
                    a logo or a name. It is the overall look and feel that a
                    customer experiences - from your website and marketing
                    materials to the way you interact with your customers.
                    That's why we offer dedicated resources based on needs that
                    fit your job requirement.
                    <br />
                    From Website Developers, Content Creators and Managers to
                    SEO Experts - we make sure that your daily work requirement
                    is fulfilled remotely.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="mt-0">
            <Footer />
          </div>
        </section>
      </PageWrapper>
    </>
  );
}

export default BrandManagement;
