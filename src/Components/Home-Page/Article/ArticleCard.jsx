import { useNavigate } from "react-router-dom";

const ArticleCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      data-aos={data.status ? "zoom-in-right" : "zoom-in-left"}
      onClick={() => navigate("/single", { state: data })}
    >
      <div className="flex cursor-pointer flex-col gap-y-10 rounded-lg border-2 border-solid border-black bg-white p-4 transition-shadow duration-300 hover:shadow-[10px_10px_0_0_#000] h-full">
        <img
          src={data.image}
          alt=""
        />
        <div className="after:bg-custom-grey relative flex flex-col gap-y-5 after:relative after:-bottom-5 after:h-0.5 after:w-full">
          <div className="flex flex-col gap-y-2">
            <p className="max-laptop:text-sm text-custom-grey text-lg">
              {data.subtitle}
            </p>
            <h2
              className={`text-[clamp(21px,2.5vw,48px)] ${data.status ? "text-custom-red" : "text-black"}`}
            >
              {data.title}
            </h2>
          </div>
          <p className="max-laptop:text-sm text-custom-grey text-lg font-medium">
            {data.description}
          </p>
        </div>
        <div className="max-tablet:flex-col flex items-center justify-between gap-y-2.5">
          <div className="max-laptop:gap-1.5 max-mobile:flex-col flex items-center gap-2">
            {data?.info.map((item, index) => (
              <div
                className="border-custom-grey text-custom-grey rounded-sm border-2 border-solid px-3 py-1.5"
                key={index}
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
          <p className="text-custom-grey">{data.date}</p>
        </div>
      </div>
    </div>
  );
};
export default ArticleCard;
