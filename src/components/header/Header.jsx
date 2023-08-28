import { useState, useEffect } from "react";
import NavigationMenu from "../navigationMenu/NavigationMenu";
import Link from "next/link";
import Image from "../Image/Image";
import logoIcon from "../../assets/images/tmg-logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isShrunk, setIsShrunk] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsShrunk(scrollY > 0);
  }, [scrollY]);

  useEffect(() => {
    const handleToggleMenu = () => {
      setIsScrolling(true);
    };

    window.addEventListener("scroll", handleToggleMenu);

    return () => {
      window.removeEventListener("scroll", handleToggleMenu);
    };
  }, []);

  useEffect(() => {
    const handleScrollEnd = () => {
      setIsScrolling(false);
    };

    window.addEventListener("scroll", handleScrollEnd);

    return () => {
      window.removeEventListener("scroll", handleScrollEnd);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed w-screen z-50 transition-all duration-300`}
        // className={`fixed w-screen z-50 transition-all duration-300 ${
        //   (isShrunk && !showMenu) || isScrolling ? "bg-white" : "bg-transparent"
        // }`}
      >
        <div className="w-full">
          <header
            className={`max-w-7xl mx-auto pagePaddingX xl:pl-10 transition-all duration-300 ${
              isShrunk && !showMenu
                ? "py-6 2xl:py-6 lg:py-4 xl:px-10"
                : "py-6 2xl:py-11 lg:py-11 xl:px-10"
            }`}
          >
            <nav className="flex items-center justify-between">
              {showMenu ? (
                <Link href="/" className="">
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
                </Link>
              ) : (
                <div></div>
              )}

              <ul className="pl-0 flex item-center gap-[4.5rem] justify-end py-3">
                <div className="hidden md:block">
                  <li className={showMenu ? "hidden" : "block"}>
                    <Link href="/work">
                      <div className="blackHeadingText gradientHoverBlack font-bold text-xl test">
                        Work
                      </div>
                    </Link>
                  </li>
                </div>
                <div className="hidden md:block">
                  <li className={showMenu ? "hidden" : "block"}>
                    <Link href="/contact">
                      <div className="blackHeadingText gradientHoverBlack font-bold text-xl test">
                        Contact
                      </div>
                    </Link>
                  </li>
                </div>
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
