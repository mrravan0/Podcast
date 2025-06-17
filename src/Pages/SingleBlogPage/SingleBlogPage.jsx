import { Fragment } from "react";
import SingleHero from "../../Components/Single-Blog/SingleHero/SingleHero";
import SingleFeature from "../../Components/Single-Blog/SingleFeature/SingleFeature";
import SingleInfo from "../../Components/Single-Blog/SingleInfo/SingleInfo";
import Article from "../../Components/Home-Page/Article/Article";
import { ArticleData } from "../HomePage/HomeData";
import * as SingleBlogData from "./SingleBlogData";

const SingleBlogPage = () => {
  return (
    <Fragment>
      <SingleHero />
      <SingleFeature />
      <SingleInfo
        data={SingleBlogData.SingleInfoData}
        info={SingleBlogData.SingleInfoInfo}
      />
      <Article data={ArticleData} />
    </Fragment>
  );
};
export default SingleBlogPage;
