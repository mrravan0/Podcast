const Button = ({ text, className }) => {
  return (
    <button
      className={`shadow-custom w-max cursor-pointer rounded-lg border-solid border-black bg-black text-[clamp(14px,1.09375vw,21px)] text-white duration-300 hover:scale-110 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
