import { useState, useEffect } from "react";
import NavigationMenu from "../navigationMenu/NavigationMenu";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "../Image/Image";
import logoIcon from "../../../public/webp/tmg-logo.82b8a7c1.webp";
import logoIconWhite from "../../assets/svg/logoWhite.svg";

const Header = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isShrunk, setIsShrunk] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;
    setIsHomePage(router.pathname !== "/");
  }, [router.isReady, router.pathname]);

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
  useEffect(() => {}, [showMenu]);

  return (
    <>
      <div
        // className={`fixed w-screen z-50 transition-all duration-300`}
        className={`fixed w-screen z-50 transition-all duration-300 ${
          (isShrunk && !showMenu) || isScrolling ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="w-full">
          <header
            className={`max-w-7xl mx-auto pagePaddingX xl:pl-10 transition-all duration-300 ${
              isShrunk && !showMenu
                ? "py-2 lg:py-4 xl:px-10"
                : "py-6 lg:py-11 xl:px-10"
            }`}
          >
            <nav className="flex items-center justify-between">
              {showMenu || isHomePage ? (
                <Link href="/" className="">
                  <Image
                    width={500}
                    height={300}
                    loading="eager"
                    decoding="sycn"
                    className={
                      showMenu
                        ? "inline-block w-32 lg:w-40 cursor-pointer"
                        : "w-36 cursor-pointer"
                    }
                    src={showMenu ? logoIconWhite.src : logoIcon.src}
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
                      <div className="blackHeadingText gradientHoverBlack font-extrabold text-2xl test">
                        Work
                      </div>
                    </Link>
                  </li>
                </div>
                <div className="hidden md:block">
                  <li className={showMenu ? "hidden" : "block"}>
                    <Link href="/contact">
                      <div className="blackHeadingText gradientHoverBlack font-extrabold text-2xl test">
                        Contact
                      </div>
                    </Link>
                  </li>
                </div>
                <li>
                  <div id="menuToggle" onChange={() => setShowMenu(!showMenu)}>
                    <input type="checkbox" checked={showMenu} readOnly={true} />
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
      {showMenu && <NavigationMenu setShowMenu={setShowMenu} />}
    </>
  );
};

export default Header;
