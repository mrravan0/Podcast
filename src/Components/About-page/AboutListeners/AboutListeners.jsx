import AboutListenersCard from "./AboutListenersCard";

const AboutListeners = ({ data, info }) => {
  return (
    <section className="bg-white py-35">
      <div className="container-custom flex flex-col gap-y-45">
        <div className="after:bg-custom-grey relative flex flex-col gap-y-15 pt-5 after:absolute after:-bottom-20 after:left-0 after:h-0.5 after:w-full">
          <div className="flex flex-col gap-y-7.5">
            <div className="flex flex-col gap-y-5 text-center">
              <h1 className="title">What our listeners say</h1>
              <p className="subtitle">
                Their experience throughout every platform
              </p>
            </div>
            <img
              src="/Listeners/photo4.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-20">
            <h1 className="title text-center">About and History</h1>
            <div className="text-custom-grey flex items-center justify-between gap-x-2.5 font-medium">
              {info?.map((item, index) => (
                <div
                  className="w-full"
                  key={index}
                >
                  <p>
                    {item.title}
                    <br />
                    <br />
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-20">
          <h1 className="title text-center">Founder and Main Host</h1>
          <div className="flex justify-between gap-x-5">
            {data?.map((item, index) => (
              <AboutListenersCard
                data={item}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutListeners;
