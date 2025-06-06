import RopeIcon from "../../../Svg/Layout/RopeIcon";
import StarGroupIcon from "../../../Svg/Layout/StarGroupIcon";
import { Vector1 } from "../../../Svg/Layout/Vectors";
import WaveIcon from "../../../Svg/Layout/WaveIcon";
const Form = ({ data }) => {
  return (
    <section className="relative bg-white py-35">
      <div className="container-custom flex flex-col gap-y-25">
        <div className="flex flex-col items-center gap-y-5 text-center">
          <div className="flex w-max flex-col items-end">
            <WaveIcon properties={"rotate-30"} />
            <h1 className="title mr-10">Get in touch</h1>
          </div>
          <p className="subtitle">Send your message to us</p>
        </div>
        <div className="flex justify-between gap-x-2.5">
          <Vector1
            features={{
              properties: "max-mobile-s:hidden size-30 self-end",
              color: "#cd4631",
            }}
          />
          <div className="max-laptop:max-w-191.5 after:bg-custom-grey relative flex w-full max-w-255 flex-col gap-y-15 after:absolute after:-top-10 after:h-0.5 after:w-full">
            <form className="flex flex-col gap-y-10">
              <div className="max-mobile:grid-cols-1 grid grid-cols-2 gap-x-5 gap-y-10">
                {data?.map((item, index) => (
                  <div
                    className="flex flex-col gap-y-4"
                    key={index}
                  >
                    <h2 className="max-laptop:text-sm text-lg">
                      {item.title}
                      <span className="text-custom-red">*</span>
                    </h2>
                    <input
                      className="focus:border-custom-red rounded-lg border-2 border-solid border-black p-5 font-medium duration-300"
                      type={item.type}
                      placeholder={item.placeholder}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-y-6.25">
                <h2 className="max-laptop:text-sm text-lg">
                  Message
                  <span className="text-custom-red">*</span>
                </h2>
                <textarea
                  className="rounded-lg border-2 border-s border-black p-5 font-medium"
                  placeholder="Your message goes here..."
                ></textarea>
              </div>
            </form>
            <div className="max-mobile:flex-col max-mobile:gap-y-5 flex items-center justify-between">
              <h2 className="max-laptop:text-sm text-lg font-medium">
                <span className="text-custom-red">*</span>
                required
              </h2>
              <button className="btn max-laptop:px-9 max-mobile:w-full px-12 py-5">
                SEND MESSAGE
              </button>
              <p className="max-laptop:text-sm text-lg font-medium">
                Viverra at port <br /> accumsan.
                <span className="text-custom-red">Orci non</span>
              </p>
            </div>
          </div>
          <StarGroupIcon properties={"max-mobile-s:hidden size-19.5"} />
        </div>
      </div>
      <RopeIcon color={"#cd4631"} />
    </section>
  );
};
export default Form;
