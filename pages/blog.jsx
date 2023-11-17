import Header from "../src/components/header/Header";
import blogImage from "../src/assets/images/Blog-pic.png";
import bannerImage from "../src/assets/images/header-image-1.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Card from "../src/components/card/Card";
import CardStatic from "../src/components/card/CardStatic";
import Footer from "../src/components/footer/Footer";
import blog1 from "../src/assets/images/blog-1.png";
import PageWrapper from "../src/components/PageWrapper/PageWrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import SEOHeader from "../src/components/MetaData/SEOHeader";
import Image from "../src/components/Image/Image";
import GradientButton from "../src/components/button/GradientButton";
import HeroContainer from "../src/components/containers/HeroContainer";
import { useRouter } from "next/router";
import { generateImageUrl } from "../src/helpers/Helpers";
const blogsStatic = [
  {
    title: "Migrating to Linear 101",
    sub_title:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Heres how to get started.",
    blog_featured_image: blog1,
    blog_content: "",
  },
];
const Blog = ({ metaData }) => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("https://portal.themediagale.com/api/blogs?populate=*")
      .then((res) => {
        const sortedBlogs = res.data.data.sort(
          (a, b) =>
            new Date(b.attributes.dateAdded) - new Date(a.attributes.dateAdded)
        );
        setBlogs(sortedBlogs);
      })
      .catch((err) => {
        console.log("Error", err);
        setBlogs(blogsStatic);
      });
  }, []);
  const pushWork = (id) => {
    router.push(`/blog-detail/${id}`);
  };
  return (
    <>
      <SEOHeader metadata={metaData} />
      <PageWrapper>
        <section className="w-full">
          <HeroContainer imageSrc={blogImage.src}>
            <div className="w-full">
              <h1 className="mb-2 md:mb-6  headingBlack ">
                Trending
                <span className="gradientText"> Blogs and Articles</span>
              </h1>
              <p className="paragraphBlack">
                Because it should never just be work, it should be
                <span className="gradientText"> a Work of Art</span>{" "}
              </p>
              <div className="mt-6 md:mt-10">
                <GradientButton
                  text="Book Free Consultation Today"
                  route="/contact"
                />
              </div>
            </div>
          </HeroContainer>
          {blogs && blogs.length && (
            <div className="pagePaddingX pt-10 md:pt-20 max-w-7xl mx-auto">
              <div
                onClick={() => pushWork(blogs[0]?.attributes?.slug)}
                className="relative blog-banner w-full h-full cursor-pointer"
              >
                {blogs[0]?.attributes?.cardImage &&
                  blogs[0]?.attributes?.cardImage?.data?.attributes?.url !==
                    "" && (
                    <Image
                      src={generateImageUrl(
                        blogs[0]?.attributes?.cardImage?.data?.attributes?.url
                      )}
                      alt={
                        blogs[0]?.attributes?.cardImageAlt &&
                        blogs[0]?.attributes?.cardImageAlt !== ""
                          ? blogs[0]?.attributes?.cardImageAlt
                          : "blog image"
                      }
                      width={1300}
                      height={550}
                      layout="responsive"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  )}

                <div className="absolute left-10 bottom-10">
                  <span className="gradientText inline-block smallText font-semibold tracking-[1.5px] pb-1 md:pb-5">
                    Featured News
                  </span>
                  <h3 className="text-white max-w-7xl font-sofia-bold largeHeading leading-none">
                    {/* 5 examples of great E-Commerce product pages. */}
                    {blogs[0]?.attributes?.title}
                  </h3>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4">
            <Tabs className="pb-10 md:py20 pagePaddingX tabs-wrapper blog-tabs-wrapper max-w-7xl mx-auto">
              {blogs.length > 0 && blogs && (
                <div>
                  {blogs.map((item, index) => (
                    <TabPanel key={index + 100}>
                      <Card item={blogs} />
                    </TabPanel>
                  ))}
                </div>
              )}
            </Tabs>
          </div>
          <Footer />
        </section>
      </PageWrapper>
    </>
  );
};
export default Blog;
export async function getServerSideProps(context) {
  const DoNotChange = "Blog";
  try {
    const res = await axios.get(
      `https://portal.themediagale.com/api/static-pages-metas?filters[DoNotChange][$eq]=${DoNotChange}&populate=*`
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
