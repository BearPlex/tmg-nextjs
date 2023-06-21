/* eslint-disable */
import HeadingTwo from "../headings/HeadingTwo";
import HeadingThree from "../headings/HeadingThree";
import { articles } from "../../helpers/Helpers";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import GradientButton from "../button/GradientButton";
import { useRouter } from "next/router";
import Image from "../Image/Image";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  // {console.log("Work",blogsData)}
  const router = useRouter();
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/blogs?populate=*")
      .then((res) => {
        console.log("Res Blogs", res.data.data);
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
    <div className="px-10 md:px-10 lg:px-14 xl:px-20 2xl:px-32 pb-10">
      <HeadingTwo title="Latest Articles" cssClass="mb-20 text-zinc-700" />
      <div className="flex gap-14">
        {articles.map((article, index) => (
          <div
            className="border w-[352px] border-black h-full group overflow-hidden hover:bg-pink-400"
            onClick={() => pushWork(article.id)}
            key={article.id}
          >
            <div className="h-min overflow-hidden">
              <Image
                width={500}
                height={300}
                src={`http://localhost:1337${article.attributes.blog_featured_image.data.attributes.url}`}
                alt="blog images"
                className="object-cover overflow-hidden scale-100 group-hover:scale-110"
              />
            </div>
            <div className="py-9 px-6">
              {
                <span className="pink-color font-medium text-base uppercase inline-block  group-hover:text-black">
                  {article.attributes.title}
                </span>
              }

              <HeadingThree
                title={article.attributes.sub_title}
                cssClass="text-2xl mt-4 group-hover:text-white"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center w-full mt-28">
        <GradientButton text="View All Blog Posts" route="/blog" />
      </div>
    </div>
  );
};
export default Articles;
