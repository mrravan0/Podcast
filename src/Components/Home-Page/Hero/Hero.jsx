import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import RopeIcon from "../../../Svg/Layout/RopeIcon";
import HeroTop from "../../Layout/HeroTop/HeroTop";
import "swiper/css";
import "swiper/css/bundle";
import "./Hero.scss";
const Hero = ({ data, info }) => {
  const imageContent = [];
  for (let i = 1; i <= 6; i++) imageContent.push(`/Hero/photo${i}.png`);
  return (
    <section className="hero relative pt-16 pb-36">
      <HeroTop
        info={info}
        property={"pb-32"}
      >
        <button className="btn px-12 py-6">Subscribe</button>
      </HeroTop>
      <div className="hero__bottom max-mobile-s:gap-y-20 flex flex-col gap-y-30">
        <div className="flex">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true, type: "custom" }}
            breakpoints={{
              1000: { slidesPerView: 5 },
              750: { slidesPerView: 3 },
            }}
          >
            {imageContent?.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item}
                  alt={`Photos${index}`}
                  className="w-full cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="container-custom">
          <ul className="hero__bottom-title max-tablet:grid max-tablet:grid-cols-2 max-tablet:gap-8 flex items-center justify-between border-y-2 border-solid border-[#4d4d4d] py-11 font-bold">
            {data?.map((item, index) => (
              <li
                key={index}
                className="max-tablet:justify-center flex items-center gap-x-2.5"
              >
                {item?.image ? (
                  <img
                    src={item.image}
                    alt=""
                  />
                ) : (
                  item?.svg
                )}
                <h2>{item.title}</h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <RopeIcon color={"#CD4631"} />
    </section>
  );
};

export default Hero;
