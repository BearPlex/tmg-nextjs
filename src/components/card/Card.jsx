import { useRouter } from "next/router";
import Image from "../Image/Image";

const Card = (props) => {
  const { item } = props;
  const router = useRouter();
  const pushWork = (id) => {
    router.push(`/blog-detail/${id}`);
  };
  return (
    <div className="w-full my-10 md:my-20 flex md:gap-4 xl:gap-6 flex-wrap max-w-7xl mx-auto">
      {item.map((blog, index) => {
        if (index > 0) {
          return (
            <div
              onClick={() => pushWork(blog?.attributes?.slug)}
              key={blog.id}
              className="w-full lg:w-[32%] md:w-[48%] h-full mt-10  white group hover:bg-[#EE245F] bg-opacity-0 hover:bg-opacity-50 relative bg-transparent duration-300 cursor-pointer"
            >
              <div className="relative h-full">
                <div className="h-full w-full overflow-hidden rounded-xl">
                  {blog?.attributes.cardImage &&
                    blog?.attributes.cardImage?.data?.attributes?.url !==
                      "" && (
                      <Image
                        className="h-full w-full object-cover object-center  group-hover:opacity-50 duration-300 transition-in-out overflow-hidden scale-100 group-hover:scale-110 rounded-xl"
                        src={blog?.attributes.cardImage?.data?.attributes?.url}
                        height={150}
                        width={150}
                        alt={
                          blog?.attributes?.cardImageAlt &&
                          blog?.attributes?.cardImageAlt !== ""
                            ? blog?.attributes?.cardImageAlt
                            : "image"
                        }
                        objectFit="cover"
                      />
                    )}
                  <div className="absolute inset-0 bg-[#EE245F] opacity-0 group-hover:bg:opacity-50 duration-300 bg-transparent"></div>
                </div>
              </div>
              <div className="pt-6  pr-4 md:pt-8 relative group group-hover:ml-2 duration-300 transition-in-out">
                <p className="smallText text-[#EE2760] group-hover:blackHeading">
                  {blog.attributes.sub_title}
                </p>
                <p className="smallHeading font-bold  blackHeading group-hover:text-white pt-2">
                  {blog.attributes.title}
                </p>
                <div>
                  <p className="pb-4 pt-3 paragraph blackDescriptionText group-hover:text-white">
                    {blog.attributes.cardText}
                  </p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
