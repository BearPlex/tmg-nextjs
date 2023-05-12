import Link from "next/link";
import {twitterSvg} from '../../helpers/Helpers';
import {instagramSvg} from '../../helpers/Helpers';
import {facebookSvg} from '../../helpers/Helpers';
import {linkedinSvg} from '../../helpers/Helpers';
import danImage from '../../assets/images/dan-global-logo@2x.jpg';
import drumImage from '../../assets/images/the-drum-logo.jpg';
import clutchImage from '../../assets/images/glutch@2x.jpg';
import awardsImage from '../../assets/images/awwwards-logo@2x.jpg';
import designImage from '../../assets/images/css-design-awards-white.jpg';
import kotaTransparentImage from '../../assets/svg/Kota_logo_white-1.svg';

const Footer = () => {
    return(
        <>
        <footer className="pt-28 px-20 bg-zinc-800 py-28">
            <div className="flex md:flex-row flex-col justify-center items-center relative w-full">
                <ul className="pl-0 w-[15%]">
                    <li>
                        <Link href="/">
                            <a className="relative before:absolute before:w-full before:top-[80%] no-underline before:border-b-2 before:border-gray-400 inline-block text-white text-2xl leading-loose font-bold hover:text-pink-400 hover:transition hover:ease-in-out hover:text-pink-400 hover:delay-200">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/work">
                            <a className="no-underline inline-block text-white text-2xl leading-loose font-bold hover:text-pink-400 hover:transition hover:ease-in-out hover:text-pink-400 hover:delay-200">Work</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                            <a className="no-underline inline-block text-white text-2xl leading-loose font-bold hover:text-pink-400 hover:transition hover:ease-in-out hover:text-pink-400 hover:delay-200">Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/studio">
                            <a className="no-underline inline-block text-white text-2xl leading-loose font-bold hover:text-pink-400 hover:transition hover:ease-in-out hover:text-pink-400 hover:delay-200">Studio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a className="no-underline inline-block text-white text-2xl leading-loose font-bold hover:text-pink-400 hover:transition hover:ease-in-out hover:text-pink-400 hover:delay-200">Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a className="no-underline inline-block text-white text-2xl leading-loose font-bold hover:text-pink-400 hover:transition hover:ease-in-out hover:text-pink-400 hover:delay-200">Contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/privacy-policy">
                            <a className="no-underline inline-block text-white text-2xl leading-loose font-bold hover:text-pink-400 hover:transition hover:ease-in-out hover:text-pink-400 hover:delay-200">Privacy Policy</a>
                        </Link>
                    </li>
                </ul>
                <ul className="w-[28%] px-4">
                    <li className="mb-3">
                        <Link href="#">
                            <a className="tracking-wider uppercase no-underline inline-block text-pink-400 text-2xl leading-loose font-bold hover:text-pink-400 hover:transition hover:ease-in-out hover:delay-200">Experts In</a>
                        </Link>
                    </li>
                    <li className="mb-3">
                        <Link href="#">
                            <a className="no-underline inline-block text-white text-lg leading-loose font-bold hover:text-pink-400 hover:transition hover:ease-in-out hover:text-pink-400 hover:delay-200">Hospitality</a>
                        </Link>
                    </li>
                    <li className="mb-3">
                        <Link href="#">
                            <a className="no-underline inline-block text-white text-lg leading-loose font-bold hover:text-pink-400 hover:transition hover:ease-in-out hover:text-pink-400 hover:delay-200">Property and Architecture</a>
                        </Link>
                    </li>
                    <li className="mb-3">
                        <Link href="#">
                            <a className="no-underline inline-block text-white text-lg leading-loose font-bold hover:text-pink-400 hover:transition hover:ease-in-out hover:text-pink-400 hover:delay-200">Film and Television</a>
                        </Link>
                    </li>
                    <li className="mb-3">
                        <Link href="#">
                            <a className="no-underline inline-block text-white text-lg leading-loose font-bold hover:text-pink-400 hover:transition hover:ease-in-out hover:text-pink-400 hover:delay-200">Business to Business</a>
                        </Link>
                    </li>
                </ul>
           
                <div className="md:ml-auto">
                    <ul className="text-right">
                        <li className="mb-3">
                            <Link href="#">
                                <a className="tracking-wider uppercase no-underline inline-block text-pink-400 text-2xl leading-loose font-bold hover:transition hover:ease-in-out hover:text-pink-400 hover:delay-200">Follow</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="flex gap-6 justify-end">
                        <a href="#" className="inline-block">{twitterSvg()}</a>
                        <a href="#" className="inline-block">{instagramSvg()}</a>
                        <a href="#" className="inline-block">{facebookSvg()}</a>
                        <a href="#" className="inline-block">{linkedinSvg()}</a>
                    </div>
                    <Link href="#">
                        <a className="mt-8 w-full text-right tracking-wider no-underline inline-block text-white text-lg leading-loose font-bold hover:transition hover:ease-in-out hover:text-pink-400 hover:delay-200">Signup to our newsletter</a>
                    </Link>
                        <div className="mt-8 group">
                            <a href="mailto:hello@kota.co.uk" className="inline-block text-white font-bold text-4xl hover:transition hover:ease-in-out hover:text-pink-400 hover:delay-200">hello@kota.co.uk</a>
                            <h6 className="w-full text-right text-white hidden cursor-pointer group-hover:block group-hover:text-pink-400 font-bold">Copy to clipboard...</h6>
                        </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center pt-20">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
                    <a href="#" className="inline-block">
                        <img src={danImage.src} alt="kota logo" className="w-[120px] object-cover" />
                    </a>
                    <a href="#" className="inline-block">
                        <img src={drumImage.src} alt="kota logo" className="w-[120px] object-cover" />
                    </a>
                    <a href="#" className="inline-block">
                        <img src={clutchImage.src} alt="kota logo" className="w-[120px] object-cover" />
                    </a>
                    <a href="#" className="inline-block">
                        <img src={awardsImage.src} alt="kota logo" className="w-[120px] object-cover" />
                    </a>
                    <a href="#" className="inline-block">
                        <img src={designImage.src} alt="kota logo" className="w-[120px] object-cover" />
                    </a>
                </div>
                <a href="#" className="inline-block md:mt-0 mt-10">
                    <img src={kotaTransparentImage.src} alt="kota logo" className="w-[120px] h-16 object-contain" />
                </a>
            </div>
        </footer>

        </>



    )
}
export default Footer;