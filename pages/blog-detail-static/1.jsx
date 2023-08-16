/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../src/components/header/Header";
import Section1 from "../../src/components/works/section1";
import Section2Image from "../../src/components/works/section2Image";
import axios from "axios";
import Section3Image from "../../src/components/works/section3Image";
import Section4card from "../../src/components/works/section4card";
import Footer from "../../src/components/footer/Footer";
import blog1 from "../../src/assets/images/blog-1.png";
import Image from "../../src/components/Image/Image";
const blogsStatic = [
  {
    title: "Migrating to Linear 101",
    sub_title:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    blog_featured_image: blog1,
    blog_content:
      "                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime modi assumenda officiis labore, quam ab quia quos delectus eligendi nihil odit deserunt cum rem corrupti expedita voluptatem optio! Maxime vel optio, nobis, necessitatibus magnam architecto officiis minima tempora inventore perferendis sunt dolorem. Culpa provident tempore sunt, aliquam perferendis non repudiandae earum quibusdam molestias id adipisci at temporibus dolorum labore mollitia voluptatem quis quo in! Ipsam ad dignissimos corporis soluta cupiditate minima, laboriosam, commodi aliquid quibusdam ratione blanditiis quam molestiae assumenda.    ",
  },
];
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
    axios
      .get(
        `https://tmg-strapi-w6pu3.ondigitalocean.app/api/blogs/${id}?populate=*`
      )
      .then((res) => {
        setWork(res.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return (
    <>
      <section className="pt-7 md:pt-20 ">
        <Header />
        <div className="my-8 md:my-10  px-10 md:px-28">
          <div className="headingBlack">{blogsStatic[0].title}</div>
          <span className="mt-1 nextLineSpan" />
          <p>{blogsStatic[0].sub_title}</p>

          <div className="w-full  mb-6 md:mb-20"></div>
          <div className="w-full my-4 md:my-10 xl:-ml-3">
            <Image
              width={500}
              height={300}
              src={blogsStatic[0].blog_featured_image.src}
              alt="blog image"
              className="rounded-3xl w-5/6 h-[550px] object-cover mx-auto max-w-7xl"
            />
          </div>
          <div className="max-w-2xl w-full mx-auto">
            <div className="text-orange_theme-400 heading">Introduction.</div>
            <p className="blackDescriptionText pb-7 md:pb-20  mt-3">
              Did you know that if the internet was a country, it would be the
              worlds 7th biggest polluter, emitting 1.6 billion annual tons in
              greenhouse gas emissions? As a planet, we are currently facing
              unprecedented levels of climate change, and the internet plays a
              sizeable part in this problem. From websites to cryptocurrencies,
              it consumes large amounts of electricity in data centres, telecom
              networks, and end-user devices. Find out how web technology can
              still be efficient with low-carbon digital products and services.
            </p>

            <p className="blackDescriptionText pb-7 md:pb-20">
              {blogsStatic[0].blog_content}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetail;
