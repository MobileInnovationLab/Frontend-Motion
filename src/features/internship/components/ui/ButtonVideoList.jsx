const Button = ({ text, icon }) => {
  return (
    <button className="ml-auto flex items-center bg-[#F82F1E] rounded-lg shadow-lg p-2 cursor-pointer transform transition duration-300 active:scale-95">
      <h4 className="md:flex hidden text-[inter] text-sm text-white font-bold mr-2">
        {text}
      </h4>
      {icon && <img src={icon} alt="icon" />}
    </button>
  );
};

export default Button;
