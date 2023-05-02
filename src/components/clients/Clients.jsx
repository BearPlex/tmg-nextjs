import HeadingTwo from "../headings/HeadingTwo";
import {clients} from "../../helpers/Helpers";

const Clients = () => {
    return(
            <div className="px-20 py-28 max-w-6xl mx-auto text-center">
                <HeadingTwo title="Our Clients" />
                <div className="pt-20 flex item-center flex-wrap">
                    {
                        clients.map((item,index) => <div className="w-1/5 inline-flex justify-center mb-14">
                            <img src={item.img} alt="clients" loading="lazy" className="max-w-[60%]"/>
                        </div>)
                    }
                </div>
            </div>
    )
}
export default Clients;