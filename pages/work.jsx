import Header from "../src/components/header/Header";
import kotaLogo from "../src/assets/images/Work-pic.png";
import { work } from "../src/helpers/Helpers";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ExpertiseSmall from "../src/components/expertise/ExpertiseSmall";
import Footer from "../src/components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import workFeaturedImage from "../src/assets/images/work-featured-1.png";
import ExpertiseStatic from "../src/components/expertise/ExpertiseStatic";
import SEOHeader from "../src/components/MetaData/SEOHeader";
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
    gallery_second_title: "",
    gallery_second_description: "",
  },
];
const Work = ({ metaData }) => {
  const [work, setWork] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://portal.themediagale.com/api/work-kinimos?populate=*&pagination[pageSize]=1000"
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
      <SEOHeader metadata={metaData} />
      <PageWrapper>
        <HeroContainer imageSrc={kotaLogo.src}>
          <div className="w-full">
            <h1 className="mb-2 md:mb-6  headingBlack">
              Work
              <span className="gradientText"> Portfolio and Achievements</span>
            </h1>
            <p className="paragraphBlack">
              TMG is a progressive and insightful design agency, technically and
              creatively skilled to translate your brand into its best digital
              self. Our design and development approach creates impactful,
              engaging brands and immersive digital experiences that bring you a
              return on creativity.
            </p>
          </div>
        </HeroContainer>
        <Tabs className="pagePaddingX tabs-wrapper md:pt-20 max-w-7xl mx-auto">
          {work && work.length > 0 && (
            <div>
              {work.map((item, index) => (
                <TabPanel key={index + 300}>
                  {
                    <ExpertiseSmall
                      showAllProjects={true}
                      backGroundBlack={false}
                      list={work}
                    />
                  }
                </TabPanel>
              ))}
            </div>
          )}
        </Tabs>
        <Footer />
      </PageWrapper>
    </>
  );
};
export default Work;

export async function getServerSideProps(context) {
  const DoNotChange = "Work";
  try {
    const res = await axios.get(
      `https://portal.themediagale.com/api/static-pages-metas?filters[DoNotChange][$eq]=${DoNotChange}&populate=*`,
      { timeout: 8000 }
    );
    const metaData =
      res.data.data && res.data.data?.length > 0
        ? res.data.data[0]?.attributes?.metaData
        : {};
    return { props: { metaData: metaData } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { metaData: {} } };
  }
}
