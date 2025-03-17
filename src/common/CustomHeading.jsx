
import { Typography } from 'antd';
const { Title } = Typography;
const CustomHeading=({level,value,className})=>{        
    return (
        <>
         <Title className={`text-center ${className}`} level={level??1}>{value}</Title>
        </>
    )
}
export default CustomHeading;