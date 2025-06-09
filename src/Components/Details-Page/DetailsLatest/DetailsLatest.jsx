import { useState } from "react";
import RopeIcon from "../../../Svg/Layout/RopeIcon";
import EpisodeCard from "../../Layout/EpisodesCard/EpisodesCard";
import { Vector6, Vector1 } from "../../../Svg/Layout/Vectors";
const DetailsLatest = ({ data }) => {
  const [isClicked, setIsClicked] = useState(0);
  const fakeDetailsData = [
    "All",
    "Business",
    "Comedy",
    "Education",
    "Health",
    "News",
    "Tech",
  ];
  return (
    <section className="relative bg-white py-35">
      <div className="container-custom flex flex-col gap-y-25">
        <div className="flex items-start justify-center text-center">
          <Vector6 properties={"w-15 rotate-250"} />
          <h1 className="title">Latest Episode</h1>
        </div>
        <ul className="border-custom-grey flex justify-between gap-x-2.5 border-b border-solid font-medium pb-7.5">
          {fakeDetailsData?.map((item, index) => (
            <li
              key={index}
              onClick={() => setIsClicked(index)}
              className={`${isClicked === index ? "text-custom-red" : "text-custom-grey"} cursor-pointer duration-200`}
            >
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <div className="max-tablet:grid-cols-1 grid grid-cols-2 gap-5">
          {data?.map((item, index) => (
            <EpisodeCard
              data={item}
              key={index}
            />
          ))}
        </div>
      </div>
      <RopeIcon color={"#cd4631"} />
      <Vector1
        features={{
          color: "#cd4631",
          properties:
            "absolute -top-10 right-0 max-w-40 w-full max-mobile-s:w-20",
        }}
      />
    </section>
  );
};
export default DetailsLatest;
