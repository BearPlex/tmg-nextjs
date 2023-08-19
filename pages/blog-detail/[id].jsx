/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../src/components/header/Header";
import Section1 from "../../src/components/works/section1";
import Section2Image from "../../src/components/works/section2Image";
import axios from "axios";
import Section3Image from "../../src/components/works/section3Image";
import Section4card from "../../src/components/works/section4card";
import Footer from "../../src/components/footer/Footer";
import Image from "../../src/components/Image/Image";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import { convertStringForImage } from "../../src/helpers/Helpers";

import ReactMark from "react-markdown";
function BlogDetail() {
  const router = useRouter();

  const {
    query: { id },
  } = router;
  const props = {
    id,
  };
  const [work, setWork] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://tmg-strapi-w6pu3.ondigitalocean.app/api/blogs/${id}?populate=*`
      )
      .then((res) => {
        setWork(res.data.data);
      })
      .catch((err) => {
        console.log("Error123", err);
      });
  }, [id]);
  return (
    <>
      <PageWrapper>
        <div className="max-w-7xl mx-auto">
          <section className="pagePaddingX">
            {/* <h1 className="mt-3 md:mt-10 text-center largeHeading font-bold gradientText pt-20 md:pt-30 lg:pt-40"> */}
            <span className="text-pink-400 text-base tracking-widest">
              {work?.attributes?.date}
            </span>

            <div className="headingBlack">{work?.attributes?.title}</div>
            <span className="mt-1 nextLineSpan" />
            <p className="blackDescriptionText paragraph">
              {work?.attributes?.sub_title}
            </p>
            {/* </h1> */}
            <div className="flex justify-center mt-9 md:mt-20">
              <Image
                width={500}
                height={300}
                alt="attributes"
                src={`https://beta.themediagale.com/public_images/work/${
                  work?.attributes?.image1 && work?.attributes?.image1 !== ""
                    ? work?.attributes?.image1
                    : "Women_Rise_1"
                }.png`}
                loading="lazy"
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="flex w-full">
              <div className="pb-20 md:pb-40 lg:pb-60 mt-1 md:mt-5 lg:mt-16 w-full">
                <h2 className="heading mb-5 font-bold blackHeading leading-none pl-6">
                  Introduction
                </h2>
                <p className="whitespace-pre-wrap blackDescriptionText pl-5 w-full paragraph">
                  {work?.attributes?.blog_content}
                </p>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center flex-col gap-10 md:gap-16">
            <div className="max-w-[70%]">
              <Image
                width={500}
                height={1000}
                alt="attributes"
                src={`https://beta.themediagale.com/public_images/work/${
                  work?.attributes?.image2 && work?.attributes?.image2 !== ""
                    ? work?.attributes?.image2
                    : "Women_Rise_1"
                }.png`}
                loading="lazy"
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <Image
              width={500}
              height={300}
              alt="attributes"
              src={`https://beta.themediagale.com/public_images/work/${
                work?.attributes?.image3 && work?.attributes?.image3 !== ""
                  ? work?.attributes?.image3
                  : "Women_Rise_1"
              }.png`}
              loading="lazy"
              layout="responsive"
              objectFit="cover"
            />
          </section>
          <div className="pagePaddingX w-full flex flex-col">
            <div className="py-20 md:py-40 lg:py-60">
              <h2 className="heading mb-5 font-bold blackHeading whitespace-pre-wrap leading-none relative pl-6">
                {work?.attributes?.bog_heading_second}
              </h2>
              <p className="blackDescriptionText pl-5 paragraph">
                {work?.attributes?.blog_content_second}
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-6 md:mt-10">
            <Image
              width={500}
              height={300}
              alt="attributes"
              src={`https://beta.themediagale.com/public_images/work/${
                work?.attributes?.image4 && work?.attributes?.image4 !== ""
                  ? work?.attributes?.image4
                  : "Women_Rise_1"
              }.png`}
              loading="lazy"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="flex justify-center my-4 md:my-10">
            <Image
              width={500}
              height={300}
              alt="attributes"
              src={`https://beta.themediagale.com/public_images/work/${
                work?.attributes?.image5 && work?.attributes?.image5 !== ""
                  ? work?.attributes?.image5
                  : "Women_Rise_1"
              }.png`}
              loading="lazy"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <Section4card />
        <Footer />
      </PageWrapper>
      {/* <PageWrapper>
        <section className="">
          <div className="pagePaddingX max-w-7xl mx-auto">
            <span className="text-pink-400 text-base tracking-widest">
              {work?.attributes?.date}
            </span>

            <div className="headingBlack">{work?.attributes?.title}</div>
            <span className="mt-1 nextLineSpan" />
            <p>{work?.attributes?.sub_title}</p>
            <div className="w-full  mb-6 md:mb-20"></div>
            <div className="w-full my-4 md:my-10 xl:-ml-3">
              <Image
                width={500}
                height={300}
                src={`https://beta.themediagale.com/public_images/blogs/${
                  work?.attributes?.title && work?.attributes?.title !== ""
                    ? convertStringForImage(work?.attributes?.title)
                    : "Women-Rise"
                }.png`}
                alt="blog image"
                className="  rounded-3xl    w-5/6  h-[550px] object-cover  mx-auto  max-w-7xl"
              />
            </div>
            <div className="max-w-2xl w-full mx-auto">
              <div className="text-orange_theme-400">Introduction.</div>
              <p className="blackDescriptionText pb-7 md:pb-20  mt-3">
                Did you know that if the internet was a country, it would be the
                worlds 7th biggest polluter, emitting 1.6 billion annual tons in
                greenhouse gas emissions? As a planet, we are currently facing
                unprecedented levels of climate change, and the internet plays a
                sizeable part in this problem. From websites to
                cryptocurrencies, it consumes large amounts of electricity in
                data centres, telecom networks, and end-user devices. Find out
                how web technology can still be efficient with low-carbon
                digital products and services.
              </p>

              <ReactMark className="blackDescriptionText pb-7 md:pb-20">
                {work?.attributes?.blog_content}
              </ReactMark>
            </div>
          </div>
        </section>
      </PageWrapper> */}
    </>
  );
}

export default BlogDetail;
