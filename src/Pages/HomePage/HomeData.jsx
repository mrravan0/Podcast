import SpotifyIcon from "../../Svg/Layout/SpotifyIcon";
import WaveIcon from "../../Svg/Layout/WaveIcon";
import StarGroupIcon from "../../Svg/Layout/StarGroupIcon";
import SmileIcon from "../../Svg/Layout/SmileIcon";
import YoutubeIcon from "../../Svg/Layout/YoutubeIcon";
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
    svg: <YoutubeIcon />,
  },
];

export const HeroInfo = {
  title: ["Your Daily", "Podcast"],
  description: [
    "We cover all kinds of categories and",
    "a weekly special guest.",
  ],
};

export const ListenInfo = [
  {
    image: "/Listen/photo1.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
    elementScroll: "fade-down-right",
  },
  {
    image: "/Listen/photo2.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio",
    elementScroll: "fade-down-left",
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
    svg: (
      <img
        src="/Hero/GoogleIcon.png"
        alt=""
      />
    ),
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
    svg: (
      <img
        src="/Hero/GoogleIcon.png"
        alt=""
      />
    ),
  },
  {
    titleLine: [
      "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.",
    ],
    image: "/Listeners/photo3.png",
    svg: <SpotifyIcon features={{ size: "20" }} />,
  },
];

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
    svg: <StarGroupIcon properties={'size-17'}/>,
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
    svg: <StarGroupIcon properties={'size-17'} />,
  },
  {
    title: "And much more!",
    description:
      "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    svg: <Vector5 properties={"w-16.75"} />,
  },
];

export const RecentData = [
  {
    title: "Pandemic Becoming Endemic",
    episode: "Eps. 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
    info: ["covid-19", "health"],
    status: true,
    img: "/Hero/photo1.png",
  },
  {
    title: "How to Deal with Self–Confidence",
    episode: "Eps. 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
    info: ["self-esteem", "health"],
    img: "/Hero/photo2.png",
  },
  {
    title: "Are you a Perplexed Mind Person?",
    episode: "Eps. 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
    info: ["mind-behaviour", "health"],
    img: "/Hero/photo3.png",
  },
  {
    title: "Type of Social Classes of People",
    episode: "Eps. 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
    info: ["social class", "wealth"],
    status: true,
    img: "/Hero/photo4.png",
  },
  {
    title: "Women's Rights? Is it alright?",
    episode: "Eps. 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
    info: ["women’s rights"],
    status: true,
    img: "/Hero/photo5.png",
  },
  {
    title: "Tesla Autopilot Controversy",
    episode: "Eps. 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. ",
    info: ["automation", "tech"],
    img: "/Hero/photo6.png",
  },
];

export const SponsorData = {
  SponsorTop: [
    {
      title: "Member",
      description:
        "Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.",
      price: "9.99",
    },
    {
      title: "Family",
      description:
        "Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.",
      price: "14.99",
      status: true,
    },
    {
      title: "Official",
      description:
        "Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.",
      price: "29.99",
    },
  ],
  SponsorBottom: [
    {
      title: "What’s included:",
      description: [
        "Exclusive Content",
        "5% Discount on Merch",
        "Join the Community",
        "Livestreaming Access",
      ],
    },
    {
      title: "What’s included:",
      description: [
        "Everything in Tier 1",
        "Free tickets to Events",
        "Limited Edition Merch",
        "Promote your Product",
        "Request Topic",
      ],
      status: true,
    },
    {
      title: "What’s included:",
      description: [
        "Everything in Tier 2",
        "Exclusive Badge on Livestreaming",
        "Become an Official Sponsor",
        "Early Access to All Episodes",
      ],
    },
  ],
};

export const ArticleData = [
  {
    title: "Setup your own podcast",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...",
    subtitle: "PODCAST",
    info: ["business", "startup"],
    date: "Sep 14, 2021",
    image: "/Article/photo1.png",
    status: true,
  },
  {
    title: "Doodle artwork 101",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...",
    subtitle: "TIPS & TRICK",
    info: ["art", "creative", "tips and trick"],
    date: "Sep 12, 2021",
    image: "/Article/photo2.png",
  },
];
