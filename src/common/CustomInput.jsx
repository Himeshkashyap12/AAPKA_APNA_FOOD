import { Input, Typography } from "antd";
import CustomHeading from "./CustomHeading";
import CustomText from "./CustomText";

const CustomInput = ({ onchange, value, placeholder, className, type }) => {
  return (
    <>
      <div class="relative">
        <Input
          type={`${type ?? "text"}`}
          className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent shadow-xl  appearance-none dark:text-white dark:border-primary dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer  py-2 rounded-lg opacity-70 font-semibold ${className}`}
          onChange={onchange}
          placeholder={placeholder}
          value={value}
        />

        <CustomText
          value={placeholder}
          className="absolute text-sm text-gray-300 dark:text-primary duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 text-[14px]"
        />
      </div>
    </>
  );
};
export default CustomInput;
