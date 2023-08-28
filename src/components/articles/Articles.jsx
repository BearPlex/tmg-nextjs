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
import { convertStringForImage } from "../../helpers/Helpers";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const router = useRouter();
  useEffect(() => {
    axios
      .get("https://tmg-strapi-w6pu3.ondigitalocean.app/api/blogs?populate=*")
      .then((res) => {
        setArticles(res.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  const pushWork = (id) => {
    router.push(`/blog-detail/${id}`);
    // router.push(`/blog-detail/7`);
  };

  return (
    <div className="h-auto pagePaddingX pb-10 md:pb-20 max-w-7xl mx-auto xl:px-0 xl:pl-0 select-none">
      <div className="mb-6 md:mb-20 largeHeading blackHeadingText">
        Latest Articles
      </div>
      <div className="">
        <div className="h-auto w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={false}
            initialSlide={0}
            // navigation={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
              1556: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation]}
            className="swiper"
          >
            {articles.map((article, index) => (
              <SwiperSlide key={index + 700}>
                <div
                  onClick={() => pushWork(article?.attributes?.slug)}
                  key={article.id}
                  className="mx-auto mt-10  white group cursor-pointer hover:bg-[#EE245F] bg-opacity-0 hover:bg-opacity-50 relative bg-transparent duration-300"
                >
                  <div className="relative h-full">
                    <div className="h-full w-full overflow-hidden">
                      <Image
                        width={500}
                        height={100}
                        className="h-full w-full object-cover object-center  group-hover:opacity-50 duration-300 transition-in-out overflow-hidden scale-100 group-hover:scale-110"
                        alt="Product Image"
                        src={`https://beta.themediagale.com/public_images/blogs/${
                          article.attributes.title &&
                          article.attributes.title !== ""
                            ? convertStringForImage(article.attributes.title)
                            : "Women-Rise"
                        }.png`}
                      />
                      <div className="absolute inset-0 bg-[#EE245F] opacity-0 group-hover:bg:opacity-50 duration-300 bg-transparent"></div>
                    </div>
                  </div>
                  <div className="pt-6  md:pt-8 relative group group-hover:ml-2 duration-300 transition-in-out">
                    <p className="paragraph  text-[#EE2760] group-hover:blackHeading">
                      {article.attributes.sub_title}
                    </p>
                    <p className="smallHeading font-bold blackHeading group-hover:text-white pt-2">
                      {article.attributes.title}
                    </p>
                    <div>
                      <p className="pb-4 pt-3 paragraph blackDescriptionText group-hover:text-white">
                        {article.attributes.cardText}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-row pt-7 md:pt-16 ">
          <div className="mr-6 swiper-button-prev-custom h-[50px] w-[50px] md:h-[70px] md:w-[70px] rounded-full cursor-pointer gradient-button-bgBlack">
            <Image
              width={500}
              height={100}
              src={arrowBack.src}
              alt="team member"
              className="w-[18px] md:w-[22px]"
            />
          </div>
          <div className="swiper-button-next-custom h-[50px] w-[50px] md:h-[70px] md:w-[70px] rounded-full cursor-pointer gradient-button-bgBlack">
            <Image
              width={500}
              height={100}
              src={arrowNext.src}
              alt="team member"
              className="w-[18px] md:w-[22px]"
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
