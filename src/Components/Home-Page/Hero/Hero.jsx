import Button from "../../Layout/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SpotifyIcon from "../../../Svg/Home-Page/SpotifyIcon";
import GlobeSection from "../../Layout/GlobeSection/GlobeSection";
import "swiper/css";
import "swiper/css/bundle";
import "./Hero.scss";
const Hero = ({ data }) => {
  const imageContent = [];
  for (let i = 1; i <= 6; i++) imageContent.push(`/Hero/photo${i}.png`);
  return (
    <GlobeSection properties={"hero pt-16 pb-36"} svgColor={"#CD4631"}>
      <div className="hero__top min-mobile:bg-[url(/Hero/HeroRight.png),url(/Hero/HeroLeft.png)] min-mobile:bg-no-repeat">
        <div className="container-custom flex flex-col items-center gap-y-10 pb-32 text-center">
          <h1 className="hero__top-title leading-none font-bold">
            Your Daily <br />
            <span className="text-custom-red">Podcast</span>
          </h1>
          <p className="hero__top-subtitle font-medium">
            We cover all kinds of categories and <br /> a weekly special guest.
          </p>
          <Button text={"Subscribe"} className={"px-12 py-6"} />
        </div>
      </div>
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
                {item?.image ? <img src={item.image} alt="" /> : item?.svg}
                <h2>{item.title}</h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </GlobeSection>
  );
};

export default Hero;
