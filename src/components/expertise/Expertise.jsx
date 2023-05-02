import HeadingThree from "../headings/HeadingThree";

const Expertise = (props) => {
    const {list, cssClass} = props;
    return(
        <>
            <div className="flex mt-14 items-center justify-between flex-wrap">
                {
                    list.map((item, index) =>
                        <div key={index} className="w-[47%] mb-16">
                            <a href="#">
                                <div className="relative work-images h-full">
                                    <img src={item.img} alt="work images" className="h-full block max-w-full object-cover" />
                                </div>
                                <div className="group">
                                    {
                                        item.tags.map((tag, index) => <span key={index} className="inline-block mt-4 text-pink-400 uppercase text-md font-medium mr-4 tracking-widest">{tag}</span>
                                        )
                                    }
                                    <HeadingThree title={item.heading} cssClass={`my-4 text-2xl ${cssClass} transition group-hover:text-pink-400 group-hover:transition-all`} />
                                    <p className={`${cssClass} text-md font-medium max-w-[90%]`}>{item.description}</p>
                                </div>
                            </a>
                        </div>
                    )
                }
            </div>
        </>
    )
}
export default Expertise;