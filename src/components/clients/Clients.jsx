import { clients } from "../../helpers/Helpers";
import Image from "../Image/Image";

const Clients = () => {
  return (
    <div className="pagePaddingX py-10 md:py-28 text-center 3xl:max-w-7xl 3xl:mx-auto 3xl:px-0 3xl:pl-0">
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
                className="w-1/2 object-contain"
              />
            ) : index === 14 ? (
              <Image
                decoding="async"
                width={50}
                height={50}
                src={item.img}
                alt="clients"
                loading="lazy"
                className="w-1/3 object-contain"
              />
            ) : (
              <Image
                decoding="async"
                width={50}
                height={50}
                src={item.img}
                alt="clients"
                loading="lazy"
                className="w-2/3 object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Clients;
