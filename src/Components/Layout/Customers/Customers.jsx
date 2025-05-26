import "./Customers.scss";
const Customers = ({ data }) => {
  return (
    <div className="customers flex flex-col">
      <p className="text-custom-red text-8xl">“</p>
      <div className="flex flex-col items-center gap-y-10">
        <div className="">
          {data.titleLine?.map((item, index) => (
            <h3 className="customers__description" key={index}>
              {item}
            </h3>
          ))}
        </div>
        <div className="max-tablet:flex-col flex items-center gap-2.5">
          <div className="flex items-center gap-x-2.5">
            <img src={data.image} className="rounded-full" alt="" />
            <p className="font-medium">John Smith,</p>
          </div>
          <div className="flex items-center gap-x-2.5">
            {data.svg}
            <p>Social Community Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
