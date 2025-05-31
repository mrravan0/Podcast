import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Customers from "../../Layout/Customers/Customers";
import LeftIcon from "../../../Svg/Layout/LeftIcon";
import RightIcon from "../../../Svg/Layout/RightIcon";
import {Vector3} from "../../../Svg/Layout/Vectors";
import RopeIcon from "../../../Svg/Layout/RopeIcon";
import { useRef, useState, useEffect } from "react";
import "./Listeners.scss";
const Listeners = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current !== null &&
      nextRef.current !== null
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);
  return (
    <section className="listeners bg-custom-lightBlue relative pt-35 pb-25">
      <div className="container-custom flex flex-col gap-y-15">
        <div className="mb-10 flex flex-col items-center gap-y-5">
          <h1 className="title relative">
            What our listeners say
            <Vector3 features={{ properties: "absolute -top-11 -left-20" }} />
          </h1>
          <p className="subtitle">
            Their experience throughout every platform
          </p>
        </div>
        <div className="flex">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
            }}
            breakpoints={{
              750: { slidesPerView: 2 },
            }}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="max-tablet:p-3 h-full rounded-lg bg-white p-10 text-black">
                  <Customers data={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex gap-x-5">
          <div
            ref={prevRef}
            className="flex size-12 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-black"
          >
            <LeftIcon />
          </div>
          <div
            ref={nextRef}
            className="border-custom-red flex size-12 cursor-pointer items-center justify-center rounded-full border-2 border-solid"
          >
            <RightIcon />
          </div>
        </div>
      </div>
      <RopeIcon color={"black"} />
    </section>
  );
};

export default Listeners;
