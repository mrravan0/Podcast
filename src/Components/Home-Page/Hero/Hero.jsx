import Button from "../../Layout/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "./Hero.scss";
const Hero = () => {
  const imageContent = [];
  for (let i = 1; i <= 6; i++) imageContent.push(`/Hero/photo${i}.png`);
  return (
    <section className="hero pb-36F bg-[url(/HeroRight.png),url(/HeroLeft.png)] bg-no-repeat pt-16">
      <div className="container-custom flex flex-col gap-y-32">
        <div className="flex flex-col items-center gap-y-10 text-center">
          <h1 className="hero__title leading-none font-bold">
            Your Daily <br />
            <span className="text-custom-red">Podcast</span>
          </h1>
          <p className="hero__subtitle font-medium">
            We cover all kinds of categories and <br /> a weekly special guest.
          </p>
          <Button text={"Subscribe"} className={"px-12 py-6"} />
        </div>
        <div className="flex flex-col gap-y-30">
          <div className="flex">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={5}
              loop={true}
              autoplay={{ delay: 2000 }}
              pagination={{ clickable: true, type: "custom" }}
            >
              {imageContent?.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item} alt={`Photos${index}`} className="cursor-pointer" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex justify-between">Salam</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
