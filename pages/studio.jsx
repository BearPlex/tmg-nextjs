/* eslint-disable */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
import React, { useRef, useState } from "react";

import kotaLogo from "../src/assets/images/agency.png";
import arrowBack from "../src/assets/images/arrowBack.png";
import arrowNext from "../src/assets/images/arrowNext.png";
import galleryImage1 from "../src/assets/images/studio1-1.png";
import galleryImage2 from "../src/assets/images/studio2-1.png";
import galleryImage3 from "../src/assets/images/studio3-1.png";
import galleryImage4 from "../src/assets/images/studio4b.png";
import galleryImage5 from "../src/assets/images/studio5-1.png";
import galleryImage6 from "../src/assets/images/studio6.png";
// import mainImage from "../src/assets/svg/home_work_logo.svg";
import mainImage from "../src/assets/images/team.png";
import teamMember from "../src/assets/images/james-h.png";
import Clients from "../src/components/clients/Clients";
import Footer from "../src/components/footer/Footer";
import member1 from "../src/assets/images/member1.png";
import member2 from "../src/assets/images/member2.png";
import member3 from "../src/assets/images/member3.png";
import member4 from "../src/assets/images/member4.png";
import member5 from "../src/assets/images/member5.png";
import member6 from "../src/assets/images/member6.png";
import Image from "../src/components/Image/Image";
import GradientButton from "../src/components/button/GradientButton";
import PageWrapper from "../src/components/PageWrapper/PageWrapper";
import HeroContainer from "../src/components/containers/HeroContainer";
import TextWithVideoContainer from "../src/components/containers/TextWithVideoContainer";

const Studio = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const memberImages = [member1, member2, member3, member4, member5, member6];
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <PageWrapper>
        <section className="w-full">
          <HeroContainer imageSrc={kotaLogo.src}>
            <div className="w-full">
              <h4 className="mb-2 md:mb-6  headingBlack font-bold leading-tight capitalize">
                Lets make your{" "}
                <span className="gradientText"> digital dreams a reality.</span>
              </h4>
              <p className="paragraphBlack">
                We create the best customer experiences across your brands
                journey, transforming the way brands connect with their
                audiences by be
                <span className="gradientText">
                  {" "}
                  crafting engaging and impactful digital experiences that
                  inspire action and drive growth.
                </span>{" "}
              </p>
              <div className="mt-4 md:mt-10">
                <GradientButton
                  text="Book Free Consultation Today"
                  route="/contact"
                />
              </div>
            </div>
          </HeroContainer>
          <section className="mt-9 md:mt-20">
            <TextWithVideoContainer
              cssClass="md:w-[100%]"
              childcssClass="hidden"
            />
          </section>
          <div className="flex mt:4 md:mt-10 justify-center flex-col items-center">
            <h1 className=" headingBlack text-center font-sofia-bold font-bold leading-tight relative top-10">
              Innovators by heart, <br />
              <span className="gradientText">Creators</span> by mind.
            </h1>
            <p className=" mb-5 text-center mt-14 max-w-4xl paragraphBlack ">
              With a team of smart and passionate professionals, our agency
              specializes in all elements of digital marketing, from social
              media management to search engine optimization. We are always on
              the cutting edge of industry trends and innovations, ensuring that
              our clients stay ahead of the competition and get the greatest
              results possible.
            </p>
            <GradientButton text="View Our Services" route="/services" />
          </div>

          <section className="mt-9 md:mt-20 pagePaddingX">
            <div className="masonry-gallery columns-1 md:columns-2 lg:columns-3">
              <div className="mb-4">
                <Image
                  width={500}
                  height={300}
                  alt="galleryImage1"
                  className="h-full object-cover w-full"
                  src={galleryImage1.src}
                />
              </div>
              <div className="mb-4">
                <Image
                  width={500}
                  height={300}
                  alt="galleryImage4"
                  className="h-full object-cover w-full"
                  src={galleryImage4.src}
                />
              </div>
              <div className="mb-4">
                <Image
                  width={500}
                  height={300}
                  alt="galleryImage2"
                  className="h-full object-cover w-full"
                  src={galleryImage2.src}
                />
              </div>
              <div className="mb-4">
                <Image
                  width={500}
                  height={300}
                  alt="galleryImage5"
                  className="h-full object-cover w-full"
                  src={galleryImage5.src}
                />
              </div>
              <div className="mb-4">
                <Image
                  width={500}
                  height={300}
                  alt="galleryImage3"
                  className="h-full object-cover w-full"
                  src={galleryImage3.src}
                />
              </div>
              <div className="mb-4">
                <Image
                  width={500}
                  height={300}
                  alt="galleryImage2"
                  className="h-full object-cover w-full"
                  src={galleryImage2.src}
                />
              </div>
            </div>
          </section>
          <section className="pt-14 md:pt-36 h-auto bgBlack md:mt-60 ">
            <div className="flex flex-col md:flex-row items-center pagePaddingX justify-between componentsMainGap pb-10 md:pb-20">
              <div className="w-full md:w-[50%]">
                <Image
                  width={500}
                  height={300}
                  src={mainImage.src}
                  alt="work images"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="w-full md:w-[50%] flex justify-center">
                <div className="largeHeading whiteHeadingText leading-relaxed">
                  Our team is 360 degree working in every aspect of digital
                  marketing.
                </div>
              </div>
            </div>

            <div className="flex flex-col h-auto">
              <div className="w-full pagePaddingX ">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
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
                  {memberImages.map((member, index) => (
                    <SwiperSlide key={index + 200}>
                      <div className="">
                        <figure className="">
                          <Image
                            width={500}
                            height={300}
                            src={member.src}
                            alt="team member"
                            layout="responsive"
                            objectFit="cover"
                          />
                        </figure>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="flex flex-row items-end w-full mb-10 pt-10 md:pt-20 pl-10 md:pl-10 lg:pl-14 xl:pl-20 2xl:pl-32">
                <div className="mr-6 swiper-button-prev-custom flex items-center justify-center bg-transparent w-[90px] h-[90px] border-[2px] border-[#EE2760] rounded-full cursor-pointer">
                  <Image
                    width={500}
                    height={300}
                    src={arrowBack.src}
                    alt="team member"
                    className="w-[22px]"
                  />
                </div>
                <div className="swiper-button-next-custom flex items-center justify-center bg-transparent w-[90px] h-[90px] border-[2px] border-[#EE2760] rounded-full cursor-pointer ">
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
          </section>
        </section>
        <Clients />
        <Footer />
      </PageWrapper>
    </>
  );
};
export default Studio;
