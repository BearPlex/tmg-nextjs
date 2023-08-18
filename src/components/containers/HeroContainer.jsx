import { useEffect } from "react";
import Image from "../Image/Image";
import group from "../../assets/images/Group.png";
const HeroContainer = ({ landingPage = false, imageSrc, children }) => {
  useEffect(() => {
    if (!landingPage) return; // Only apply for landing page
    const container = document.querySelector(".hover-container");
    const image = document.querySelector(".image-effect");

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      // Adjust zoom level as desired
      const zoom = 1.2;

      image.style.transform = `scale(${zoom}) translate(${(x - 0.5) * 10}%, ${
        (y - 0.5) * 10
      }%)`;
    };

    const handleMouseLeave = () => {
      image.style.transform = "scale(1)";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
    // const container = document.querySelector(".hover-container");
    // const content = document.querySelector(".content");

    // const handleMouseMove = (e) => {
    //   const rect = container.getBoundingClientRect();
    //   const x = e.clientX - rect.left;
    //   const y = e.clientY - rect.top;

    //   const dx = x - rect.width / 2;
    //   const dy = y - rect.height / 2;

    //   const distanceFactor = 0.1;

    //   content.style.transform = `translate(-50%, -50%) translate(${
    //     dx * distanceFactor
    //   }px, ${dy * distanceFactor}px)`;
    // };

    // const handleMouseLeave = () => {
    //   content.style.transform = "translate(-50%, -50%)";
    // };

    // container.addEventListener("mousemove", handleMouseMove);
    // container.addEventListener("mouseleave", handleMouseLeave);

    // return () => {
    //   container.removeEventListener("mousemove", handleMouseMove);
    //   container.removeEventListener("mouseleave", handleMouseLeave);
    // };
  }, [landingPage]);
  return (
    <section
      className={`w-full 3xl:max-w-7xl 3xl:mx-auto z-50 ${
        landingPage ? "md:h-[70vh]" : "md:h-[55vh]"
      }`}
    >
      <div className="h-full flex items-center pagePaddingX">
        <div className="w-full flex items-center componentsMainGap flex-col md:flex-row">
          <div className="text-center w-full h-auto">
            {landingPage ? (
              <div className="hover-container">
                <div className="content">
                  <div className="lens"></div>
                  <Image
                    width={0}
                    height={0}
                    src={imageSrc}
                    alt="kota canvas"
                    loading="lazy"
                    layout="responsive"
                    objectFit="cover"
                    className="max-w-full max-h-[60vh] image-effect"
                  />
                  <div className="">
                    <Image
                      width={500}
                      height={300}
                      src={group.src}
                      alt="the drum logo"
                      loading="lazy"
                      className="w-[90%] object-contain"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <Image
                width={0}
                height={0}
                src={imageSrc}
                alt="kota canvas"
                loading="lazy"
                layout="responsive"
                objectFit="cover"
                className="max-w-full max-h-[60vh]"
              />
            )}
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </section>
  );
};
export default HeroContainer;
