import Customers from "../../Layout/Customers/Customers";
import { Vector1, Vector2 } from "../../../Svg/Layout/Vectors";
import RopeIcon from "../../../Svg/Layout/RopeIcon";
const Listen = ({ info, data }) => {
  return (
    <section className="relative bg-white py-35">
      <div className="container-custom flex flex-col gap-y-25 text-center">
        <h1 className="title leading-0.3 self-center">
          Talk. Listen. Get inspired by every minute of it.
        </h1>
        <div className="max-mobile:flex-col max-mobile:gap-y-10 flex items-center justify-between">
          {info?.map((item, index) => (
            <div
              className="max-mobile:w-full flex w-2/5 flex-col items-center gap-y-10"
              data-aos={item.elementScroll}
              key={index}
            >
              <img
                src={item.image}
                alt=""
              />
              <h2 className="leading-0.4 font-medium">{item.title}</h2>
            </div>
          ))}
        </div>
        <div
          className="bg-custom-cream min-laptop:mx-11 max-mobile:mx-0 relative mt-5 rounded-lg py-10 max-[1280px]:mx-4"
          data-aos="zoom-in-down"
        >
          <Customers data={data} />
          <Vector1
            features={{
              color: "#CD4631",
              properties:
                "absolute top-1/2 -left-16 w-31 max-[1280px]:w-20 max-[1280px]:-left-9 max-mobile:hidden",
            }}
          />
          <Vector2
            features={{
              properties:
                "absolute -top-14 -right-10 w-37 max-[1280px]:w-20 max-[1280px]:-top-5 max-[1280px]:-right-5",
            }}
          />
        </div>
      </div>
      <RopeIcon color={"black"} />
    </section>
  );
};

export default Listen;
