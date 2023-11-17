import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../src/components/header/Header";
import axios from "axios";
import copySvg from "../../src/assets/svg/copySvg.svg";
import Footer from "../../src/components/footer/Footer";
import Image from "../../src/components/Image/Image";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import LatestBlogElement from "../../src/components/articles/LatestBlogElement";
import SEOHeader from "../../src/components/MetaData/SEOHeader";
import ReactMarkdown from "../../src/components/ReactMarkdown/ReactMarkdown";
import { generateImageUrl } from "../../src/helpers/Helpers";
import {
  facebookSvg,
  linkedinSvg,
  twitterSvg,
} from "../../src/helpers/Helpers";
function formatDate(dateString) {
  const dateObj = new Date(dateString);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "short" });
  const year = dateObj.getFullYear();

  return `${day} ${month}, ${year}`;
}

function BlogDetail({ work }) {
  const copyToClipboard = (text) => {
    const textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy"); // Successful copy
    } catch (err) {
      console.error("Unable to copy", err); // Unsuccessful copy
    }
    document.body.removeChild(textarea);
  };

  return (
    <>
      <SEOHeader metadata={work?.attributes?.headerData} />
      <PageWrapper>
        <div className="w-full">
          <section className="max-w-7xl mx-auto pagePaddingX">
            <div className="text-pink-400 paragraph tracking-widest mb-3">
              Published {formatDate(work?.attributes?.dateAdded)}
            </div>
            <div className="headingBlack">{work?.attributes?.title}</div>
            <ReactMarkdown data={work?.attributes?.blogData} />
            <div className="max-w-full">
              <div className="max-w-full md:max-w-[70%] mx-auto">
                <ReactMarkdown data={work?.attributes?.blogData2} />
                <div className="left-border mb-8 md:mb-16">
                  <div className="headingBlack mt-8 md:mt-10">
                    {work?.attributes?.quote}
                  </div>
                  <div className="paragraphBlack mt-2">
                    - {work?.attributes?.quoteAuthor}
                  </div>
                </div>
                <ReactMarkdown data={work?.attributes?.blogData3} />
                <div className="mt-10 md:mt-16 flex flex-col md:flex-row w-full justify-between">
                  <div className="flex flex-row items-center mb-5 md:mb-0">
                    <div className="flex items-center h-[60px] md:h-[70px] w-[60px] md:w-[70px] mr-4 overflow-hidden rounded-[50%]">
                      {work?.attributes?.authorImage &&
                        work?.attributes?.authorImage?.data?.attributes?.url !==
                          "" && (
                          <Image
                            width={70}
                            height={70}
                            alt={
                              work?.attributes?.authorImageAlt &&
                              work?.attributes?.authorImageAlt !== ""
                                ? work?.attributes?.authorImageAlt
                                : "author image"
                            }
                            src={generateImageUrl(
                              work?.attributes?.authorImage?.data?.attributes
                                ?.url
                            )}
                            loading="lazy"
                            className="w-full h-full"
                            layout="responsive"
                            objectFit="fit"
                          />
                        )}
                    </div>
                    <div className="flex flex-col isolate">
                      <div>{work?.attributes?.authorName}</div>
                      <div>{work?.attributes?.authorJobTitle}</div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between md:justify-end items-center">
                    <div
                      className="border border-[#D0D5DD] rounded-sm px-4 flex flex-row items-center h-[40px] cursor-pointer"
                      onClick={() =>
                        copyToClipboard(work?.attributes?.authorLink)
                      }
                    >
                      <Image
                        src={copySvg.src}
                        alt="copy link"
                        className="h-[20px] w-[20px] mr-2"
                      />
                      <span className="paragraphBlack">Copy Link</span>
                    </div>
                    <div className="flex gap-x-0 md:gap-x-2 justify-start md:justify-end contact-wrapper-blog">
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
export async function getServerSideProps(context) {
  try {
    const res = await axios.get(
      `https://portal.themediagale.com/api/blogs?filters[slug][$eq]=${context.params.id}&populate=*`
    );
    const allWorks = res.data.data;
    const matchingWork = allWorks.find(
      (workItem) => workItem.attributes.slug === context.params.id
    );
    return { props: { work: matchingWork } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { work: {} } };
  }
}

export default BlogDetail;
