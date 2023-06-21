import HeadingTwo from "../headings/HeadingTwo";
import { clients } from "../../helpers/Helpers";
import Image from "../Image/Image";

const Clients = () => {
  return (
    <div className="px-10 md:px-10 lg:px-14 xl:px-20 2xl:px-32 py-28 text-center">
      <HeadingTwo title="Our Clients" />
      <div className="pt-20 flex item-center flex-wrap">
        {clients.map((item, index) => (
          <div className="w-1/5 inline-flex justify-center mb-14">
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
