import YoutubeIcon from "../../../Svg/Layout/YoutubeIcon";
import SpotifyIcon from "../../../Svg/Layout/SpotifyIcon";
const Beta = () => {
  return (
    <section className="bg-custom-lightBlue relative py-35">
      <div className="container-custom flex flex-col items-center gap-y-35">
        <div className="flex flex-col items-center gap-y-5 text-center">
          <div className="border-custom-red text-custom-red flex w-17.5 items-center justify-center rounded-sm border border-solid">
            <p className="max-laptop:text-sm text-lg">Beta</p>
          </div>
          <h1 className="title">
            Available now <br />
            Pod of Cast App
          </h1>
          <p className="subtitle mt-2">We just launched our podcast app!</p>
        </div>
        <div className="flex flex-col items-center gap-y-6">
          <button className="btn max-laptop:px-9 px-12 py-5">
            DOWNLOAD NOW
          </button>
          <div className="flex flex-col items-center gap-y-2.5">
            <h2 className="max-laptop:text-sm text-lg">
              Content also available on:
            </h2>
            <div className="flex items-center gap-x-6.5">
              <img
                className="w-6"
                src="/Default/GoogleIconDark.png"
                alt=""
              />
              <SpotifyIcon features={{ size: "24", color: "dark" }} />
              <YoutubeIcon />
            </div>
          </div>
        </div>
      </div>
      <img
        className="max-tablet:w-60 max-mobile:hidden max-laptop-s:w-77.5 absolute bottom-0 left-0 w-96"
        data-aos="fade-right"
        src="/Beta/photo1.png"
        alt=""
      />
      <img
        className="max-tablet:w-60 max-mobile:hidden max-laptop-s:w-65 absolute right-0 bottom-0"
        data-aos="fade-left"
        src="/Beta/photo2.png"
        alt=""
      />
    </section>
  );
};
export default Beta;
