import SmileIcon from "../../Svg/Layout/SmileIcon";
import { Vector5 } from "../../Svg/Layout/Vectors";
import SpotifyIcon from "../../Svg/Layout/SpotifyIcon";
import YoutubeIcon from "../../Svg/Layout/YoutubeIcon";

export const AboutHeroData = [
  { count: "76", description: "Community Members" },
  { count: "128", description: "Podcast Subscribers" },
  { count: "59", description: "Daily Listeners" },
];

export const AboutHeroInfo = {
  title: ["About", "Pod of Cast"],
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt",
    "ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.",
  ],
};

export const AboutListenersInfo = [
  {
    title:
      "Eu non diam phasellus vestibulum lorem. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Id diam vel quam elementum pulvinar.",
    description:
      "Elementum eu facilisis sed odio morbi quis commodo. Sed odio morbi quis commodo odio aenean sed adipiscing odio diam. uno fablotoson louw uit.",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in. Sit vel, senectus iaculis morbi. Amet interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante enim eget.",
    description: " Viverra at porttitor accumsan. Orci non here",
  },
];

export const AboutListenersData = [
  {
    name: ["Porter", "Severus"],
    host: "1",
    description:
      "Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor rarylet podofcast.",
    aos: "fade-up-right",
    image: "/Listeners/ListenersCard/photo1.png",
    svg: <SmileIcon properties={"max-w-40 max-laptop:max-w-32.5"} />,
  },
  {
    name: ["Marques", "Keith"],
    host: "2",
    description:
      "Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor rarylet podofcast.",
    aos: "fade-up-left",
    image: "/Listeners/ListenersCard/photo2.png",
    svg: <Vector5 properties={"max-w-40 max-laptop:max-w-32.5"} />,
  },
];

export const AboutSponsorData = [
  {
    title: "Google Podcast",
    description:
      "Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.",
    image: "/Hero/GoogleIcon.png",
  },
  {
    title: "Spotify",
    description:
      "Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.",
    svg: <SpotifyIcon features={{ size: "52" }} />,
  },
  {
    title: "Youtube",
    description:
      "Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.",
    svg: <YoutubeIcon features={{ color: "red", size: "52" }} />,
  },
];
