import { useRouter } from "next/router";
import Image from "../Image/Image";
const CardStatic = (props) => {
  const { item } = props;
  const router = useRouter();
  const pushWork = (id) => {
    router.push(`/blog-detail-static/1`);
  };
  return (
    <div className="my-10 md:my-20 flex justify-start flex-wrap max-w-7xl mx-auto">
      {item.map((blog, index) => (
        <div
          key={index + 800}
          className="card-wrapper border border-black h-full group overflow-hidden hover:bg-pink-400 w-[30%]"
          onClick={() => pushWork(blog.id)}
        >
          <div className="h-min overflow-hidden">
            <Image
              width={340}
              height={230}
              src={blog.blog_featured_image.src}
              alt="blog images"
              className="object-cover overflow-hidden scale-100 group-hover:scale-110"
            />
          </div>
          <div className="p-9">
            <span className="pink-color paragraph uppercase inline-block group-hover:blackHeading">
              {blog.title}
            </span>
            <div className="headingBlack mt-4 group-hover:text-white">
              {blog.sub_title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardStatic;
