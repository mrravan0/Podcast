import { Fragment, useEffect } from "react";
import DetailsHero from "../../Components/Details-Page/DetailsHero/DetailsHero";
import DetailsLatest from "../../Components/Details-Page/DetailsLatest/DetailsLatest";
import * as HomeData from "../HomePage/HomeData";
import Aos from "aos";

const EpisodesPage = () => {
  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <Fragment>
      <DetailsHero />
      <DetailsLatest data={HomeData.RecentData} />
    </Fragment>
  );
};
export default EpisodesPage;
