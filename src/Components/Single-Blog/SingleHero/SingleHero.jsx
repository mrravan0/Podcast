import TwitterIcon from "../../../Svg/Footer/TwitterIcon";
import TikTokIcon from "../../../Svg/Footer/TikTokIcon";
import InstagramIcon from "../../../Svg/Footer/InstagramIcon";
import { Link } from "react-router-dom";
const SingleHero = () => {
  return (
    <section className="background-image pt-20 pb-11.5">
      <div className="container-custom flex flex-col items-center gap-y-12.5 text-center">
        <div className="text-custom-grey flex w-full items-center justify-between">
          <Link
            className="font-medium hover:scale-110 duration-300"
            to={"/blog"}
          >
            Back to articles
          </Link>
          <p>Sep 12, 2021</p>
        </div>
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-2.5">
            <h1 className="max-laptop:text-sm text-custom-red text-lg">
              TIPS & TRICKS
            </h1>
            <h2 className="title">Doodle Artwork 101</h2>
          </div>
          <ul className="max-laptop:gap-x-1.5 text-custom-grey flex items-center justify-center gap-x-2.5 font-medium">
            <li className="border-custom-grey rounded-lg border-2 border-solid px-3 pt-1.5">
              art
            </li>
            <li className="border-custom-grey rounded-lg border-2 border-solid px-3 pt-1.5">
              tips and trick
            </li>
            <li className="border-custom-grey rounded-lg border-2 border-solid px-3 pt-1.5">
              creative
            </li>
          </ul>
          <div className="max-laptop:gap-x-6.25 flex items-center justify-center gap-x-8.25">
            <TwitterIcon />
            <TikTokIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleHero;
