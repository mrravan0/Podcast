import { Fragment } from "react";
import AboutHero from "../../Components/About-page/AboutHero/AboutHero";
import * as AboutData from "./AboutData";
const AboutPage = () => {
  return (
    <Fragment>
      <AboutHero
        data={AboutData.AboutHeroData}
        info={AboutData.AboutHeroInfo}
      />
    </Fragment>
  );
};
export default AboutPage;
