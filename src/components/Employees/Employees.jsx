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

const Employees = () => {
  const [card, setCard] = useState([]);
  const [imageBatch, setImageBatch] = useState([]);

  function calculateImageLayout(images) {
    let availableSlots = 6;
    let currentBatch = [];
    let allBatches = [];

    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      let imageSizeValue = 0;

      switch (image.attributes.imageSize) {
        case "oneByThree":
          imageSizeValue = 1;
          break;
        case "twoByThree":
          imageSizeValue = 2;
          break;
        case "threeByThree":
          imageSizeValue = 3;
          break;
        default:
          break;
      }

      if (availableSlots - imageSizeValue >= 0) {
        currentBatch.push(image);
        availableSlots -= imageSizeValue;
      } else {
        allBatches.push(currentBatch);
        currentBatch = [image]; // start a new batch with the current image
        availableSlots = 6 - imageSizeValue; // reset available slots for the new batch
      }

      if (i === images.length - 1) {
        // if we're on the last image, push the current batch
        allBatches.push(currentBatch);
      }
    }

    return allBatches;
  }
  useEffect(() => {
    axios
      .get(
        "https://tmg-strapi-w6pu3.ondigitalocean.app/api/employees?populate=*"
      )
      .then((res) => {
        const sortedImages = [...res.data.data].sort((a, b) => {
          return a.attributes.imageNumber - b.attributes.imageNumber;
        });
        setCard(sortedImages);
        setImageBatch(calculateImageLayout(sortedImages));
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return (
    <section className="py-10 md:py-20 pagePaddingX max-w-7xl mx-auto select-none">
      <div>
        <div className="block md:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            initialSlide={0}
            // navigation={true}
            navigation={{
              nextEl: ".swiper-button-next-custom-1",
              prevEl: ".swiper-button-prev-custom-1",
            }}
            modules={[Navigation]}
            className="swiper"
          >
            <div className="flex flex-col items-center justify-between">
              {card.map((member, i) => {
                return (
                  <SwiperSlide key={i + 99800}>
                    <Image
                      width={500}
                      height={513}
                      src={`https://beta.themediagale.com/public_images/employee/${member?.attributes?.image}.png`}
                      layout="fixed"
                      loading="eager"
                      decoding="sync"
                      className="w-full object-cover h-[513px]"
                      alt={member?.attributes?.imageAlt}
                      objectFit="cover"
                    />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
        <div className="hidden md:block">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            initialSlide={0}
            // navigation={true}
            navigation={{
              nextEl: ".swiper-button-next-custom-1",
              prevEl: ".swiper-button-prev-custom-1",
            }}
            modules={[Navigation]}
            className="swiper"
          >
            {imageBatch.map((memberGroup, index) => (
              <SwiperSlide key={index + 99900}>
                <div>
                  <div className="grid grid-rows-2 grid-cols-3 gap-4 gridContainerHeight">
                    {memberGroup.map((member, i) => {
                      let gridStyles = {};

                      switch (member.attributes.imageSize) {
                        case "oneByThree":
                          gridStyles = {
                            gridColumn: "span 1",
                            gridRow: "span 1",
                          };
                          break;
                        case "twoByThree":
                          if (index % 3 === 0) {
                            gridStyles = {
                              gridColumn: "span 2",
                              gridRow: "span 1",
                            };
                          } else {
                            gridStyles = {
                              gridColumn: "span 2",
                              gridRow: "span 1",
                            };
                          }
                          break;
                        case "threeByThree":
                          gridStyles = {
                            gridColumn: "span 3",
                            gridRow: "span 2",
                          };
                          break;
                        default:
                          break;
                      }

                      return (
                        <div
                          className="overflow-hidden"
                          key={i + 99700}
                          style={gridStyles}
                        >
                          <Image
                            width={416}
                            height={330}
                            src={`https://beta.themediagale.com/public_images/employee/${member?.attributes?.image}.png`}
                            layout="responsive"
                            loading="eager"
                            decoding="sync"
                            className="w-full overflow-hidden"
                            alt={member?.attributes?.imageAlt}
                            objectFit="contain"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex flex-row pt-4 md:pt-10 ">
        <div className="mr-6 swiper-button-prev-custom-1 h-[50px] w-[50px] md:h-[70px] md:w-[70px] rounded-full cursor-pointer gradient-button-bgBlack image-animation">
          <Image
            width={500}
            height={100}
            src={arrowBack.src}
            alt="team member"
            className="w-[18px] md:w-[22px]"
          />
        </div>
        <div className="swiper-button-next-custom-1 h-[50px] w-[50px] md:h-[70px] md:w-[70px] rounded-full cursor-pointer gradient-button-bgBlack image-animation">
          <Image
            width={500}
            height={100}
            src={arrowNext.src}
            alt="team member"
            className="w-[18px] md:w-[22px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Employees;
