import { Fragment, useEffect } from "react";
import BlogHero from "../../Components/Blog-Page/BlogHero/BlogHero";
import BlogLatest from "../../Components/Blog-Page/BlogLatest/BlogLatest";
import * as BlogData from "./BlogData";
import Aos from "aos";

const BlogPage = () => {
  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <Fragment>
      <BlogHero data={BlogData.BlogHeroInfo} />
      <BlogLatest
        data={BlogData.BlogLatestData}
        info={BlogData.BlogLatestInfo}
      />
    </Fragment>
  );
};
export default BlogPage;
