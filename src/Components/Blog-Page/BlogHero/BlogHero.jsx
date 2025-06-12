import HeroTop from "../../Layout/HeroTop/HeroTop";
import SearchIcon from "../../../Svg/Layout/SearchIcon";
const BlogHero = ({ data }) => {
  return (
    <section className="relative pt-22.5 pb-40">
      <HeroTop info={data}>
        <div className="absolute -bottom-10 z-10 left-1/2 -translate-x-1/2 flex w-full max-w-190 items-center gap-x-6.5 rounded-2xl border-2 border-solid border-black bg-white px-10 py-6.25 font-medium">
          <SearchIcon />
          <input
            className="w-full outline-hidden"
            type="text"
            placeholder="Search..."
          />
        </div>
      </HeroTop>
    </section>
  );
};
export default BlogHero;
