import { Select, Space } from "antd";

const CustomSlect=({handleChange,options,defaultValue,className})=>{
    return(
        <>
         <Space wrap>
        <Select
        className="min-w-[130px]"
            defaultValue={`${defaultValue??options[0].value}`}
            onChange={handleChange}
            options={options}
        /> 
       </Space>
        </>
    )
}

export default CustomSlect;