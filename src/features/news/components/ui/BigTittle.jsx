const BigTitle = ({ children }) => {
  return (
    <div className="bg-cover bg-center bg-no-repeat w-full text-start pt-32 md:pt-32 md:pb-3">
      <h1 className="font-extrabold text-2xl md:text-4xl lg:text-3xl font-[inter] text-center">
        {children}
      </h1>
    </div>
  );
};

export default BigTitle;
