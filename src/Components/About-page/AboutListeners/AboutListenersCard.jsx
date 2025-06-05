import TikTokIcon from "../../../Svg/Footer/TikTokIcon";
import InstagramIcon from "../../../Svg/Footer/InstagramIcon";
import TwitterIcon from "../../../Svg/Footer/TwitterIcon";
const AboutListenersCard = ({ data }) => {
  return (
    <div data-aos={data.aos}>
      <div className="flex h-full cursor-pointer justify-between gap-x-2.5 rounded-lg border border-solid border-black p-4 duration-300 hover:shadow-[10px_10px_0_0_#000]">
        <img
          className="max-mobile-s:hidden"
          src={data.image}
          alt=""
        />
        <div className="max-mobile-s:items-center flex flex-col items-end justify-between gap-y-40">
          {data.svg}
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-1.5">
              <p className="max-laptop:text-sm text-custom-grey text-lg font-medium">
                Host {data.host}
              </p>
              <h1 className="info">
                {data.name[0]}
                <br />
                {data.name[1]}
              </h1>
            </div>
            <p className="text-custom-grey font-medium">{data.description}</p>
            <div className="max-laptop:gap-x-5 border-custom-grey flex items-center justify-end gap-x-6.75 border-t border-solid pt-2.5">
              <p className="text-custom-grey">follow me:</p>
              <div className="flex items-center gap-x-2.5">
                <TikTokIcon />
                <TwitterIcon />
                <InstagramIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutListenersCard;
