import { useEffect } from "react";
import Image from "../Image/Image";
import group from "../../assets/images/Group.png";
import clientLogos from "../../assets/images/footer-logos.png";
import TmgLogo from "../../assets/images/hero-image-3x.png";
const HeroContainer = ({
  landingPage = false,
  imageSrc,
  blog = false,
  agency = false,
  services = false,
  children,
}) => {
  return (
    <section
      className={`w-full max-w-7xl mx-auto z-50 ${
        landingPage ? "md:min-h-[75vh]" : "md:min-h-[55vh]"
      }`}
    >
      <div className="h-full flex items-center pagePaddingX">
        <div className="w-full flex items-center componentsMainGap flex-col md:flex-row">
          <div className="text-center w-full h-auto">
            {landingPage ? (
              <div className="">
                <div className="content">
                  <div className="hidden md:block">
                    <Image
                      width={0}
                      height={0}
                      src={imageSrc}
                      alt="kota canvas"
                      loading="lazy"
                      layout="responsive"
                      objectFit="cover"
                      className="max-w-full max-h-[45vh] object-contain image-animation -top-5"
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
                {landingPage && (
                  <div className="hidden md:block">
                    <Image
                      width={500}
                      height={300}
                      src={clientLogos.src}
                      alt="TMG Certifications"
                      loading="lazy"
                      className="relative w-full object-contain -bottom-[6.4rem] image-animation"
                    />
                  </div>
                )}
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
                      ? "max-w-[45%] md:max-w-[53%]"
                      : agency
                      ? "max-w-[80%] md:max-w-[83%]"
                      : "max-w-[100%]"
                  } image-animation object-contain`}
                />
              </div>
            )}
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
      <div></div>
    </section>
  );
};
export default HeroContainer;
