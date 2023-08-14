import { useRouter } from "next/router";
import Image from "../Image/Image";
import { convertStringForImage } from "../../helpers/Helpers";

const Card = (props) => {
  const { item } = props;
  const router = useRouter();
  const pushWork = (id) => {
    router.push(`/blog-detail/${id}`);
  };
  return (
    <div className="w-full my-10 md:my-20 flex justify-between flex-wrap 3xl:max-w-7xl 3xl:mx-auto">
      {item.map((blog, index) => (
        <div
          onClick={() => pushWork(blog.id)}
          key={blog.id}
          className="w-full lg:w-[32%] md:w-[48%] h-full mt-10  white group hover:bg-[#EE245F] bg-opacity-0 hover:bg-opacity-50 relative bg-transparent duration-300"
        >
          <div className="relative h-full">
            <div className="h-full w-full overflow-hidden">
              <Image
                className="object-cover object-center  group-hover:opacity-50 duration-300 transition-in-out overflow-hidden scale-100 group-hover:scale-110"
                alt="Product Image"
                src={`https://beta.themediagale.com/public_images/blogs/${
                  blog?.attributes.title && blog?.attributes.title !== ""
                    ? convertStringForImage(blog?.attributes.title)
                    : "Women-Rise"
                }.png`}
                layout="responsive"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-[#EE245F] opacity-0 group-hover:bg:opacity-50 duration-300 bg-transparent"></div>
            </div>
          </div>
          <div className="pt-6  md:pt-8 relative group group-hover:ml-2 duration-300 transition-in-out">
            <p className="text-base  text-[#EE2760] group-hover:blackHeading">
              {blog.attributes.sub_title}
            </p>
            <p className="heading font-bold  blackHeading group-hover:text-white pt-2">
              {blog.attributes.title}
            </p>
            <div>
              <p className="pb-4 pt-3 font-poppins-regular paragraph blackDescriptionText group-hover:text-white">
                {blog.attributes.cardText}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
