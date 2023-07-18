/* eslint-disable */
import Header from "../src/components/header/Header";
// import kotaLogo from "../src/assets/images/Kota_logo.png";
import kotaLogo from "../src/assets/images/tmg-logo.png";
import { work } from "../src/helpers/Helpers";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Expertise from "../src/components/expertise/Expertise";
import ExpertiseSmall from "../src/components/expertise/ExpertiseSmall";
import Footer from "../src/components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import workFeaturedImage from "../src/assets/images/work-featured-1.png";
// import workGallery1 from "../src/assets/images/work-gall-1.png";
// import workGallery2 from "../src/assets/images/work-gall-2.png";
import ExpertiseStatic from "../src/components/expertise/ExpertiseStatic";
// import "swiper/css/bundle";
// import "./styles.css";
import Image from "../src/components/Image/Image";
import PageWrapper from "../src/components/PageWrapper/PageWrapper";
import HeroContainer from "../src/components/containers/HeroContainer";
const workStatic = [
  {
    featured_image: workFeaturedImage,
    featured_title: "KINIMO COSMETICS",
    gallery_first_title: "The Brief",
    gallery_first_description:
      "Meet Kinimo Cosmetics: A Pakistani beauty brand founded in 2019, that focuses on the new age definition of beauty, offering high-quality natural products that inspire confidence and passion in everyone.They reached out to us for content creation, and website development along with SEO and since then our connection has been fruitful.",
    // gallery1: workGallery1,
    gallery_second_title: "",
    gallery_second_description: "",
    // gallery2: workGallery2,
  },
];
// export async function getStaticProps(context) {

//     var blogsData;

//     try {

//       const res2 = await fetch("https://tmg-strapi-w6pu3.ondigitalocean.app/api/works?populate=*");
//       blogsData = await res2.json();

//   console.log("Blogs",blogsData)

//     } catch (error) {
//       console.log("Error", error);

//       blogsData = null;
//     }

//     return {
//       props: { blogsData }, // props will be passed to the page
//     };
//   }
const Work = () => {
  const [work, setWork] = useState([]);
  // {console.log("Work",blogsData)}
  useEffect(() => {
    axios
      .get(
        "https://tmg-strapi-w6pu3.ondigitalocean.app/api/work-kinimos?populate=*"
      )
      .then((res) => {
        // console.log("Dataaaaaaaaaa", res.data.data);
        setWork(res.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return (
    <>
      <PageWrapper>
        <HeroContainer imageSrc={kotaLogo.src}>
          <div className="w-full">
            <h4 className="mb-2 md:mb-6  headingBlack leading-tight">
              We are experts in bringing brands to life digitally.
            </h4>
            <p className="paragraphBlack">
              TMG is a progressive and insightful design agency, technically and
              creatively skilled to translate your brand into its best digital
              self. Our design and development approach creates impactful,
              engaging brands and immersive digital experiences that bring you a
              return on creativity.
            </p>
          </div>
        </HeroContainer>
        <Tabs className="pagePaddingX tabs-wrapper pt-20">
          <TabList>
            {
              // work.filter(x => x.hasOwnProperty('tabTitle')).map((item, index) => <Tab key={index}>{item.tabTitle}</Tab>)
              // work.map((item, index) => <Tab key={index}>Hello</Tab>)
            }
          </TabList>
          {work == "" ? (
            <ExpertiseStatic backGroundBlack={false} list={workStatic} />
          ) : (
            work.map((item, index) => (
              <TabPanel key={index}>
                {<Expertise backGroundBlack={false} list={work} />}
              </TabPanel>
            ))
          )}
        </Tabs>
        <Footer />
      </PageWrapper>
    </>
  );
};
export default Work;
