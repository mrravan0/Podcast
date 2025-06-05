import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import LeftIcon from "../../../Svg/Layout/LeftIcon";
import RightIcon from "../../../Svg/Layout/RightIcon";
const SwiperByButtons = ({ children }) => {
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
    <div className="flex flex-col gap-y-15">
      <div className="flex">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
          }}
          breakpoints={{
            750: { slidesPerView: 2 },
          }}
        >
          {children}
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
  );
};
export default SwiperByButtons;
