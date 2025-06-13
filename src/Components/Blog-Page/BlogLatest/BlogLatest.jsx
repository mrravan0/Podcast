import RopeIcon from "../../../Svg/Layout/RopeIcon";
import { Vector6 } from "../../../Svg/Layout/Vectors";
import ArticleCard from "../../Home-Page/Article/ArticleCard";
import { useState } from "react";
const BlogLatest = ({ data, info }) => {
  const [isClicked, setIsClicked] = useState(0);
  return (
    <section className="relative py-35 bg-white">
      <div className="container-custom flex flex-col gap-y-25">
        <div className="flex flex-col gap-y-20">
          <div className="title flex justify-center items-start text-center">
            <Vector6 properties={"max-w-15 w-full rotate-250"} />
            <h1 className="title">Latest Posts</h1>
          </div>
          <div className="">
            <ul className="border-custom-grey flex justify-between gap-x-2.5 border-b border-solid pb-7.5 font-medium">
              {info?.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setIsClicked(index)}
                  className={`${isClicked === index ? "text-custom-red" : "text-custom-grey"} cursor-pointer duration-200`}
                >
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {data?.map((item, index) => (
            <ArticleCard
              data={item}
              key={index}
            />
          ))}
        </div>
      </div>
      <RopeIcon color={"#cd4631"} />
    </section>
  );
};
export default BlogLatest;
