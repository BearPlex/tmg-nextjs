import HeadingTwo from "../headings/HeadingTwo";
import HeadingThree from "../headings/HeadingThree";
import { articles } from "../../helpers/Helpers";
import Link from 'next/link'

const Articles = () => {
    return(
        <div className="px-20">
            <HeadingTwo title="Latest Articles" cssClass="mb-20 text-zinc-700"  />
            <div className="flex gap-14">
                {
                    articles.map((article, index) =>
                        <div className="border border-black h-full group overflow-hidden hover:bg-pink-400 transition-in-out hover:transition-in-out hover:delay-300">
                            <div className="h-min overflow-hidden">
                                <img src={article.img} alt="blog images" className="transition-in-out object-cover overflow-hidden scale-100 group-hover:scale-110 group-hover:transition-in-out group-hover:duration-500" />
                            </div>
                            <div className="p-9">
                                {
                                    article.labelExpertise && <span className="pink-color font-medium text-base uppercase inline-block group-hover:transition-all group-hover:delay-150 group-hover:text-black">{article.labelExpertise}</span>
                                }
                                {
                                    article.labelStudios && <span className="pink-color font-bold text-medium uppercase inline-block ml-6 group-hover:transition-all group-hover:delay-150 group-hover:text-black">{article.labelStudios}</span>
                                }
                                <HeadingThree title={article.title} cssClass="text-2xl mt-4 group-hover:text-white transition-all" />
                            </div>
                        </div>)
                }
            </div>
            <div className="text-center w-full mt-28">
                <Link href="#">
                    <a className="border-2 border-pink-400 rounded-full px-6 py-4 font-bold text-pink-400 bg-white hover:bg-pink-400 hover:text-white transition-in-out hover:transition-in-out uppercase">View All Blog Posts</a>
                </Link>
            </div>

        </div>
    )
}
export default Articles;