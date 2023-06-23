/* eslint-disable */
import Header from "../src/components/header/Header";
import kotaLogo from "../src/assets/images/Blog-pic.png";
import bannerImage from "../src/assets/images/header-image-1.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import {blogs} from "../src/helpers/Helpers";
import Card from "../src/components/card/Card";
import CardStatic from "../src/components/card/CardStatic";
import Footer from "../src/components/footer/Footer";
import blog1 from "../src/assets/images/blog-1.png";
import PageWrapper from "../src/components/PageWrapper/PageWrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "../src/components/Image/Image";
import GradientButton from "../src/components/button/GradientButton";
import HeroContainer from "../src/components/containers/HeroContainer";
// import CardStatic from "../src/components/card/CardStatic";
// {console.log("Work",blogsData)}
const blogsStatic = [
  {
    title: "Migrating to Linear 101",
    sub_title:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Heres how to get started.",
    blog_featured_image: blog1,
    blog_content: "",
  },
];
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/blogs?populate=*")
      .then((res) => {
        // console.log("Res Blogs", res.data.data);
        setBlogs(res.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
        // setBlogs(blogsStatic)
      });
  }, []);
  return (
    <>
      <PageWrapper>
        <section className="w-full">
          <HeroContainer imageSrc={kotaLogo.src}>
            <div className="w-full">
              <h4 className="mb-6 heading-style font-bold leading-tight">
                News, insights, and creative culture from TMG.
              </h4>
              <p className="text-style">
                Because it should never just be work, it should be
                <span className="gradientText"> a work of art</span>{" "}
              </p>
              <div className="mt-10">
                <GradientButton
                  text="Book Free Consultation Today"
                  route="/contact"
                />
              </div>
            </div>
          </HeroContainer>

          <div className="px-10 md:px-10 lg:px-14 xl:px-20 2xl:px-32 pt-20">
            <a href="" className="relative blog-banner w-full h-full">
              {/* <Image decoding="async" width={500} height={300} src={bannerImage.src} alt="banner" className="w-full h-full object-cover" />
                    <br/> */}
              <Image
                src={bannerImage}
                alt="banner"
                width={1300}
                height={550}
                layout="responsive"
                objectFit="cover"
              />

              <div className="absolute left-10 bottom-10">
                <span className="gradientText inline-block text-sm uppercase tracking-[1.5px] font-circular-medium pb-5">
                  Featured News
                </span>
                <h3 className="text-white max-w-[55%] font-sofia-bold text-[50px] leading-none">
                  5 examples of great E-Commerce product pages.
                </h3>
              </div>
            </a>
          </div>
          <div className="mt-4">
            <Tabs className="p-20 px-32 tabs-wrapper blog-tabs-wrapper w-full">
              {/* <TabList>
                             <Tab>All</Tab>
                             <Tab>Expertise</Tab>
                             <Tab>Inspiration</Tab>
                             <Tab>Our Work</Tab>
                             <Tab>Studio</Tab>
                    </TabList> */}
              {blogs == "" ? (
                <TabPanel>
                  {" "}
                  <CardStatic item={blogsStatic} />
                </TabPanel>
              ) : (
                blogs.map((item, index) => (
                  <TabPanel key={index}>
                    <Card item={blogs} />
                  </TabPanel>
                ))
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
