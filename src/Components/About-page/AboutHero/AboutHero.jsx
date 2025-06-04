import HeroTop from "../../Layout/HeroTop/HeroTop";

const AboutHero = ({ data, info }) => {
  return (
    <section className="hero relative pt-16">
      <HeroTop
        info={info}
        property={"pb-64"}
      >
        <div className="flex items-center gap-x-5">
          <button className="shadow-custom w-max cursor-pointer rounded-lg border-2 border-solid border-black px-12 py-6 text-[clamp(14px,1.09375vw,21px)] duration-300 hover:scale-110">
            BECOME SPONSOR
          </button>
          <button className="btn px-12 py-6">Subscribe</button>
        </div>
      </HeroTop>
      <ul
        className="container-custom absolute -bottom-40 left-1/2 z-10 flex -translate-x-1/2 items-center gap-x-5"
        data-aos="flip-down"
        data-anchor-placement="top-center"
      >
        {data?.map((item, index) => (
          <li
            className="flex w-full cursor-pointer flex-col items-center gap-y-5 rounded-lg border border-solid border-black bg-white py-15 shadow-[6px_6px_0_0_#cd4631]"
            key={index}
          >
            <h2 className="title text-custom-red">
              {item.count}
              <span className="text-black">K</span>
            </h2>
            <p className="text-custom-grey font-medium">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default AboutHero;
