import Image from "../Image/Image";
import group from "../../assets/images/Group.png";
const HeroContainer = ({ landingPage = false, imageSrc, children }) => {
  return (
    <section className="w-full md:h-[55vh] 3xl:max-w-7xl 3xl:mx-auto z-50">
      <div className="h-full flex items-center pagePaddingX">
        <div className="w-full flex items-center componentsMainGap flex-col md:flex-row">
          <div className="text-center w-full h-auto">
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
            {landingPage && (
              <div className="hidden md:block">
                <Image
                  width={500}
                  height={300}
                  src={group.src}
                  alt="the drum logo"
                  loading="lazy"
                  className="w-[90%] object-contain"
                />
              </div>
            )}
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </section>
  );
};
export default HeroContainer;
