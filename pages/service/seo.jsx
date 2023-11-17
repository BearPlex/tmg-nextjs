/* eslint-disable */
import React, { useEffect, useState } from "react";
import Header from "../../src/components/header/Header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import Footer from "../../src/components/footer/Footer";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import TextWithImageContainer from "../../src/components/containers/TextWithImageContainer";
import TextWithVideoContainer from "../../src/components/containers/TextWithVideoContainer";
import GradientButton from "../../src/components/button/GradientButton";
import ExpertiseSmall from "../../src/components/expertise/ExpertiseSmall";
import SEOHeader from "../../src/components/MetaData/SEOHeader";
import Image from "../../src/components/Image/Image";

import staffAugmentationImage from "../../public/webp/staff-augmentation.5366d6f6.webp";
import book from "../../public/webp/on-seo.1a3fb23f.webp";
import mobile3 from "../../public/webp/off-seo.3b219f1f.webp";
import mobile2 from "../../public/webp/content-opt.1e285979.webp";
import tmg from "../../public/webp/tmg.e74e1631.webp";

function BrandManagement({ metaData }) {
  const [work, setWork] = useState([]);
  useEffect(() => {
    axios
      .get("https://portal.themediagale.com/api/work-kinimos?populate=*")
      .then((res) => {
        const sortedWork = [...res.data.data].sort((a, b) => {
          const dateA = new Date(a.attributes.publishedAt);
          const dateB = new Date(b.attributes.publishedAt);
          return dateA - dateB;
        });

        setWork(sortedWork);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return (
    <>
      <SEOHeader metadata={metaData} />
      <PageWrapper>
        <section className="w-full">
          <TextWithVideoContainer>
            <div className="w-full">
              <h1 className="mb-2 md:mb-6  headingBlack ">
                Best SEO Company for{" "}
                <span className="gradientText">Shopify and Wordpress</span>{" "}
              </h1>
              <p className="paragraph blackDescriptionText">
                A highly optimized website is essential for a business to
                generate new leads and sales on the internet. However, to
                achieve this requires a website to have a content strategy,
                technically proficient and conform to the latest search engine
                optimization{" "}
                <span className="gradientText"> recommendations</span> and{" "}
                <span className="gradientText"> best-practices.</span>{" "}
              </p>
              <div className="mt-6 md:mt-10">
                <GradientButton
                  text="Book Free Consultation Today"
                  route="/contact"
                />
              </div>
            </div>
          </TextWithVideoContainer>
          <section>
            <div className="bgWhite mt-10 py-10 md:py-20 w-full">
              <div className="pagePaddingX w-full max-w-7xl mx-auto">
                <div className="w-full py-4 sm:py-10 flex flex-col items-center md:flex-row componentsMainGap md:py-10">
                  <div className="lg:flex-shrink-0 w-full md:w-1/2 lg:flex-grow justify-between">
                    <h2 className="headingBlack">
                      Content strategy that
                      <span className="gradientText">
                        {" "}
                        Increases Visibility
                      </span>{" "}
                    </h2>
                  </div>
                  <div className="lg:flex-auto w-full md:w-1/2">
                    <p className="mt-2 lg:mt-6 paragraph  blackDescriptionText">
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
            <div className="background-gradient-new py-10 md:py-20">
              <div className="pagePaddingX max-w-7xl mx-auto">
                <dl className="flex flex-col lg:flex-row componentsMainGap">
                  <div className="mx-auto items-center">
                    <dd className="relative headingWhite">
                      What makes us sooo good at it?
                    </dd>
                  </div>
                  <div className="grid grid-cols-1  md:grid-cols-2 lg:gap-14 md:gap-10 sm-:gap-0">
                    <div>
                      <div className="headingWhite">Expert Analysis</div>
                      <div className="mt-2 lg:mt-6  paragraphWhite">
                        We make sure to analyze the market competition
                        landscape.This helps us form accurate predictions about
                        how we are going to rank your business on Google
                        rankings.
                      </div>
                    </div>

                    <div>
                      <div className="headingWhite mt-3 sm:mt-3 lg:mt-0 md:mt-0">
                        Keyword Search
                      </div>
                      <div className="mt-2 lg:mt-6 paragraphWhite ">
                        We do a comprehensive keyword search relevant to your
                        business and shortlist top traffic driving search terms
                        with less competition. This helps us to map and optimize
                        the website.
                      </div>
                    </div>
                    <div>
                      <div className=" headingWhite mt-3 sm:mt-3 lg:mt-0 md:mt-0">
                        Smart Audit
                      </div>
                      <div className="mt-2 lg:mt-6 paragraphWhite ">
                        We make sure to diagnose your website so we know what we
                        are operating.  This helps us drive a result oriented
                        strategy that eliminates loose ends on your website and
                        performs better. 
                      </div>
                    </div>
                    <div>
                      <div className="headingWhite mt-3 sm:mt-3 lg:mt-0 md:mt-0">
                        Growth
                      </div>
                      <div className="mt-2 lg:mt-6 paragraphWhite ">
                        We aim to strive for growth oriented results. With our
                        expert-led optimisation, we ensure that your website
                        ranks on the highest search result with the right
                        targeting.
                      </div>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <section>
            <div className="bgBlack w-full py-8 md:py-10">
              <TextWithImageContainer
                imageSrc={book.src}
                imageAlt="book"
                blackContainer={true}
                imageRight={true}
              >
                <div>
                  <h2 className="mt-6 md:mt-10 heading whiteHeadingText">
                    On Page SEO 
                  </h2>
                  <p className="mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    While search engine rankings are driven from link building
                    campaigns, ongoing on-page optimization of your website
                    hosting, code, content is foundational when it comes to user
                    experience. That is why we ensure to optimize your pages
                    which include Meta Title and Descriptions, Title Tags and
                    Creating GMB Profile.
                  </p>
                  {/* <div className=" flex items-center gap-x-6 pt-3 md:pt-10">
                    <GradientButton
                      text="Learn More"
                      route="/"
                      bgBlack={true}
                    />
                  </div> */}
                </div>
              </TextWithImageContainer>
              <TextWithImageContainer
                imageSrc={mobile3.src}
                imageAlt="mobile3"
                blackContainer={true}
                imageRight={false}
              >
                <div>
                  <h2 className="mt-6 md:mt-10 heading whiteHeadingText">
                    Off Page SEO
                  </h2>
                  <p className="mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    Link Building and Content Marketing is essential to scale
                    your website and to drive meaningful traffic to perform
                    action. Our package includes Content Marketing, Link
                    Building on good websites, Guest Posting, Increasing Social
                    Media Presence and Removing Toxic Links to help increase
                    authority and website credibility on Google.
                  </p>
                  {/* <div className=" flex items-center gap-x-6 pt-3 md:pt-10">
                    <GradientButton
                      text="Learn More"
                      route="/"
                      bgBlack={true}
                    />
                  </div> */}
                </div>
              </TextWithImageContainer>
              <TextWithImageContainer
                imageSrc={mobile2.src}
                imageAlt="mobile2"
                blackContainer={true}
                imageRight={true}
              >
                <div>
                  <h2 className="mt-6 md:mt-10 heading whiteHeadingText">
                    Content Optimization {" "}
                  </h2>
                  <p className="mt-2 lg:mt-6 paragraph whiteDescriptionText">
                    TMG provides content optimization services to help make your
                    content more effective, and improve quality, making it more
                    informative and engaging for your audience. We can also help
                    you target specific keywords and topics to ensure that your
                    content is being seen by the right people.
                  </p>
                  {/* <div className=" flex items-center gap-x-6 pt-3 md:pt-10">
                    <GradientButton
                      text="Learn More"
                      route="/"
                      bgBlack={true}
                    />
                  </div> */}
                </div>
              </TextWithImageContainer>
              <TextWithImageContainer
                imageSrc={tmg.src}
                imageAlt="tmg"
                blackContainer={true}
                imageRight={false}
              >
                <div>
                  <h2 className="mt-6 md:mt-10 heading whiteHeadingText">
                    What Else?
                  </h2>
                  <p className="mt-2 lg:mt-6 paragraph whiteDescriptionText ">
                    As your dedicated SEO agency, we go a step further than just
                    make your website perform well. We strategize with reasoning
                    and depend on the market research so we can showcase the
                    results to you, that would help your business get authentic
                    traffic without spending another dime on it. 
                  </p>
                  {/* <div className=" flex items-center gap-x-6 pt-3 md:pt-10 mb-10 md:mb-16">
                    <GradientButton
                      text="Learn More"
                      route="/"
                      bgBlack={true}
                    />
                  </div> */}
                </div>
              </TextWithImageContainer>
            </div>
          </section>

          <section className="pagePaddingX w-full max-w-7xl mx-auto">
            <Tabs className="tabs-wrapper">
              {work.map((item, index) => (
                <TabPanel key={index + 400}>
                  <ExpertiseSmall
                    backGroundBlack={false}
                    list={work}
                    cssClass="blackHeading"
                  />
                </TabPanel>
              ))}
            </Tabs>
          </section>

          <section className="background-gradient-new py-8 md:py-20">
            <div className="max-w-7xl mx-auto">
              <TextWithImageContainer
                imageSrc={staffAugmentationImage.src}
                imageAlt="Staff Augmentation - The MediaGale"
                blackContainer={true}
                width={500}
                height={300}
                imageRight={false}
              >
                <div className="">
                  <h2 className="mt-5 md:mt-10 heading whiteHeadingText">
                    Dedicated Resource Allocation
                  </h2>
                  <p className="mt-2 lg:mt-6 paragraph whiteHeadingText">
                    At TMG, we understand that your brand is much more than just
                    a logo or a name. It is the overall look and feel that a
                    customer experiences - from your website and marketing
                    materials to the way you interact with your customers.
                    That's why we offer dedicated resources based on needs that
                    fit your job requirement.<br></br>
                    <br></br>
                    From Website Developers, Content Creators and Managers to
                    SEO Experts - we make sure that your daily work requirement
                    is fulfilled remotely.
                  </p>
                </div>
              </TextWithImageContainer>
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
export async function getServerSideProps(context) {
  const DoNotChange = "SEO";
  try {
    const res = await axios.get(
      `https://portal.themediagale.com/api/static-pages-metas?filters[DoNotChange][$eq]=${DoNotChange}&populate=*`
    );
    const metaData =
      res.data.data && res.data.data?.length > 0
        ? res.data.data[0]?.attributes?.metaData
        : {};
    return { props: { metaData: metaData } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { metaData: {} } };
  }
}
