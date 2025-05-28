import { Fragment } from "react";
import Hero from "../../Components/Home-Page/Hero/Hero";
import Listen from "../../Components/Home-Page/Listen/Listen";
import Listeners from "../../Components/Home-Page/Listeners/Listeners";
import Membership from "../../Components/Home-Page/Membership/Membership";
import * as HomeData from "./HomeData";
const HomePage = () => {
  return (
    <Fragment>
      <Hero data={HomeData.HeroData} />
      <Listen info={HomeData.ListenInfo} data={HomeData.ListenData} />
      <Listeners data={HomeData.ListenersData} />
      <Membership data={HomeData.MembershipData} />
    </Fragment>
  );
};
export default HomePage;
