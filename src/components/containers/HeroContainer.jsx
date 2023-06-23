import Image from "../Image/Image";
import group from "../../assets/images/Group.png";
const HeroContainer = ({ landingPage = false, imageSrc, children }) => {
  return (
    <section className="w-full h-[55vh] 3xl:max-w-7xl 3xl:mx-auto">
      <div className="px-10 h-full flex items-center md:px-10 lg:px-14 xl:px-20 2xl:px-32 3xl:px-0 3xl:pl-0">
        <div className="w-full flex justify-between items-center gap-10">
          <div className="text-center w-full ">
            <Image
              width={500}
              height={150}
              src={imageSrc}
              alt="kota canvas"
              loading="lazy"
              className="max-w-full"
            />
            {landingPage && (
              <Image
                width={500}
                height={300}
                src={group.src}
                alt="the drum logo"
                loading="lazy"
                className="w-[90%] object-contain"
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
