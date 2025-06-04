import { Fragment } from "react";
import DownIcon from "../../../Svg/Layout/DownIcon";
import UseMediaQuery from "../../../CustomHooks/UseMediaQuery";
const HeaderOverlay = ({ features }) => {
  const isSmallScreen = UseMediaQuery("(max-width:750.9px)");
  return (
    <div
      className={`${features.statusOpen ? "flex" : "hidden"} bg-custom-cream min-mobile:contents absolute bottom-0 left-0 z-50 h-full w-full flex-col justify-center gap-y-10 p-4`}
    >
      <nav>
        <ul className="header__list max-laptop:gap-x-15 max-tablet:gap-x-10 max-mobile:flex-col max-mobile:gap-y-10 flex items-center gap-x-20">
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
                <ul className="absolute top-7 left-10 z-10 hidden flex-col gap-y-3 rounded-lg bg-white p-2.5 font-medium group-hover:flex">
                  {features.data?.map((item, index) => (
                    <li
                      className={item?.color}
                      key={index}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </Fragment>
            )}
          </li>
          {isSmallScreen &&
            features.data?.map((item, index) => (
              <li
                className={`cursor-pointer ${item?.color}`}
                key={index}
              >
                {item.title}
              </li>
            ))}
        </ul>
      </nav>
      <div className="header__content max-laptop:gap-x-5 max-mobile:flex-col max-mobile:w-full max-mobile:gap-y-4 flex items-center gap-x-7">
        <button className="max-mobile:w-full cursor-pointer rounded-lg border-2 border-solid border-black px-6 py-3 duration-300 hover:scale-110">
          RECENT EPISODES
        </button>
        <button className="btn px-6 py-3">Subscribe</button>
      </div>
    </div>
  );
};
export default HeaderOverlay;
