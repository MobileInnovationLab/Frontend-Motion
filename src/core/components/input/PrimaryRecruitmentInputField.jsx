import getCustomClassNameUtils from "@/core/utils/getCustomClassNameUtils";

const PrimaryRecruitmentInputField = ({
  label,
  name,
  className,
  placeholder,
  suffix,
  required = false,
}) => {
  return (
    <div className={getCustomClassNameUtils("flex flex-col", className)}>
      <label
        htmlFor=""
        className="text-[#6A6A6A] font-[inter] text-[14px] mb-2"
      >
        {label} {required && <span className="text-[#F82F1E]">*</span>}
      </label>
      <div className="flex relative">
        <input
          className="w-full bg-[#F6FAFD] border rounded-full border border-solid border-[#B9C0CD] focus:border-[#F82F1E] focus:outline-none py-3 px-8"
          type="text"
          placeholder={placeholder}
          name={name}
        />
        {suffix && (
          <span className="absolute right-5 top-[.9rem] text-left">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};

export default PrimaryRecruitmentInputField;
