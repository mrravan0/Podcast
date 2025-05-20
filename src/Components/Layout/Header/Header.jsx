import { Fragment, memo, useState } from "react";
import DownIcon from "../../../Svg/Layout/DownIcon";
import UseMediaQuery from "../../../CustomHooks/UseMediaQuery";
import "./Header.scss";
const Header = memo(() => {
  const HeaderData = [
    { title: "About" },
    { title: "Episodes", color: "text-custom-red" },
    { title: "Testimonials", color: "text-custom-red" },
    { title: "Pricing" },
    { title: "Features" },
    { title: "Blog", color: "text-custom-red" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = UseMediaQuery("(max-width:750.9px)");
  return (
    <section className="header bg-custom-cream pt-6">
      <div className="container-custom flex items-center justify-between gap-x-4">
        <img className="w-20" src="/Layout/Header/photo1.png" alt="Logo" />
        <div
          className="g-y-0.5 min-mobile:hidden relative z-60 flex h-5 w-10 flex-col"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="h-0.5 w-full bg-black"></span>
          <span className="absolute top-1/2 h-0.5 w-full bg-black"></span>
          <span className="absolute bottom-0 h-0.5 w-full bg-black"></span>
        </div>
        <div
          className={`${isOpen ? "flex" : "hidden"} bg-custom-cream min-mobile:contents absolute bottom-0 left-0 z-50 h-full w-full flex-col gap-y-10 p-4`}
        >
          <nav>
            <ul className="header__list max-laptop:gap-x-15 flex items-center gap-x-20">
              <li className="cursor-pointer">Episodes</li>
              <li className="cursor-pointer">About</li>
              <li
                className={`cursor-pointer ${!isSmallScreen ? "group relative flex items-center gap-x-1.5" : ""}`}
              >
                More
                {!isSmallScreen && (
                  <Fragment>
                    <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-solid border-black/40">
                      <DownIcon />
                    </div>
                    <ul className="absolute top-7 left-10 hidden flex-col gap-y-3 font-medium group-hover:flex">
                      {HeaderData?.map((item, index) => (
                        <li className={item?.color} key={index}>
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </Fragment>
                )}
              </li>
              {isSmallScreen &&
                HeaderData?.map((item, index) => (
                  <li className={`cursor-pointer ${item?.color}`} key={index}>
                    {item.title}
                  </li>
                ))}
            </ul>
          </nav>
          <div className="header__content max-laptop:gap-x-5 max-mobile:flex-col max-mobile:w-full max-mobile:gap-y-4 flex items-center gap-x-7">
            <button className="max-mobile:w-full cursor-pointer rounded-lg border-2 border-solid border-black px-6 py-3 duration-300 hover:scale-110">
              RECENT EPISODES
            </button>
            <button className="shadow-custom max-mobile:w-full cursor-pointer rounded-lg border-2 border-solid border-black bg-black px-6 py-3 text-white duration-300 hover:scale-110">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Header;
