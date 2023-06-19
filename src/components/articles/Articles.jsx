/* eslint-disable */
import HeadingTwo from "../headings/HeadingTwo";
import HeadingThree from "../headings/HeadingThree";
import { articles } from "../../helpers/Helpers";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  // {console.log("Work",blogsData)}
  const router = useRouter();
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/blogs?populate=*")
      .then((res) => {
        // console.log("Res Blogs", res.data.data);
        setArticles(res.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  const pushWork = (id) => {
    router.push(`/blog-detail/${id}`);
    // console.log("Id", id);
  };
  return (
    <div className="px-20 pb-10">
      <HeadingTwo title="Latest Articles" cssClass="mb-20 text-zinc-700" />
      <div className="flex gap-14">
        {articles.map((article, index) => (
          <div
            className="border w-[352px] border-black h-full group overflow-hidden hover:bg-pink-400 transition-in-out hover:transition-in-out hover:delay-300"
            onClick={() => pushWork(article.id)}
            key={article.id}>
            <div className="h-min overflow-hidden">
              {/* <Image
                width={500}
                height={300}
                src={`http://localhost:1337${article.attributes.blog_featured_image.data.attributes.url}`}
                alt="blog images"
                className="transition-in-out object-cover overflow-hidden scale-100 group-hover:scale-110 group-hover:transition-in-out group-hover:duration-500"
              /> */}
            </div>
            <div className="p-9">
              {
                <span className="pink-color font-medium text-base uppercase inline-block group-hover:transition-all group-hover:delay-150 group-hover:text-black">
                  {article.attributes.title}
                </span>
              }

              <HeadingThree
                title={article.attributes.sub_title}
                cssClass="text-2xl mt-4 group-hover:text-white transition-all"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center w-full mt-28">
        {/* <a className="border-2 border-orange_theme-400 rounded-full px-6 py-4 font-bold text-orange_theme-400 bg-white hover:bg-orange_theme-400 hover:text-white transition-in-out hover:transition-in-out uppercase"> */}
        <Link
          href="/blog"
          className="border-2 rounded-full font-bold uppercase gradient-button">
          {/* <a className="border-2 rounded-full font-bold uppercase gradient-button"> */}
          <span className="w-full h-full mx-0 my-0 gradient-span">
            View All Blog Posts
          </span>
          {/* </a> */}
          {/* <a className="border-2 rounded-full font-bold uppercase gradient-button">
            <span className="w-full h-full mx-0 my-0 gradient-span">
              View All Blog Posts
            </span>
          </a> */}
        </Link>
      </div>
    </div>
  );
};
export default Articles;
