import { Fragment, useEffect } from "react";
import AboutHero from "../../Components/About-page/AboutHero/AboutHero";
import AboutListeners from "../../Components/About-page/AboutListeners/AboutListeners";
import * as AboutData from "./AboutData";
import Aos from "aos";
const AboutPage = () => {
  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <Fragment>
      <AboutHero
        data={AboutData.AboutHeroData}
        info={AboutData.AboutHeroInfo}
      />
      <AboutListeners
        data={AboutData.AboutListenersData}
        info={AboutData.AboutListenersInfo}
      />
    </Fragment>
  );
};
export default AboutPage;
