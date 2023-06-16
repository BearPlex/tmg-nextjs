import { useState } from "react";
import NavigationMenu from "../navigationMenu/NavigationMenu";
import Link from "next/link";
// import logoIcon from '../../assets/svg/Kota_logo_black.svg';

import logoIcon from "../../assets/images/tmg-logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="fixed top-16 w-full px-10 z-20">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <a className={showMenu ? "hidden" : "block"}>
              <img
                className="w-36 cursor-pointer"
                src={logoIcon.src}
                alt="logo"
              />
            </a>
          </Link>
          <ul className="pl-0 ml-auto flex item-center gap-[4.5rem] justify-end py-3">
            <li className={showMenu ? "hidden" : "block"}>
              <Link href="/work">
                <a className="text-xl font-sofia-extrabold font-extrabold text-black no-underline mix-blend-multiply hover:text-orange_theme-400 hover:transition-all">
                  Work
                </a>
              </Link>
            </li>
            <li className={showMenu ? "hidden" : "block"}>
              <Link href="/contact">
                <a className="text-xl font-sofia-extrabold text-black no-underline font-extrabold inline-block mix-blend-multiply hover:text-orange_theme-400 hover:transition-all">
                  Contact
                </a>
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
      {showMenu && <NavigationMenu />}
    </>
  );
};
export default Header;
