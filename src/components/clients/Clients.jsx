import { clients } from "../../helpers/Helpers";
import Image from "../Image/Image";

const Clients = () => {
  return (
    <div className="pagePaddingX py-10 md:py-28 text-center max-w-7xl mx-auto 2xl:px-0 2xl:pl-0">
      <div className="heading blackHeadingText">
        Our <span className="gradientText">Happy Clients</span>
      </div>
      <div className="flex item-center flex-wrap">
        {clients.map((item, index) => (
          <div
            key={index + 1300}
            className="w-1/2 md:w-1/3 lg:w-1/5 p-2 md:p-4 inline-flex justify-center"
          >
            {index === 10 || index === 12 ? (
              <Image
                decoding="async"
                width={50}
                height={50}
                src={item.img}
                alt="clients"
                loading="lazy"
                className="w-1/2 object-contain image-animation"
              />
            ) : index === 14 ? (
              <Image
                decoding="async"
                width={50}
                height={50}
                src={item.img}
                alt="clients"
                loading="lazy"
                className="w-1/3 object-contain image-animation"
              />
            ) : (
              <Image
                decoding="async"
                width={50}
                height={50}
                src={item.img}
                alt="clients"
                loading="lazy"
                className="w-2/3 object-contain image-animation"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Clients;
