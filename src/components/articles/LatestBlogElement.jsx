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
const LatestBlogElement = () => {
  const [articles, setArticles] = useState([]);
  const router = useRouter();
  useEffect(() => {
    axios
      .get("https://app.themediagale.com/api/blogs?populate=*")
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
    <div className="h-auto pagePaddingX pb-10 md:pb-20 max-w-7xl mx-auto select-none">
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
                        src={article.attributes.cardImage.data.attributes.url}
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        width: "100%",
                        height: "30%",
                        background: "rgba(255, 255, 255, 0.30)",
                        backdropFilter: "blur(12px)",
                      }}
                      className="flex items-center justify-center px-4"
                    >
                      <div className="w-full flex flex-row justify-between">
                        <div className="flex flex-col">
                          <p className="text-white">
                            {article.attributes.authorName}
                          </p>
                          <p className="text-white">
                            {article.attributes.dateAdded}
                          </p>
                        </div>
                        <div>
                          <p className="text-white">
                            {article.attributes.authorJobTitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6  md:pt-8 relative group group-hover:ml-2 duration-300 transition-in-out">
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
    </div>
  );
};
export default LatestBlogElement;
