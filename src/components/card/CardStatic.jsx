import { useRouter } from "next/router";
import Image from "../Image/Image";
const CardStatic = (props) => {
  const { item } = props;
  const router = useRouter();
  const pushWork = (id) => {
    router.push(`/blog-detail-static/1`);
    // console.log("Id", id);
  };
  return (
    <div className="mt-5 md:mt-16 flex justify-start flex-wrap 3xl:max-w-7xl 3xl:mx-auto">
      {item.map((blog, index) => (
        <div
          key={index}
          className="card-wrapper border border-black h-full group overflow-hidden hover:bg-pink-400 w-[30%]"
          onClick={() => pushWork(blog.id)}
        >
          <div className="h-min overflow-hidden">
            {/* <Image decoding="async" width={500} height={300} src={blog.blog_featured_image.src} alt="blog images" className="transition-in-out object-cover overflow-hidden scale-100 group-hover:scale-110 group-hover:transition-in-out group-hover:duration-500" /> */}
            <Image
              width={340}
              height={230}
              src={blog.blog_featured_image.src}
              alt="blog images"
              className="object-cover overflow-hidden scale-100 group-hover:scale-110"
            />
          </div>
          <div className="p-9">
            {
              // blog?.map((tag, index) =>
              //     <span className="pink-color mr-3 font-medium text-base uppercase inline-block group-hover:transition-in-out group-hover:delay-150 group-hover:text-black">{tag}</span>
              // )
            }
            <span className="pink-color font-medium text-base uppercase inline-block group-hover:text-black">
              {blog.title}
            </span>
            <div className="largeParagraph mt-4 group-hover:text-white">
              {blog.sub_title}
            </div>
          </div>
        </div>
      ))}

      {/* 
{
                    item.map((blog, index) =>
                        <div className="border border-black h-full group overflow-hidden hover:bg-pink-400 transition-in-out hover:transition-in-out hover:delay-300">
                            <div className="h-min overflow-hidden">
                               
                                <Image decoding="async" width={500} height={300} src={`http://localhost:1337${blog.attributes.blog_featured_image.data.attributes.url}`} alt="blog images" className="transition-in-out object-cover overflow-hidden scale-100 group-hover:scale-110 group-hover:transition-in-out group-hover:duration-500" />
                            </div>
                            <div className="p-9">
                                {
                                     <span className="pink-color font-medium text-base uppercase inline-block group-hover:transition-all group-hover:delay-150 group-hover:text-black">{blog.attributes.title}</span>
                                }
                              
                                <HeadingThree title={blog.attributes.sub_title} cssClass="largeParagraph mt-4 group-hover:text-white transition-all" />
                            </div>
                        </div>)
                } */}
    </div>
  );
};

export default CardStatic;
