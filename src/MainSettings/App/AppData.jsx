import SpotifyIcon from "../../Svg/Layout/SpotifyIcon";
import YoutubeIcon from "../../Svg/Layout/YoutubeIcon";

export const HeaderData = [
  { title: "Episodes", color: "text-custom-red", to: '/' },
  { title: "Testimonials", color: "text-custom-red" },
  { title: "Pricing" },
  { title: "Features" },
  { title: "Blog", color: "text-custom-red", to: '/blog' },
];

export const FooterData = [
  { title: "About" , to: '/about'},
  { title: "Episodes", status: true , to: '/'},
  { title: "Testimonials", status: true },
  { title: "Pricing" },
  { title: "Features" },
  { title: "Blog", to: '/blog' },
];

export const FooterInfo = [
  { image: "/Hero/GoogleIcon.png", description: "Google Podcast" },
  {
    svg: <SpotifyIcon features={{ size: "22" }} />,
    description: "Spotify",
  },
  { svg: <YoutubeIcon color={"red"} />, description: "Youtube" },
];
