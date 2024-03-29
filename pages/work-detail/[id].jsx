import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../src/components/header/Header";
import ScreenShot from "../../src/assets/images/kinimo-ss1.png";
import axios from "axios";
import Section4card from "../../src/components/works/section4card";
import Footer from "../../src/components/footer/Footer";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import SEOHeader from "../../src/components/MetaData/SEOHeader";
import Image from "../../src/components/Image/Image";
import { generateImageUrl } from "../../src/helpers/Helpers";

function WorkDetail({ work }) {
  return (
    <>
      <SEOHeader metadata={work?.attributes?.headerData} />
      <PageWrapper>
        <div className="max-w-7xl mx-auto">
          <section className="pagePaddingX">
            <div className="flex justify-center mt-9 md:mt-20 ">
              {work?.attributes?.image1 &&
                work?.attributes?.image1?.data?.attributes?.url !== "" &&
                work?.attributes?.image1?.data?.attributes?.url != null && (
                  <Image
                    width={500}
                    height={300}
                    alt={
                      work?.attributes?.image1Alt &&
                      work?.attributes?.image1Alt !== ""
                        ? work?.attributes?.image1Alt
                        : "work image"
                    }
                    src={generateImageUrl(
                      work?.attributes?.image1?.data?.attributes?.url
                    )}
                    loading="lazy"
                    layout="responsive"
                    objectFit="cover"
                  />
                )}
            </div>
            <h1 className="mt-3 md:mt-0 text-center largeHeading gradientText lg:pt-40">
              {work?.attributes?.featured_title}{" "}
            </h1>
            <div className="flex w-full">
              <div className="pb-20 md:pb-40 lg:pb-60 mt-1 md:mt-5 lg:mt-16 w-full">
                <h2 className="heading mb-8 blackHeading leading-none pl-6">
                  <span className="gradientText text-sm align-top font-medium">
                    01{" "}
                  </span>
                  The Brief
                </h2>
                <p className="whitespace-pre-wrap blackDescriptionText pl-5 w-full paragraph">
                  {work?.attributes?.gallery_first_description}
                </p>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center flex-col gap-10 md:gap-16">
            <div className="max-w-[70%]">
              {work?.attributes?.image2 &&
                work?.attributes?.image2?.data?.attributes?.url !== "" &&
                work?.attributes?.image2?.data?.attributes?.url != null && (
                  <Image
                    width={500}
                    height={1000}
                    alt={
                      work?.attributes?.image2Alt &&
                      work?.attributes?.image2Alt !== ""
                        ? work?.attributes?.image2Alt
                        : "work image"
                    }
                    src={generateImageUrl(
                      work?.attributes?.image2?.data?.attributes?.url
                    )}
                    loading="lazy"
                    layout="responsive"
                    objectFit="cover"
                  />
                )}
            </div>
            {work?.attributes?.image3 &&
              work?.attributes?.image3?.data?.attributes?.url !== "" &&
              work?.attributes?.image3?.data?.attributes?.url != null && (
                <Image
                  width={500}
                  height={300}
                  alt={
                    work?.attributes?.image3Alt &&
                    work?.attributes?.image3Alt !== ""
                      ? work?.attributes?.image3Alt
                      : "work image"
                  }
                  src={generateImageUrl(
                    work?.attributes?.image3?.data?.attributes?.url
                  )}
                  loading="lazy"
                  layout="responsive"
                  objectFit="cover"
                />
              )}
          </section>
          <div className="pagePaddingX w-full flex flex-col">
            <div className="py-20 md:py-40 lg:py-60">
              <h2 className="heading mb-8 blackHeading whitespace-pre-wrap leading-none relative pl-6">
                {work?.attributes?.gallery_second_title}
              </h2>
              <p className="blackDescriptionText pl-5 paragraph whitespace-pre-wrap">
                {work?.attributes?.gallery_second_description}
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-6 md:mt-10">
            {work?.attributes?.image4 &&
              work?.attributes?.image4?.data?.attributes?.url !== "" &&
              work?.attributes?.image4?.data?.attributes?.url != null && (
                <Image
                  width={500}
                  height={300}
                  alt={
                    work?.attributes?.image4Alt &&
                    work?.attributes?.image4Alt !== ""
                      ? work?.attributes?.image4Alt
                      : "work image"
                  }
                  src={generateImageUrl(
                    work?.attributes?.image4?.data?.attributes?.url
                  )}
                  loading="lazy"
                  layout="responsive"
                  objectFit="cover"
                />
              )}
          </div>
          <div className="flex justify-center my-4 md:my-10">
            {work?.attributes?.image5 &&
              work?.attributes?.image5?.data?.attributes?.url !== "" &&
              work?.attributes?.image5?.data?.attributes?.url != null && (
                <Image
                  width={500}
                  height={300}
                  alt={
                    work?.attributes?.image5Alt &&
                    work?.attributes?.image5Alt !== ""
                      ? work?.attributes?.image5Alt
                      : "work image"
                  }
                  src={generateImageUrl(
                    work?.attributes?.image5?.data?.attributes?.url
                  )}
                  loading="lazy"
                  layout="responsive"
                  objectFit="cover"
                />
              )}
          </div>
        </div>
        <Section4card
          conversionRate={work?.attributes?.rate1}
          sessionRate={work?.attributes?.rate2}
          bounceRate={work?.attributes?.rate3}
        />
        <Footer />
      </PageWrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await axios.get(
      `https://portal.themediagale.com/api/work-kinimos?filters[slug][$eq]=${context.params.id}&populate=*`,
      { timeout: 8000 }
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

export default WorkDetail;
