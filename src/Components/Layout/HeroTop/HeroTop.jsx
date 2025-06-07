const HeroTop = ({ children, info, property }) => {
  return (
    <div className="hero__top background-image">
      <div
        className={`container-custom flex flex-col items-center gap-y-10 text-center ${property ? property : ""}`}
      >
        <h1 className="hero__top-title leading-none font-bold">
          {info?.title[0]}
          <br />
          <span className="text-custom-red">{info?.title[1]}</span>
        </h1>
        <p className="hero__top-subtitle font-medium">
          {info?.description[0]}
          <br /> {info?.description[1]}.
        </p>
        {children}
      </div>
    </div>
  );
};
export default HeroTop;
