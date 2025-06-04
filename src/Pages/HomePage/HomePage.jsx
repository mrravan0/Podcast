import { Fragment, useEffect } from "react";
import Hero from "../../Components/Home-Page/Hero/Hero";
import Listen from "../../Components/Home-Page/Listen/Listen";
import Listeners from "../../Components/Home-Page/Listeners/Listeners";
import Membership from "../../Components/Home-Page/Membership/Membership";
import Recent from "../../Components/Home-Page/Recent/Recent";
import Sponsor from "../../Components/Home-Page/Sponsor/Sponsor";
import Article from "../../Components/Home-Page/Article/Article";
import Aos from "aos";
import * as HomeData from "./HomeData";
const HomePage = () => {
  useEffect(() => {
    Aos.refresh();
  });

  return (
    <Fragment>
      <Hero
        data={HomeData.HeroData}
        info={HomeData.HeroInfo}
      />
      <Listen
        info={HomeData.ListenInfo}
        data={HomeData.ListenData}
      />
      <Listeners data={HomeData.ListenersData} />
      <Membership data={HomeData.MembershipData} />
      <Recent data={HomeData.RecentData} />
      <Sponsor data={HomeData.SponsorData} />
      <Article data={HomeData.ArticleData} />
    </Fragment>
  );
};
export default HomePage;
