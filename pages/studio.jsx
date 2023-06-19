/* eslint-disable */
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";
import Header from "../src/components/header/Header";
import kotaLogo from "../src/assets/images/agency.png";
import galleryImage1 from "../src/assets/images/studio1-1.png";
import galleryImage2 from "../src/assets/images/studio2-1.png";
import galleryImage3 from "../src/assets/images/studio3-1.png";
import galleryImage4 from "../src/assets/images/studio4b.png";
import galleryImage5 from "../src/assets/images/studio5-1.png";
import galleryImage6 from "../src/assets/images/studio6.png";
// import mainImage from "../src/assets/svg/home_work_logo.svg";
import mainImage from "../src/assets/images/team.png";
import teamMember from "../src/assets/images/james-h.png";
import HeadingThree from "../src/components/headings/HeadingThree";
import Footer from "../src/components/footer/Footer";
import member1 from "../src/assets/images/member1.png";
import member2 from "../src/assets/images/member2.png";
import member3 from "../src/assets/images/member3.png";
import member4 from "../src/assets/images/member4.png";
import member5 from "../src/assets/images/member5.png";
import member6 from "../src/assets/images/member6.png";
import Image from "../src/components/Image/Image";
import GradientButton from "../src/components/button/GradientButton";
const Studio = () => {
  return (
    <>
      <section className="pt-20 mb-16">
        <Header />
      </section>

      {/* <section className="grid grid-cols-2 px-28 gap-4 pt-12 items-center">
                <div className="w-full text-center">
                    <Image decoding="async" width={500} height={300} src={kotaLogo.src} alt="kota canvas" loading="lazy" className="max-w-full" />
                </div>
                <div className="w-full">
                    <h4 className="mb-6 text-7xl font-bold leading-tight">A boutique team of designers, developers & strategists.</h4>
                    <p className="text-black font-medium text-[1.16rem]">
                        Our team of experts is made up of creatives with technical know-how, strategists who think outside the box, and developers who push innovation. And then there’s Buddy, the French Bulldog.
                    </p>
                </div>
            </section> */}
      <section className="grid grid-cols-2 px-20 gap-4 pt-12 items-center">
        <div className="w-full text-center">
          <Image
            width={500}
            height={300}
            src={kotaLogo.src}
            alt="kota canvas"
            loading="lazy"
            className="w-[410px] h-[237px]"
          />
        </div>
        <div className="w-full">
          <h4 className="mb-6 heading-style font-bold leading-tight">
            Lets make your{" "}
            <span className="gradient-text"> digital dreams a reality.</span>
          </h4>
          <p className="text-style">
            We create the best customer experiences across your brands journey,
            transforming the way brands connect with their audiences by be
            <span className="gradient-text">
              {" "}
              crafting engaging and impactful digital experiences that inspire
              action and drive growth.
            </span>{" "}
          </p>
          <GradientButton
            text="Book Free Consultation Today"
            route="/contact"
          />
        </div>
      </section>
      <section className="mt-20">
        <div className="relative">
          <video
            className="studio-video"
            autoPlay="true"
            loop="true"
            controls="false"
          >
            <source src="/video/hp.mp4" type="video/mp4" />
            <source src="/video/hp.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-[50%] left[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
            <div className="play-button border-4 border-white rounded-full w-[140px] h-[140px]">
              <svg
                className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                width="25"
                height="25"
                viewBox="0 0 26.139 37.458"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Path_184"
                  data-name="Path 184"
                  d="M-1422.6-322.813v37.458l26.139-19.137Z"
                  transform="translate(1422.604 322.813)"
                  fill="#fff"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center flex-col items-center">
        <h1 className=" text-[45px] text-center font-sofia-bold font-bold leading-tight relative top-10">
          Innovators by heart, <br />
          <span className="gradient-text">Creators</span> by mind.
        </h1>
        <p className=" mb-5 text-center mt-14 max-w-4xl mx-10 text-style ">
          With a team of smart and passionate professionals, our agency
          specializes in all elements of digital marketing, from social media
          management to search engine optimization. We are always on the cutting
          edge of industry trends and innovations, ensuring that our clients
          stay ahead of the competition and get the greatest results possible.
        </p>
        {/* <p className="paragraph mb-10">
                    By soaking up culture, sharing new ideas and staying on the pulse of the latest trends, we develop brands, design websites and deliver campaigns that that break the mould, and fight back against boring.
                </p> */}
        <GradientButton text="View Our Services" route="/services" />
      </div>

      {/* <section className="pt-20 px-28 max-w-[80%]">

                
            </section> */}
      <section className="mt-20 px-28">
        <div className="masonry-gallery columns-2 md:columns-3 lg:columns-3">
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
      <section className="pt-36  bg-zinc-800 mt-60 pb-10">
        <div className="flex items-center justify-between pb-20">
          <div className="w-[47%]">
            <Image
              width={500}
              height={300}
              src={mainImage.src}
              className="w-[462px] h-[450px] mx-auto"
              alt="work images"
            />
          </div>
          <div className="w-[47%] pt-64 flex justify-center">
            <div className="max-w-md">
              <HeadingThree
                cssClass="text-white text-base leading-relaxed"
                title="You will find our team working across Creative Web Design, Web Development, Branding, and Digital Marketing."
              />
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          initialSlide={1}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {/* <SwiperSlide>
                        <div className="">
                            <figure className="">
                                <Image decoding="async" width={500} height={300} src={teamMember.src} alt="team member" />
                                <figcaption>
                                    <p className="text-white">ED</p>
                                    <p className="text-white">— Design Director</p>
                                </figcaption>
                            </figure>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="">
                            <figure className="">
                                <Image decoding="async" width={500} height={300} src={teamMember.src} alt="team member" />
                                <figcaption>
                                    <p className="text-white">ED</p>
                                    <p className="text-white">— Design Director</p>
                                </figcaption>
                            </figure>
                        </div>
                    </SwiperSlide> */}
          <SwiperSlide>
            {" "}
            <div className="">
              <figure className="">
                <Image
                  width={500}
                  height={300}
                  src={member1.src}
                  alt="team member"
                  className="w-[313px] h-[440px]"
                />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <figure className="">
                <Image
                  width={500}
                  height={300}
                  src={member2.src}
                  alt="team member"
                  className="w-[313px] h-[440px]"
                />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <figure className="">
                <Image
                  width={500}
                  height={300}
                  src={member3.src}
                  alt="team member"
                  className="w-[313px] h-[440px]"
                />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <figure className="">
                <Image
                  width={500}
                  height={300}
                  className="w-[313px] h-[440px]"
                  src={member4.src}
                  alt="team member"
                />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <figure className="">
                <Image
                  width={500}
                  height={300}
                  className="w-[313px] h-[440px]"
                  src={member5.src}
                  alt="team member"
                />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <figure className="">
                <Image
                  width={500}
                  className="w-[313px] h-[440px]"
                  height={300}
                  src={member6.src}
                  alt="team member"
                />
              </figure>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </section>
      <Footer />
    </>
  );
};
export default Studio;
