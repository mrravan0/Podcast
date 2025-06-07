import { memo } from "react";
import { useLocation } from "react-router-dom";
const DetailsHero = memo(() => {
  const location = useLocation();
  const DetailsData = location.state;
  return (
    <section className="hero pt-25 pb-10">
      <div className="background-image bg-position-[right_center,_left_center]">
        <div className="container-custom flex flex-col gap-y-20">
          <div className="flex items-center justify-between gap-x-2.5">
            <img
              className="shadow-[12px_12px_0_0_#81adc8] rounded-lg cursor-pointer hover:scale-105 duration-300"
              src={DetailsData.img}
              alt=""
            />
            <div className="flex flex-col gap-y-15">
              <div className="flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-10">
                  <div className="after:bg-custom-grey relative flex flex-col gap-y-4 after:absolute after:-bottom-5 after:left-0 after:h-0.5 after:w-full">
                    <div className="text-custom-red flex items-center justify-between">
                      <p>{DetailsData.episode}</p>
                      <div className="border-custom-red rounded-lg border border-solid p-1">
                        <p>FEATURED EPISODE</p>
                      </div>
                    </div>
                    <h1>{DetailsData.title}</h1>
                  </div>
                  <p className="text-custom-grey font-medium">
                    {DetailsData.description}
                  </p>
                </div>
                <div className="max-laptop:text-sm flex items-center justify-between text-lg">
                  <div className="flex items-center gap-x-2.5">
                    <img
                      src=""
                      alt=""
                    />
                    <p>
                      Hosted by:
                      <span className="text-custom-red">Jane Doe</span>
                    </p>
                  </div>
                  <p className="text-custom-grey font-medium">Sep 22, 2021</p>
                </div>
              </div>
              <div className="max-laptop:gap-x-5 flex items-center gap-x-6.75">
                <button className="btn max-laptop:px-9 px-12 py-5">
                  SUBSCRIBE
                </button>
                <button className="btn-features max-laptop:px-9 px-12 py-5">
                  Listen Now
                  <span className="text-custom-red"> (46 min)</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center">Buraya asagi melumat</div>
        </div>
      </div>
    </section>
  );
});
export default DetailsHero;
