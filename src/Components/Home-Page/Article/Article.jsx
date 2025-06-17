import ArticleCard from "./ArticleCard";
import RopeIcon from "../../../Svg/Layout/RopeIcon";
const Article = ({ data, property }) => {
  return (
    <section className={`relative py-35 ${property}`}>
      <div className="container-custom flex flex-col gap-y-25">
        <div className="flex flex-col gap-y-5 text-center">
          <h1 className="title">Article and News</h1>
          <p className="subtitle">News, tips, tricks and more</p>
        </div>
        <div className="item-center max-mobile:flex-col flex justify-between gap-5">
          {data?.map((item, index) => (
            <ArticleCard
              data={item}
              key={index}
            />
          ))}
        </div>
        <button className="btn self-center px-12 py-5">BROWSE ALL</button>
      </div>
      <RopeIcon color={"#cd4631"} />
    </section>
  );
};
export default Article;
