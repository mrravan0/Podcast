import { Fragment, useEffect } from "react";
import AboutHero from "../../Components/About-page/AboutHero/AboutHero";
import AboutListeners from "../../Components/About-page/AboutListeners/AboutListeners";
import AboutSponsor from "../../Components/About-page/AboutSponsor/AboutSponsor";
import Form from "../../Components/About-page/Form/Form";
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
      <AboutSponsor data={AboutData.AboutSponsorData} />
      <Form data={AboutData.FormData} />
    </Fragment>
  );
};
export default AboutPage;
