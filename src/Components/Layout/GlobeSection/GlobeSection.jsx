import RopeIcon from "../../../Svg/Layout/RopeIcon";
const GlobeSection = ({ children, properties, svgColor }) => {
  return (
    <section className={`relative ${properties}`}>
      {children}
      <RopeIcon color={svgColor} />
    </section>
  );
};

export default GlobeSection;
