import HeadingThree from "../headings/HeadingThree";

const Card = (props) => {
    const {item} = props;
    return(
        <div className="mt-16 flex justify-start flex-wrap">
            {
                item.map((blog, index) =>
                    <div key={index} className="card-wrapper border border-black h-full group overflow-hidden hover:bg-pink-400 transition-in-out hover:transition-in-out hover:delay-300 w-[30%]">
                        <div className="h-min overflow-hidden">
                            <img src={blog.img} alt="blog images" className="transition-in-out object-cover overflow-hidden scale-100 group-hover:scale-110 group-hover:transition-in-out group-hover:duration-500" />
                        </div>
                        <div className="p-9">
                        {
                            blog.tags.map((tag, index) =>
                                <span className="pink-color mr-3 font-medium text-base uppercase inline-block group-hover:transition-in-out group-hover:delay-150 group-hover:text-black">{tag}</span>
                            )
                        }
                            {/*<span className="pink-color font-bold text-medium uppercase inline-block ml-6 group-hover:transition-all group-hover:delay-150 group-hover:text-black">{article.labelStudios}</span>*/}
                            <HeadingThree title={blog.cardTitle} cssClass="text-2xl mt-4 group-hover:text-white" />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Card;