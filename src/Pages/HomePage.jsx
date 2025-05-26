import { Fragment } from "react";
import Hero from "../Components/Home-Page/Hero/Hero";
import Listen from "../Components/Home-Page/Listen/Listen";
import Listeners from "../Components/Home-Page/Listeners/Listeners";
import SpotifyIcon from "../Svg/Home-Page/SpotifyIcon";
const HomePage = () => {
  const ListenersData = [
    {
      titleLine: [
        "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.",
      ],
      image: "/Listeners/photo1.png",
      svg: <SpotifyIcon features={{ size: "20" }} />,
    },
    {
      titleLine: [
        "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.",
      ],
      image: "/Listeners/photo2.png",
      svg: <img src="/Hero/GoogleIcon.png" alt="" />,
    },
    {
      titleLine: [
        "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.",
      ],
      image: "/Listeners/photo3.png",
      svg: <SpotifyIcon features={{ size: "20" }} />,
    },
    {
      titleLine: [
        "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.",
      ],
      image: "/Listeners/photo1.png",
      svg: <SpotifyIcon features={{ size: "20" }} />,
    },
    {
      titleLine: [
        "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.",
      ],
      image: "/Listeners/photo2.png",
      svg: <img src="/Hero/GoogleIcon.png" alt="" />,
    },
    {
      titleLine: [
        "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.",
      ],
      image: "/Listeners/photo3.png",
      svg: <SpotifyIcon features={{ size: "20" }} />,
    },
  ];
  const HeroData = [
    { title: "Supported by:" },
    {
      title: "Spotify",
      svg: <SpotifyIcon features={{ color: "#1ed760", size: "35" }} />,
    },
    {
      title: "Google Podcast",
      image: "/Hero/GoogleIcon.png",
    },
    {
      title: "Google Podcast",
      image: "/Hero/YoutubeIcon.png",
    },
  ];
  return (
    <Fragment>
      <Hero data={HeroData} />
      <Listen />
      <Listeners data={ListenersData} />
    </Fragment>
  );
};
export default HomePage;
