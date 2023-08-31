import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import SwiperCore, { Navigation } from "swiper";
import Image from "../../components/Image/Image";
import arrowBack from "../../assets/images/arrowBack.png";
import arrowNext from "../../assets/images/arrowNext.png";
import galleryImage1 from "../../assets/images/agency-staff-1.png";
import galleryImage2 from "../../assets/images/agency-staff-2.png";
import galleryImage3 from "../../assets/images/agency-staff-3.png";
import galleryImage4 from "../../assets/images/agency-staff-4.png";
import galleryImage5 from "../../assets/images/agency-staff-5.png";

const EmployeeCards = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://tmg-strapi-w6pu3.ondigitalocean.app/api/employee-cards?populate=*"
      )
      .then((res) => {
        const sortedImages = [...res.data.data].sort((a, b) => {
          return a.attributes.cardNumber - b.attributes.cardNumber;
        });
        setCard(sortedImages);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return (
    <div className="flex flex-col h-auto max-w-7xl mx-auto select-none">
      <div className="w-full pagePaddingX ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
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
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
          className="swiper"
        >
          {card.map((member, index) => (
            <SwiperSlide key={index + 200}>
              <div className="">
                <figure className="image-animation h-[100%]">
                  <div
                    key={member.id}
                    className="mx-auto mt-10 imageRounded white group hover:bg-[#EE245F] bg-opacity-0 hover:bg-opacity-50 relative bg-transparent duration-300"
                  >
                    <div className="relative h-full">
                      <div className="h-full w-full overflow-hidden">
                        <Image
                          width={400}
                          height={100}
                          src={`https://beta.themediagale.com/public_images/employeeCard/${member?.attributes?.image}.png`}
                          layout="responsive"
                          loading="eager"
                          decoding="sync"
                          className="w-full overflow-hidden"
                          alt={member?.attributes?.imageAlt}
                          objectFit="fill"
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            width: "100%",
                            height: "25%",
                            background: "#7a91e1",
                          }}
                          className="flex items-center justify-center px-4 roundedBImageCover"
                        >
                          <div className="w-full flex flex-col justify-between">
                            <div className="">
                              <p className="text-white mb-4 md:mb-1 text-[20px] md:text-[13px] lg:text-[16px]">
                                {member?.attributes?.employeeName}
                              </p>
                            </div>
                            <div>
                              <p className="text-white  text-[20px] md:text-[13px] lg:text-[16px]">
                                {member?.attributes?.employeeDesignation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-row items-end w-full mb-10 pt-5 md:pt-10 pl-4 md:pl-10 lg:pl-14 xl:pl-10 select-none">
        <div className="mr-6 swiper-button-prev-custom flex items-center justify-center bg-transparent h-[50px] w-[50px] md:h-[70px] md:w-[70px] border-[2px] border-[#EE2760] rounded-full cursor-pointer image-animation">
          <Image
            width={500}
            height={300}
            src={arrowBack.src}
            alt="team member"
            className="w-[18px] md:w-[22px]"
          />
        </div>
        <div className="swiper-button-next-custom flex items-center justify-center bg-transparent h-[50px] w-[50px] md:h-[70px] md:w-[70px] border-[2px] border-[#EE2760] rounded-full cursor-pointer image-animation">
          <Image
            width={500}
            height={300}
            src={arrowNext.src}
            alt="team member"
            className="w-[18px] md:w-[22px]"
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeCards;
