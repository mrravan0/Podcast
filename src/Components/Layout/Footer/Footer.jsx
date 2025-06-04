import TwitterIcon from "../../../Svg/Footer/TwitterIcon";
import InstagramIcon from "../../../Svg/Footer/InstagramIcon";
import TikTokIcon from "../../../Svg/Footer/TikTokIcon";
import AppStoreIcon from "../../../Svg/Footer/AppStoreIcon";
import PlayMarketIcon from "../../../Svg/Footer/PlayMarketIcon";
import { memo } from "react";
const Footer = memo(({ data, info }) => {
  return (
    <footer className="bg-white pt-35 pb-20">
      <div className="container-custom flex flex-col gap-y-35">
        <ul className="max-mobile:flex-col max-laptop:gap-y-7.5 max-mobile:text-center flex items-start justify-between gap-x-2.5 font-medium">
          <li className="text-custom-grey max-mobile:items-center flex w-full flex-col gap-y-10">
            <div className="max-laptop:gap-x-6.25 flex items-end gap-x-8.25">
              <img
                className="w-20"
                src="/LogoPhoto.png"
                alt=""
              />
              <p>©2021.</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="max-laptop:gap-x-6.25 flex items-center gap-x-8.25">
              <TwitterIcon />
              <InstagramIcon />
              <TikTokIcon />
            </div>
          </li>
          <li className="w-full">
            <ul className="max-laptop:gap-x-22.5 grid w-full grid-cols-2 gap-x-31 gap-y-5">
              {data?.map((item, index) => (
                <li
                  className={item.status ? "text-custom-red" : "text-black"}
                  key={index}
                >
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </li>
          <li className="text-custom-grey max-mobile:items-center flex w-full flex-col gap-y-15">
            <div className="flex flex-col gap-y-7.5">
              <p>Listen to episodes on your fav platform:</p>
              <div className="max-laptop-s:flex-col max-laptop-s:gap-y-2.5 min-laptop-s:items-center max-mobile:items-center flex justify-between">
                {info?.map((item, index) => (
                  <div
                    className="flex items-center gap-x-1.5"
                    key={index}
                  >
                    {item.image ? (
                      <img
                        className="w-5.5"
                        src={item.image}
                        alt=""
                      />
                    ) : (
                      item.svg
                    )}
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <p>App available on:</p>
              <div className="max-laptop:gap-x-5 max-mobile:justify-center flex items-center gap-x-6.75">
                <AppStoreIcon />
                <PlayMarketIcon />
              </div>
            </div>
          </li>
        </ul>
        <div className="border-custom-grey text-custom-grey max-mobile:flex-col max-mobile:text-center flex items-center justify-between gap-y-5 border-t border-solid pt-5">
          <p>
            <time datetime="2022">@2022</time>
            .All Rights Reserved.
            <span className="text-custom-red">Pod of Cast</span>
          </p>
          <div className="max-laptop:gap-x-6 flex items-center gap-x-8">
            <p>Terms</p>
            <div className="bg-custom-grey size-2 rounded-full"></div>
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </footer>
  );
});
export default Footer;
