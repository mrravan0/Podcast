import { Fragment } from "react";
import BlogHero from "../../Components/Blog-Page/BlogHero/BlogHero";
import * as BlogData from "./BlogData";

const BlogPage = () => {
  return (
    <Fragment>
      <BlogHero data={BlogData.BlogHeroInfo} />
    </Fragment>
  );
};
export default BlogPage;
