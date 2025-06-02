import { memo } from "react";

const EpisodesCard = memo(({ data }) => {
  return (
    <div
      className={`flex cursor-pointer flex-col gap-y-5 rounded-xl border-2 border-solid border-black bg-white p-4 duration-300 hover:scale-90 ${data.status ? "shadow-[10px_10px_0_0_#81adc8]" : ""}`}
      data-aos={data.status ? "fade-up-right" : "fade-up-left"}
      data-aos-anchor-placement="top-center"
    >
      <div className="max-mobile-s:flex-col flex items-center justify-between gap-x-4">
        <img
          className="w-1/3 min-w-37.5"
          src={data.img}
          alt=""
        />
        <div className="flex flex-col gap-y-7.5">
          <div
            className={`after:bg-custom-grey relative flex flex-col gap-y-2.5 after:absolute after:-bottom-3.75 after:left-0 after:h-px after:w-full ${data.status ? "text-custom-red" : ""}`}
          >
            <p>{data.episode}</p>
            <h2 className="text-[clamp(20px,1.5104166667vw,29px)]">
              {data.title}
            </h2>
          </div>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="max-mobile-s:flex-col max-mobile-s:gap-y-3.75 flex items-center justify-between">
        <div className="max-mobile-s:justify-between max-mobile-s:w-full min-mobile-s:gap-x-1.5 flex items-center">
          {data?.info.map((item, index) => (
            <div
              className="border-custom-grey rounded-sm border-2 border-solid px-3 py-1.5"
              key={index}
            >
              <p className="text-custom-grey font-medium">{item}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-y-2.5">
          <p>Hosted by:</p>
          <img
            src="/Default/photo1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
});
export default EpisodesCard;
