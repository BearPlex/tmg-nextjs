/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../src/components/header/Header";
import Section1 from "../../src/components/works/section1";
import ScreenShot from "../../src/assets/images/kinimo-ss1.png";
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
  }, []);
  return (
    <>
      <PageWrapper>
        <section className="">
          <div className="pagePaddingX 3xl:max-w-7xl 3xl:mx-auto">
            <span className="text-pink-400 text-base font-medium tracking-widest">
              {work?.attributes?.date}
            </span>

            <div className="headingBlack">{work?.attributes?.title}</div>
            <br />
            <p>{work?.attributes?.sub_title}</p>
            <div className="w-full  mb-9 md:mb-20"></div>
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
      </PageWrapper>
    </>
  );
}

export default BlogDetail;
