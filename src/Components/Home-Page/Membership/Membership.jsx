import { Vector4 } from "../../../Svg/Layout/Vectors";
const Membership = ({ data }) => {
  return (
    <section className="membership bg-white py-35">
      <div className="container-custom flex flex-col items-center gap-y-25 text-center">
        <div className="relative flex flex-col gap-y-5">
          <h1 className="title">
            Membership benefits
            <Vector4
              properties={
                "absolute -top-[35%] -right-[7%] w-1/4 max-mobile-s:hidden"
              }
            />
          </h1>
          <p className="subtitle">Become our sponsor and get all benefits</p>
        </div>
        <div className="max-mobile:grid-cols-2 max-mobile-s:grid-cols-1 grid grid-cols-3 gap-x-6 gap-y-20">
          {data?.map((item, index) => (
            <div
              className="flex flex-col items-center gap-y-7.5"
              data-aos="zoom-in"
              key={index}
            >
              <div className="flex size-20 items-center justify-center">
                {item.svg}
              </div>
              <div className="flex flex-col gap-y-2.5">
                <h2 className="text-[clamp(20px,1.5104166667vw,29px)]">
                  {item.title}
                </h2>
                <p className="font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn px-9 py-5">SEE PRICING</button>
      </div>
    </section>
  );
};
export default Membership;
