import RopeIcon from "../../../Svg/Layout/RopeIcon";
import EpisodesCard from "../../Layout/EpisodesCard/EpisodesCard";
import { Vector6 } from "../../../Svg/Layout/Vectors";
const Recent = ({ data }) => {
  return (
    <section className="relative py-35">
      <div className="container-custom flex flex-col items-center gap-y-25">
        <div className="flex flex-col gap-y-5 text-center">
          <h1 className="title">Recent Episodes</h1>
          <p className="subtitle">Available on your favorite platform</p>
        </div>
        <div className="max-tablet:grid-cols-1 relative grid grid-cols-2 gap-5">
          {data?.map((item, index) => (
            <EpisodesCard data={item} key={index} />
          ))}
          <Vector6 properties={"absolute right-0 -top-[20%] w-[9%] max-mobile:hidden"} />
        </div>
        <button className="btn px-9 py-5">BROWSE ALL EPISODES</button>
      </div>
      <RopeIcon color={"black"} />
    </section>
  );
};
export default Recent;
