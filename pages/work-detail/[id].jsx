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
    axios
      .get(
        `https://tmg-strapi-w6pu3.ondigitalocean.app/api/work-kinimos/${id}?populate=*`
      )
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
      <PageWrapper>
        <section className="">
          <div className="pagePaddingX 3xl:max-w-7xl 3xl:mx-auto">
            <Section1
              work={work?.attributes}
              title1st="KINIMO"
              title2nd="COSMETICS"
              workHeading="Execute"
            />
            <Section2Image work={work?.attributes} />
            <Section3Image work={work?.attributes} />
            <Section4card />
          </div>
          <Footer />
        </section>
      </PageWrapper>
    </>
  );
}

export default WorkDetail;
