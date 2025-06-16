import { Link } from "react-router-dom";
import Customers from "../../Layout/Customers/Customers";
import { Vector1, Vector2 } from ".././../../Svg/Layout/Vectors";

const SingleInfo = ({ data, info }) => {
  return (
    <section className="bg-white pt-25 pb-35">
      <div className="container-custom flex flex-col gap-y-32.5">
        <div className="flex flex-col gap-y-25">
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
          <div className="max-mobile:flex-col flex items-center justify-between gap-10">
            {info?.map((item, index) => (
              <div
                className="flex flex-col gap-y-15"
                key={index}
              >
                <h2 className="text-center text-[clamp(20px,1.5vw,29px)]">
                  {item.title}
                </h2>
                <ul className="flex list-disc flex-col gap-y-10 font-medium">
                  {item.description?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 font-medium max-mobile:flex-col">
          <div className="flex w-1/2 cursor-pointer flex-col gap-y-5 text-center max-mobile:w-[80%]">
            <img
              src="/Blog/photo1.png"
              alt=""
            />
            <p className="text-custom-grey">
              this is an image with a caption example
            </p>
          </div>
          <div className="flex w-1/2 cursor-pointer flex-col gap-y-5 text-center  max-mobile:w-[80%]">
            <img
              src="/Blog/photo2.png"
              alt=""
            />
            <Link className="text-custom-red underline">download here</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleInfo;
