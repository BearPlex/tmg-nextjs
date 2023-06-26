import { clients } from "../../helpers/Helpers";
import Image from "../Image/Image";

const Clients = () => {
  return (
    <div className="pagePaddingX py-10 md:py-28 text-center 3xl:max-w-7xl 3xl:mx-auto 3xl:px-0 3xl:pl-0">
      <div className="heading blackHeadingText">
        Our <span className="gradientText">Happy Clients</span>
      </div>
      <div className="pt-7 md:pt-20 flex item-center flex-wrap">
        {clients.map((item, index) => (
          <div
            key={index}
            className="w-1/5 inline-flex justify-center mb-4 md:mb-10"
          >
            <Image
              decoding="async"
              width={500}
              height={300}
              src={item.img}
              alt="clients"
              loading="lazy"
              className="max-w-[60%]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Clients;
