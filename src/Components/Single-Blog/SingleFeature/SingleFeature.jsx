import WaveIcon from "../../../Svg/Layout/WaveIcon";
import { useLocation } from "react-router-dom";

const SingleFeature = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <section className="bg-white">
      <div className="container-custom border-custom-grey flex flex-col gap-y-25 border-b border-solid">
        <img
          src={data.image}
          alt=""
        />
        <div className="flex flex-col gap-y-20 pb-20">
          <div className="flex items-center gap-x-2.5 justify-center text-center">
            <WaveIcon properties={'size-[10%] max-mobile:hidden'}/>
            <h1 className="title">{data.title}</h1>
          </div>
          <div className="flex items-center justify-between text-custom-grey font-medium gap-2.5 max-mobile:flex-col">
            <p>{data.description}</p>
            <p>
              Quis dictum cursus faucibus mattis dignissim. Pellentes que purus
              in sed sodales in mauris molestie. Eleifend est cons ctetur
              interdum eu in auctor. Gravida leo et.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleFeature;
