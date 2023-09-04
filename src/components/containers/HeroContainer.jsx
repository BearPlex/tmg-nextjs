import { useEffect } from "react";
import Image from "../Image/Image";
import group from "../../assets/images/Group.png";
import clientLogos from "../../assets/images/footer-logos.png";
import TmgLogo from "../../assets/images/hero-image-3x.png";
const HeroContainer = ({
  landingPage = false,
  imageSrc,
  blog = false,
  agenct = false,
  children,
}) => {
  return (
    <section
      className={`w-full max-w-7xl mx-auto z-50 ${
        landingPage ? "md:h-[75vh]" : "md:h-[55vh]"
      }`}
    >
      <div className="h-full flex items-center pagePaddingX">
        <div className="w-full flex items-center componentsMainGap flex-col md:flex-row">
          <div className="text-center w-full h-auto">
            {landingPage ? (
              <div className="hover-container">
                <div className="content">
                  {/* <div className="lens"></div> */}
                  <div className="hidden md:block">
                    <Image
                      width={0}
                      height={0}
                      src={imageSrc}
                      alt="kota canvas"
                      loading="lazy"
                      layout="responsive"
                      objectFit="cover"
                      className="max-w-full max-h-[45vh] object-contain image-animation"
                    />
                  </div>
                  <div className="block md:hidden">
                    <Image
                      width={0}
                      height={0}
                      src={TmgLogo.src}
                      alt="kota canvas"
                      loading="lazy"
                      layout="responsive"
                      objectFit="cover"
                      className="max-w-full max-h-[45vh] object-contain image-animation"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full flex items-center justify-center">
                <Image
                  width={0}
                  height={0}
                  src={imageSrc}
                  alt="kota canvas"
                  loading="lazy"
                  layout="responsive"
                  objectFit="cover"
                  className={`${
                    blog
                      ? "max-w-[40%] md:max-w-[40%]"
                      : agenct
                      ? "max-w-[70%] md:max-w-[70%]"
                      : "max-w-[100%]"
                  } image-animation object-contain`}
                />
              </div>
            )}
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
      <div>
        {landingPage && (
          <div className="pagePaddingX hidden md:block">
            <Image
              width={500}
              height={300}
              src={clientLogos.src}
              alt="TMG Certifications"
              loading="lazy"
              className="relative  w-[50%] object-contain -top-20 image-animation"
            />
          </div>
        )}
      </div>
    </section>
  );
};
export default HeroContainer;
