import SpotifyIcon from "../../Svg/Layout/SpotifyIcon";
import YoutubeIcon from "../../Svg/Layout/YoutubeIcon";

export const HeaderData = [
  { title: "Episodes", color: "text-custom-red" },
  { title: "Testimonials", color: "text-custom-red" },
  { title: "Pricing" },
  { title: "Features" },
  { title: "Blog", color: "text-custom-red" },
];

export const FooterData = [
  { title: "About" },
  { title: "Episodes", status: true },
  { title: "Testimonials", status: true },
  { title: "Pricing" },
  { title: "Features" },
  { title: "Blog" },
];

export const FooterInfo = [
  { image: "/Hero/GoogleIcon.png", description: "Google Podcast" },
  {
    svg: <SpotifyIcon features={{ size: "22" }} />,
    description: "Spotify",
  },
  { svg: <YoutubeIcon color={"red"} />, description: "Youtube" },
];
