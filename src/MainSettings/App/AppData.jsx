import AboutPage from "../../Pages/AboutPage/AboutPage";
import BlogPage from "../../Pages/BlogPage/BlogPage";
import EpisodesPage from "../../Pages/EpisodesPage/EpisodesPage";
import HomePage from "../../Pages/HomePage/HomePage";
import SingleBlogPage from "../../Pages/SingleBlogPage/SingleBlogPage";
import SpotifyIcon from "../../Svg/Layout/SpotifyIcon";
import YoutubeIcon from "../../Svg/Layout/YoutubeIcon";

export const HeaderData = [
  { title: "Episodes", color: "text-custom-red", to: "/" },
  { title: "Testimonials", color: "text-custom-red" },
  { title: "Pricing" },
  { title: "Features" },
  { title: "Blog", color: "text-custom-red", to: "/blog" },
];

export const FooterData = [
  { title: "About", to: "/about" },
  { title: "Episodes", status: true, to: "/" },
  { title: "Testimonials", status: true },
  { title: "Pricing" },
  { title: "Features" },
  { title: "Blog", to: "/blog" },
];

export const FooterInfo = [
  { image: "/Hero/GoogleIcon.png", description: "Google Podcast" },
  {
    svg: <SpotifyIcon features={{ size: "22" }} />,
    description: "Spotify",
  },
  { svg: <YoutubeIcon color={"red"} />, description: "Youtube" },
];

export const DataRouting = [
  { path: "/", element: <HomePage /> },
  { path: "about", element: <AboutPage /> },
  { path: "details", element: <EpisodesPage /> },
  { path: "blog", element: <BlogPage /> },
  { path: "single", element: <SingleBlogPage /> },
];
