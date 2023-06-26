/* eslint-disable */
import { articles } from "../../helpers/Helpers";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import GradientButton from "../button/GradientButton";
import { useRouter } from "next/router";
import Image from "../Image/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
import arrowBack from "../../assets/images/arrowBack.png";
import arrowNext from "../../assets/images/arrowNext.png";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  // {console.log("Work",blogsData)}
  const router = useRouter();
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/blogs?populate=*")
      .then((res) => {
        console.log("Res Blogs", res.data.data);
        setArticles(res.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  const pushWork = (id) => {
    router.push(`/blog-detail/${id}`);
    // console.log("Id", id);
  };
  return (
    <div className="h-auto pagePaddingX pb-7 md:pb-20 3xl:max-w-7xl 3xl:mx-auto 3xl:px-0 3xl:pl-0">
      <div className="mb-9 md:mb-20 headingBlack">Latest Articles</div>
      <div className="">
        <div className="h-auto w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={false}
            initialSlide={0}
            navigation={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
              1556: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation]}
            className="swiper"
          >
            {articles.map((article, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <figure className="">
                    <div
                      className="border border-black h-full group overflow-hidden hover:bg-pink-400"
                      onClick={() => pushWork(article.id)}
                      key={article.id}
                    >
                      <div className="h-min overflow-hidden">
                        <Image
                          width={500}
                          height={300}
                          src={`http://localhost:1337${article.attributes.blog_featured_image.data.attributes.url}`}
                          alt="blog images"
                          className="object-cover overflow-hidden scale-100 group-hover:scale-110"
                        />
                      </div>
                      <div className="py-9 px-6">
                        {
                          <span className="pink-color font-medium text-base uppercase inline-block  group-hover:text-black">
                            {article.attributes.title}
                          </span>
                        }
                        <div className="largeParagraph mt-4 group-hover:text-white">
                          {article.attributes.sub_title}
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-row pt-7 md:pt-20 ">
          <div className="mr-6 swiper-button-prev-custom flex items-center justify-center bg-transparent w-[90px] h-[90px] border-[2px] border-[#EE2760] rounded-full cursor-pointer">
            {`<-`}
            <Image
              width={500}
              height={300}
              src={arrowBack.src}
              alt="team member"
              className="w-[22px]"
            />
          </div>
          <div className="swiper-button-next-custom flex items-center justify-center bg-transparent w-[90px] h-[90px] border-[2px] border-[#EE2760] rounded-full cursor-pointer ">
            {`->`}
            <Image
              width={500}
              height={300}
              src={arrowNext.src}
              alt="team member"
              className="w-[22px]"
            />
          </div>
        </div>
      </div>
      <div className="text-center w-full mt-10 md:mt-28">
        <GradientButton text="View All Blog Posts" route="/blog" />
      </div>
    </div>
  );
};
export default Articles;
