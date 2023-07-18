import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../src/components/header/Header";
import Section1 from "../../src/components/workStatic/section1";
import ScreenShot from "../../src/assets/images/kinimo-ss1.png";
import Section2Image from "../../src/components/workStatic/section2Image";
import axios from "axios";
import Section3Image from "../../src/components/workStatic/section3Image";
import Section4card from "../../src/components/workStatic/section4card";
import Footer from "../../src/components/footer/Footer";
import workFeaturedImage from "../../src/assets/images/work-featured-1.png";
import workGallery1 from "../../src/assets/images/work-gall-1.png";
import workGallery2 from "../../src/assets/images/work-gall-2.png";
import ExpertiseStatic from "../../src/components/expertise/ExpertiseStatic";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
const work = [
  {
    featured_image: workFeaturedImage,
    featured_title: "KINIMO COSMETICS",
    gallery_first_title: "The Brief",
    gallery_first_description:
      "Meet Kinimo Cosmetics: A Pakistani beauty brand founded in 2019, that focuses on the new age definition of beauty, offering high-quality natural products that inspire confidence and passion in everyone.They reached out to us for content creation, and website development along with SEO and since then our connection has been fruitful.",
    gallery1: workGallery1,
    gallery_second_title: "",
    gallery_second_description: "",
    gallery2: workGallery2,
  },
];
function WorkDetail() {
  const router = useRouter();

  const {
    query: { id },
  } = router;
  const props = {
    id,
  };
  return (
    <>
      <PageWrapper>
        <section className="">
          <Section1
            work={work}
            title1st="KINIMO"
            title2nd="COSMETICS"
            workHeading="Execute"
          />
          <Section2Image work={work} />
          <Section3Image work={work} />
          <Section4card />
          <Footer />
        </section>
      </PageWrapper>
    </>
  );
}

export default WorkDetail;
