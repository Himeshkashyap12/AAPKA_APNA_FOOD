import { Select, Space } from "antd";

const CustomSlect=({handleChange,options,defaultValue,className})=>{
    return(
        <>
         <Space wrap>
        <Select
            className={`w-[130px] rounded-md h-[45px] shadow-xl ${className}`}
            defaultValue={`${defaultValue??options[0]?.value}`}
            onChange={handleChange}
            options={options}
        /> 
       </Space>
        </>
    )
}

export default CustomSlect;