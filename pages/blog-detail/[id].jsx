import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../src/components/header/Header";
import axios from "axios";
import copySvg from "../../src/assets/svg/copySvg.svg";
import Footer from "../../src/components/footer/Footer";
import Image from "../../src/components/Image/Image";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import LatestBlogElement from "../../src/components/articles/LatestBlogElement";
import ReactMarkdown from "../../src/components/ReactMarkdown/ReactMarkdown";
import {
  facebookSvg,
  linkedinSvg,
  twitterSvg,
} from "../../src/helpers/Helpers";
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
            `https://app.themediagale.com/api/blogs?filters[slug][$eq]=${id}&populate=*`
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
            <div className="text-pink-400 paragraph tracking-widest mb-3">
              Published {work?.attributes?.dateAdded}
            </div>
            <div className="headingBlack">{work?.attributes?.title}</div>
            <ReactMarkdown data={work?.attributes?.blogData} />
            <div className="max-w-full">
              <div className="max-w-full md:max-w-[70%] mx-auto">
                <ReactMarkdown data={work?.attributes?.blogData2} />
                <div className="left-border">
                  <div className="headingBlack mt-8 md:mt-10">
                    {work?.attributes?.quote}
                  </div>
                  <div className="paragraphBlack mt-2">
                    - {work?.attributes?.quoteAuthor}
                  </div>
                </div>
                <ReactMarkdown data={work?.attributes?.blogData3} />
                <div className="mt-8 md:mt-10 flex flex-col md:flex-row w-full justify-between">
                  <div className="flex flex-row items-center mb-5 md:mb-0">
                    <div className="flex items-center h-[60px] md:h-[70px] w-[60px] md:w-[70px] mr-4 overflow-hidden rounded-[50%]">
                      {work?.attributes?.authorImage &&
                        work?.attributes?.authorImage !== "" && (
                          <Image
                            width={70}
                            height={70}
                            alt="attributes"
                            src={`${work?.attributes?.authorImage.data.attributes.url}`}
                            loading="lazy"
                            className="w-full h-full"
                            layout="responsive"
                            objectFit="fit"
                            // objectFit="cover"
                          />
                        )}
                    </div>
                    <div className="flex flex-col isolate">
                      <div>{work?.attributes?.authorName}</div>
                      <div>{work?.attributes?.authorJobTitle}</div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between md:justify-end items-center">
                    <a
                      className="border border-[#D0D5DD] rounded-sm px-4 flex flex-row items-center h-[40px]"
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

export default BlogDetail;
