import { Fragment, memo } from "react";

const SponsorCard = memo(({ data, status = true }) => {
  return (
    <Fragment>
      {data?.map((item, index) => (
        <li
          key={index}
          className={`max-laptop:px-10 max-mobile:px-5 flex flex-col rounded-lg border-2 border-solid px-13.5 ${item?.status ? "border-custom-red bg-[#f7ede8]" : "border-black"} ${status ? "gap-y-22.5 pt-15 pb-7.5" : "gap-y-5 py-10"} `}
        >
          {status ? (
            <Fragment>
              <div className="flex flex-col gap-y-5">
                <div className="flex items-center justify-between gap-x-0.5">
                  <h2 className="info">{item.title}</h2>
                  {item.status && (
                    <h3 className="bg-custom-red max-laptop:text-xs rounded-sm px-1.5 py-1.25 text-white">
                      MOST POPULAR
                    </h3>
                  )}
                </div>
                <p className="text-custom-grey max-laptop:text-sm text-lg">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center justify-between gap-x-2.5">
                <button className="btn max-tablet:px-9 px-12 py-5">
                  SUBSCRIBE
                </button>
                <p className="max-laptop:text-[22px] text-custom-red text-3xl">
                  ${item.price}
                  <br />
                  <span className="text-custom-grey max-laptop:text-sm text-lg">
                    /month
                  </span>
                </p>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <h2 className="max-laptop:text-sm text-custom-grey text-lg">
                {item.title}
              </h2>
              <ul className="flex list-disc flex-col gap-y-2.5">
                {item.description?.map((info, idx) => (
                  <li
                    className="font-medium"
                    key={idx}
                  >
                    {info}
                  </li>
                ))}
              </ul>
            </Fragment>
          )}
        </li>
      ))}
    </Fragment>
  );
});

export default SponsorCard;
