import { SwiperSlide } from "swiper/react";
import SwiperByButtons from "../../Layout/SwiperByButtons/SwiperByButtons";
import { Vector3 } from "../../../Svg/Layout/Vectors";
const AboutSponsor = ({ data }) => {
  return (
    <section className="py-35">
      <div className="container-custom flex flex-col gap-y-25">
        <div className="flex flex-col items-center gap-y-5 text-center">
          <div className="flex gap-x-5">
            <Vector3
              features={{ properties: "max-laptop:w-15 max-mobile-s:hidden" }}
            />
            <h1 className="title mt-10">Our Sponsor</h1>
          </div>
          <p className="subtitle">Our current official sponsor</p>
        </div>
        <SwiperByButtons>
          {data?.map((item, index) => (
            <SwiperSlide>
              <div className="flex cursor-pointer flex-col gap-y-12.5 rounded-lg border border-solid border-black bg-white px-4 pt-10 pb-7.5">
                <div className="after:bg-custom-grey relative flex items-center justify-center gap-x-4 after:absolute after:-bottom-5 after:left-0 after:h-0.5 after:w-full">
                  {item.image ? (
                    <img
                      className="w-13"
                      src={item.image}
                      alt=""
                    />
                  ) : (
                    item.svg
                  )}
                  <h2 className="info">{item.title}</h2>
                </div>
                <p className="max-laptop:text-sm text-custom-grey text-center text-lg font-medium">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </SwiperByButtons>
      </div>
    </section>
  );
};
export default AboutSponsor;
