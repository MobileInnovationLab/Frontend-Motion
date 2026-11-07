// import styles from "../styles/components/bigTitle.module.scss";

const BigTitle = ({ children }) => {
  return (
    <div className="bg-cover bg-center bg-no-repeat w-full text-center pt-28 md:pt-32 pb-3">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl font-[rubik] text-slate-900 dark:text-[#F8FAFC] tracking-tight">
        {children}
      </h1>
    </div>
  );
};

export default BigTitle;

