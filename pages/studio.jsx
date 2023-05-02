import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";
import Header from "../src/components/header/Header";
import kotaLogo from "../src/assets/images/Kota_logo.png";
import galleryImage1 from '../src/assets/images/studio1-1.png';
import galleryImage2 from '../src/assets/images/studio2-1.png';
import galleryImage3 from '../src/assets/images/studio3-1.png';
import galleryImage4 from '../src/assets/images/studio4b.png';
import galleryImage5 from '../src/assets/images/studio5-1.png';
import galleryImage6 from '../src/assets/images/studio6.png';
import mainImage from "../src/assets/svg/home_work_logo.svg";
import teamMember from '../src/assets/images/james-h.png';
import HeadingThree from "../src/components/headings/HeadingThree";

const Studio = () => {
    return(
        <section className="pt-20">
            <Header />
            <section className="grid grid-cols-2 px-28 gap-4 pt-12 items-center">
                <div className="w-full text-center">
                    <img src={kotaLogo.src} alt="kota canvas" loading="lazy" className="max-w-full" />
                </div>
                <div className="w-full">
                    <h4 className="mb-6 text-7xl font-bold leading-tight">A boutique team of designers, developers & strategists.</h4>
                    <p className="text-black font-medium text-[1.16rem]">
                        Our team of experts is made up of creatives with technical know-how, strategists who think outside the box, and developers who push innovation. And then there’s Buddy, the French Bulldog.
                    </p>
                </div>
            </section>
            <section className="mt-20">
                <div className="relative">
                    <video className="studio-video" autoPlay="true" loop="true"  controls="false">
                        <source src="/video/hp.mp4" type="video/mp4" />
                        <source src="/video/hp.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-[50%] left[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                        <div className="play-button border-4 border-white rounded-full w-[140px] h-[140px]">
                            <svg className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" width="25" height="25" viewBox="0 0 26.139 37.458" xmlns="http://www.w3.org/2000/svg">
                                <path id="Path_184" data-name="Path 184" d="M-1422.6-322.813v37.458l26.139-19.137Z" transform="translate(1422.604 322.813)" fill="#fff">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-20 px-28 max-w-[80%]">
                <h1 className="max-w-[25.625rem] text-[45px] font-sofia-bold font-bold leading-tight mb-10">Artists by nature. Rebels by choice.</h1>
                <p className="paragraph mb-5">
                    We’re a team of talented creatives who live and breathe great design. We’re not just coders who take instructions, we’re artists who take inspiration from the wider creative world of music, film and the arts.
                </p>
                <p className="paragraph mb-10">
                    By soaking up culture, sharing new ideas and staying on the pulse of the latest trends, we develop brands, design websites and deliver campaigns that that break the mould, and fight back against boring.
                </p>
                <button className="max-w-[205px] h-14 w-full border-2 border-pink-400 text-pink-400 font-circular-medium font-medium text-xs rounded-full inline-flex items-center justify-center uppercase hover:text-white hover:bg-pink-400 hover:transition-all">View Our Services</button>
            </section>
            <section className="mt-20 px-28">
                <div className="masonry-gallery columns-2 md:columns-3 lg:columns-3">
                    <div className="mb-4">
                        <img className="h-full object-cover w-full" src={galleryImage1.src} />
                    </div>
                    <div className="mb-4">
                        <img className="h-full object-cover w-full" src={galleryImage4.src} />
                    </div>
                    <div className="mb-4">
                        <img className="h-full object-cover w-full" src={galleryImage2.src} />
                    </div>
                    <div className="mb-4">
                        <img className="h-full object-cover w-full" src={galleryImage5.src} />
                    </div>
                    <div className="mb-4">
                        <img className="h-full object-cover w-full" src={galleryImage3.src} />
                    </div>
                    <div className="mb-4">
                        <img className="h-full object-cover w-full" src={galleryImage6.src} />
                    </div>
                </div>
            </section>
            <section className="pt-36 bg-zinc-800 mt-60">
                <div className="flex items-center justify-between">
                    <div className="w-[47%]">
                        <img src={mainImage.src} className="w-96 mx-auto" alt="work images" />
                    </div>
                    <div className="w-[47%] pt-64 flex justify-center">
                        <div className="max-w-md">
                            <HeadingThree cssClass="text-white text-base leading-relaxed" title="You will find our team working across Creative Web Design, Web Development, Branding, and Digital Marketing." />
                        </div>
                    </div>
                </div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="">
                            <figure className="">
                                <img src={teamMember.src} alt="team member" />
                                <figcaption>
                                    <p>ED</p>
                                    <p>— Design Director</p>
                                </figcaption>
                            </figure>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>

            </section>
        </section>
    )
}
export default Studio;