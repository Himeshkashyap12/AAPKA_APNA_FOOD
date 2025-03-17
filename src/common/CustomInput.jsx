import { Input, Typography } from "antd";

const CustomInput=({onchange,value,placeholder,className,type})=>{
    return(
        <>
        <Input
        type={`${type??"text"}`}
        className={`px-2 py-2 rounded-lg opacity-70 font-semibold ${className}`}
        onChange={onchange}
        placeholder={placeholder}
        value={value}

        />
        </>
    )
}
export default CustomInput;