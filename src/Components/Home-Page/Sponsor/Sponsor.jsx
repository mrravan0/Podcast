import RopeIcon from "../../../Svg/Layout/RopeIcon";
import SponsorCard from "./SponsorCard";
import { Vector6 } from "../../../Svg/Layout/Vectors";
const Sponsor = ({ data }) => {
  return (
    <section className="relative bg-white py-35">
      <div className="container-custom flex flex-col gap-y-25">
        <div className="flex flex-col items-center gap-y-5 text-center">
          <div className="min-mobile-s:w-max relative">
            <h1 className="title">Become our sponsor</h1>
            <Vector6
              properties={
                "max-[1350px]:-left-[8%] max-laptop:w-10 max-mobile-s:hidden absolute w-15.5 -rotate-105 -top-[12%] -left-[6%]"
              }
            />
          </div>
          <p className="subtitle">Get exclusive episodes, merch and more</p>
        </div>
        <ul className="max-mobile:grid-cols-1 grid grid-cols-3 gap-5 max-[1150px]:grid-cols-2">
          <SponsorCard data={data.SponsorTop} />
          <SponsorCard
            data={data.SponsorBottom}
            status={false}
          />
        </ul>
      </div>
      <RopeIcon color={"black"} />
    </section>
  );
};
export default Sponsor;
