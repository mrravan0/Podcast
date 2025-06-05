import Customers from "../../Layout/Customers/Customers";
import { Vector3 } from "../../../Svg/Layout/Vectors";
import RopeIcon from "../../../Svg/Layout/RopeIcon";
import SwiperByButtons from "../../Layout/SwiperByButtons/SwiperByButtons";
import { SwiperSlide } from "swiper/react";
import "./Listeners.scss";
const Listeners = ({ data }) => {
  return (
    <section className="listeners bg-custom-lightBlue relative pt-35 pb-25">
      <div className="container-custom flex flex-col gap-y-25">
        <div className="mb-10 flex flex-col items-center gap-y-5">
          <h1 className="title relative">
            What our listeners say
            <Vector3 features={{ properties: "absolute -top-11 -left-20" }} />
          </h1>
          <p className="subtitle">Their experience throughout every platform</p>
        </div>
        <SwiperByButtons>
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="max-tablet:p-3 h-full rounded-lg bg-white p-10 text-black"
                data-aos="flip-down"
              >
                <Customers data={item} />
              </div>
            </SwiperSlide>
          ))}
        </SwiperByButtons>
      </div>
      <RopeIcon color={"black"} />
    </section>
  );
};

export default Listeners;
