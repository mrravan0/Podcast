import { Fragment } from "react";
import SingleHero from "../../Components/Single-Blog/SingleHero/SingleHero";
import SingleFeature from "../../Components/Single-Blog/SingleFeature/SingleFeature";
import SingleInfo from "../../Components/Single-Blog/SingleInfo/SingleInfo";
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
    </Fragment>
  );
};
export default SingleBlogPage;
