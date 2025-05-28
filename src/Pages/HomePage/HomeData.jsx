import SpotifyIcon from "../../Svg/Home-Page/SpotifyIcon";
import WaveIcon from "../../Svg/Layout/WaveIcon";
import StarGroupIcon from "../../Svg/Layout/StarGroupIcon";
import SmileIcon from "../../Svg/Layout/SmileIcon";
import { Vector5 } from "../../Svg/Layout/Vectors";
export const HeroData = [
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
export const ListenersData = [
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
export const ListenInfo = [
  {
    image: "/Listen/photo1.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
  },
  {
    image: "/Listen/photo2.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
  },
];
export const ListenData = {
  titleLine: [
    "One of the best daily podcasts that",
    "covers every topic on Spotify.",
  ],
  image: "/Listen/photo3.png",
  svg: <SpotifyIcon features={{ size: "16" }} />,
};
export const MembershipData = [
  {
    title: "Topic by Request",
    description:
      "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    svg: <WaveIcon />,
  },
  {
    title: "Exclusive Content",
    description:
      "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    svg: <StarGroupIcon />,
  },
  {
    title: "Join the Community",
    description:
      "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    svg: <SmileIcon />,
  },
  {
    title: "Topic by Request",
    description:
      "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    svg: <WaveIcon />,
  },
  {
    title: "Exclusive Content",
    description:
      "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    svg: <StarGroupIcon />,
  },
  {
    title: "And much more!",
    description:
      "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    svg: <Vector5 />,
  },
];
