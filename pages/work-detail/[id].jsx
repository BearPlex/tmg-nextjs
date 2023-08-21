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
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import Image from "../../src/components/Image/Image";

function WorkDetail() {
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
    if (id) fetchData();
  }, [id]);
  const fetchData = () => {
    console.log("fetchData CALLED");
    try {
      axios
        .get(
          `https://tmg-strapi-w6pu3.ondigitalocean.app/api/work-kinimos?populate=*`
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
  console.log(work);
  console.log("work FROM WORK-DETAILS");
  return (
    <>
      <PageWrapper>
        <div className="max-w-7xl mx-auto">
          <section className="pagePaddingX">
            <div className="flex justify-center mt-9 md:mt-20 ">
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
            <h1 className="mt-3 md:mt-0 text-center largeHeading font-bold gradientText lg:pt-40">
              {work?.attributes?.featured_title}{" "}
            </h1>
            <div className="flex w-full">
              <div className="pb-20 md:pb-40 lg:pb-60 mt-1 md:mt-5 lg:mt-16 w-full">
                <h2 className="heading mb-5 font-bold blackHeading leading-none pl-6">
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
                {work?.attributes?.gallery_second_title}
              </h2>
              <p className="blackDescriptionText pl-5 paragraph">
                {work?.attributes?.gallery_second_description}
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
    </>
  );
}

export default WorkDetail;
