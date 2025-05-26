import GlobeSection from "../../Layout/GlobeSection/GlobeSection";
import Customers from "../../Layout/Customers/Customers";
import SpotifyIcon from "../../../Svg/Home-Page/SpotifyIcon";
import Vector1 from "../../../Svg/Home-Page/Vector1";
import Vector2 from "../../../Svg/Home-Page/Vector2";
import "./Listen.scss";
const Listen = () => {
  const ListenInfo = [
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
  const ListenData = {
    titleLine: [
      "One of the best daily podcasts that",
      "covers every topic on Spotify.",
    ],
    image: "/Listen/photo3.png",
    svg: <SpotifyIcon features={{ size: "16" }} />,
  };
  return (
    <GlobeSection properties={"listen py-35 bg-white"} svgColor={"black"}>
      <div className="container-custom flex flex-col gap-y-25 text-center">
        <h1 className="listen__title leading-0.3 self-center">
          Talk. Listen. Get inspired by every minute of it.
        </h1>
        <div className="max-mobile:flex-col max-mobile:gap-y-10 flex items-center justify-between">
          {ListenInfo?.map((item, index) => (
            <div
              className="max-mobile:w-full flex w-2/5 flex-col items-center gap-y-10"
              key={index}
            >
              <img src={item.image} alt="" />
              <h2 className="listen__subtitle leading-0.4 font-medium">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
        <div className="bg-custom-cream min-laptop:mx-11 max-mobile:mx-0 relative mt-5 rounded-lg py-10 max-[1280px]:mx-4">
          <Customers data={ListenData} />
          <Vector1
            features={{
              color: "#CD4631",
              properties:
                "absolute top-1/2 -left-16 w-31 max-[1280px]:w-20 max-[1280px]:-left-9 max-mobile:hidden",
            }}
          />
          <Vector2
            features={{
              properties:
                "absolute -top-14 -right-10 w-37 max-[1280px]:w-20 max-[1280px]:-top-5 max-[1280px]:-right-5",
            }}
          />
        </div>
      </div>
    </GlobeSection>
  );
};

export default Listen;
