import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../src/components/header/Header";
import axios from "axios";
import copySvg from "../../src/assets/svg/copySvg.svg";
import Footer from "../../src/components/footer/Footer";
import Image from "../../src/components/Image/Image";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import LatestBlogElement from "../../src/components/articles/LatestBlogElement";
import {
  facebookSvg,
  linkedinSvg,
  twitterSvg,
} from "../../src/helpers/Helpers";

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
    if (!router.isReady) return;
    const fetchData = () => {
      try {
        axios
          .get(
            `https://tmg-strapi-w6pu3.ondigitalocean.app/api/blogs?filters[slug][$eq]=${id}`
          )
          .then((res) => {
            // setWork(res.data.data);
            const allWorks = res.data.data;
            const matchingWork = allWorks.find(
              (workItem) => workItem.attributes.slug === id
            );

            if (matchingWork) {
              setWork(matchingWork);
            } else {
              console.error(`No work found for slug ${id}`);
            }
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (id) fetchData();
  }, [id, router.isReady]);

  return (
    <>
      <PageWrapper>
        <div className="w-full">
          <section className="max-w-7xl mx-auto pagePaddingX">
            <div className="text-pink-400 paragraph tracking-widest">
              Published {work?.attributes?.dateAdded}
            </div>
            <div className="headingBlack">{work?.attributes?.title}</div>
            <div className="paragraphBlack mt-2">
              {work?.attributes?.blogMainContent1}
            </div>
            {work?.attributes?.image1 && work?.attributes?.image1 !== "" && (
              <Image
                width={500}
                height={300}
                alt="attributes"
                src={`https://beta.themediagale.com/public_images/work/${work?.attributes?.image1}.png`}
                loading="lazy"
                layout="responsive"
                objectFit="cover"
                className="w-full"
              />
            )}
            <div className="max-w-full">
              <div className="max-w-[70%] mx-auto">
                <div>{work?.attributes?.blogMainContent2}</div>
                <div className="headingBlack mt-8 md:mt-10">
                  {work?.attributes?.introductionHeading}
                </div>
                <div className="paragraphBlack mt-2">
                  {work?.attributes?.introductionContent1}
                </div>
                {work?.attributes?.image2 &&
                  work?.attributes?.image2 !== "" && (
                    <Image
                      width={500}
                      height={300}
                      alt="attributes"
                      src={`https://beta.themediagale.com/public_images/work/${work?.attributes?.image2}.png`}
                      loading="lazy"
                      layout="responsive"
                      objectFit="cover"
                    />
                  )}
                <div className="left-border">
                  <div className="headingBlack mt-8 md:mt-10">
                    {work?.attributes?.quote}
                  </div>
                  <div className="paragraphBlack mt-2">
                    - {work?.attributes?.quoteAuthor}
                  </div>
                </div>
                <div className="paragraphBlack mt-8 md:mt-10">
                  {work?.attributes?.introductionContent2}
                </div>
                <div className="smallHeading mt-8 md:mt-10">
                  {work?.attributes?.subheading1}
                </div>
                <div className="paragraphBlack mt-2">
                  {work?.attributes?.subheadingContent1Part1}
                </div>
                {work?.attributes?.image3 &&
                  work?.attributes?.image3 !== "" && (
                    <Image
                      width={500}
                      height={300}
                      alt="attributes"
                      src={`https://beta.themediagale.com/public_images/work/${work?.attributes?.image3}.png`}
                      loading="lazy"
                      layout="responsive"
                      objectFit="cover"
                    />
                  )}
                <div className="paragraphBlack mt-2">
                  {work?.attributes?.subheadingContent1Part2}
                </div>
                <div className="smallHeading mt-8 md:mt-10">
                  {work?.attributes?.subheading2}
                </div>
                <div className="paragraphBlack mt-2">
                  {work?.attributes?.subheadingContent2Part1}
                </div>
                {work?.attributes?.image4 &&
                  work?.attributes?.image4 !== "" && (
                    <Image
                      width={500}
                      height={300}
                      alt="attributes"
                      src={`https://beta.themediagale.com/public_images/work/${work?.attributes?.image4}.png`}
                      loading="lazy"
                      layout="responsive"
                      objectFit="cover"
                    />
                  )}
                <div className="paragraphBlack mt-2">
                  {work?.attributes?.subheadingContent2Part2}
                </div>
                <div className="smallHeading mt-8 md:mt-10">
                  {work?.attributes?.subheading3}
                </div>
                <div className="paragraphBlack mt-2">
                  {work?.attributes?.subheadingContent3Part1}
                </div>
                {work?.attributes?.image5 &&
                  work?.attributes?.image5 !== "" && (
                    <Image
                      width={500}
                      height={300}
                      alt="attributes"
                      src={`https://beta.themediagale.com/public_images/work/${work?.attributes?.image5}.png`}
                      loading="lazy"
                      layout="responsive"
                      objectFit="cover"
                    />
                  )}
                <div className="paragraphBlack mt-2">
                  {work?.attributes?.subheadingContent3Part2}
                </div>
                <div className="headingBlack mt-8 md:mt-10">
                  {work?.attributes?.conclusionHeading}
                </div>
                <div className="paragraphBlack mt-2">
                  {work?.attributes?.conclusionContent}
                </div>
                <div className="mt-8 md:mt-10 authorCard flex flex-row w-full justify-between">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center h-[70px] w-[70px] mr-4">
                      {work?.attributes?.authorImage &&
                        work?.attributes?.authorImage !== "" && (
                          <Image
                            width={500}
                            height={300}
                            alt="attributes"
                            src={`https://beta.themediagale.com/public_images/work/${work?.attributes?.authorImage}.png`}
                            loading="lazy"
                            className="rounded-[50%]"
                            layout="responsive"
                            objectFit="cover"
                          />
                        )}
                    </div>
                    <div className="flex flex-col isolate">
                      <div>{work?.attributes?.authorName}</div>
                      <div>{work?.attributes?.authorJobTitle}</div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end items-center">
                    <a
                      className="border border-[#D0D5DD] rounded-sm px-4 flex flex-row items-center h-[40px] inline-block"
                      href={`${work?.attributes?.authorLink}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={copySvg.src}
                        alt="copy link"
                        className="h-[20px] w-[20px] mr-2"
                      />{" "}
                      <span className="paragraphBlack">Copy Link</span>
                    </a>
                    <div className="flex gap-x-0 md:gap-x-2 justify-start md:justify-end contact-wrapper">
                      <a
                        href={`https://twitter.com/${work?.attributes?.authorLinkTwitter}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block"
                      >
                        {twitterSvg()}
                      </a>
                      <a
                        href={`https://www.facebook.com/${work?.attributes?.authorLinkFacebook}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block"
                      >
                        {facebookSvg()}
                      </a>
                      <a
                        href={`https://www.linkedin.com/${work?.attributes?.authorLinkLinkedin}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block"
                      >
                        {linkedinSvg()}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full my-10 md:my-20">
              <div className="flex flex-col items-center justify-between">
                <div className="headingBlack">
                  Latest <span className="gradientText">Blog</span> Post
                </div>
                <div className="paragraphBlack mt-2">
                  Tool and strategies modern teams need to help their companies
                  grow.
                </div>
              </div>
              <LatestBlogElement />
            </div>
          </section>
          <Footer />
        </div>
      </PageWrapper>
    </>
  );
}

export default BlogDetail;
