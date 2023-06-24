/* eslint-disable */
import { useState } from "react";
import NavigationMenu from "../navigationMenu/NavigationMenu";
import Link from "next/link";
// import logoIcon from '../../assets/svg/Kota_logo_black.svg';
import Image from "../Image/Image";
import logoIcon from "../../assets/images/tmg-logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="fixed w-screen z-50">
        <div className="w-full">
          <header className=" 3xl:max-w-7xl 3xl:mx-auto px-10 md:px-10 lg:px-14 xl:px-20 2xl:px-32 py-11 3xl:px-0 3xl:pl-0 ">
            <nav className="flex items-center justify-between">
              <Link href="/">
                {/* <a className={showMenu ? "hidden" : "block"}> */}
                <Image
                  width={500}
                  height={300}
                  className={
                    showMenu
                      ? "inline-block w-40 cursor-pointer"
                      : "w-36 cursor-pointer"
                  }
                  src={logoIcon.src}
                  alt="logo"
                />
                {/* </a> */}
              </Link>
              <ul className="pl-0 ml-auto flex item-center gap-[4.5rem] justify-end py-3">
                <li className={showMenu ? "hidden" : "block"}>
                  <Link
                    className="paragraph font-sofia-extrabold font-extrabold  text-black no-underline mix-blend-multiply hover:text-orange_theme-400 hover:transition-all"
                    href="/work"
                  >
                    Work
                  </Link>
                </li>
                <li className={showMenu ? "hidden" : "block"}>
                  <Link
                    className="paragraph font-sofia-extrabold text-black no-underline font-extrabold inline-block mix-blend-multiply hover:text-orange_theme-400 hover:transition-all"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <div id="menuToggle" onClick={() => setShowMenu(!showMenu)}>
                    <input type="checkbox" />
                    <span id="span1"></span>
                    <span id="span2"></span>
                    <span id="span3"></span>
                  </div>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
      {showMenu && <NavigationMenu />}
    </>
  );
};
export default Header;
