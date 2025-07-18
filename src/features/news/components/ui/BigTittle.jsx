const BigTitle = ({ children }) => {
  return (
    <div className="bg-cover bg-center bg-no-repeat w-full text-start pt-32 md:pt-32 md:pb-3">
      <h1 className="font-bold text-4xl md:text-4xl lg:text-5xl font-[inter]">
        {children}
      </h1>
    </div>
  );
};

export default BigTitle;
