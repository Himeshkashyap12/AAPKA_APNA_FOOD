import Icon from "@ant-design/icons";
import { Avatar } from "antd";

const Store=()=>{
    return(
        <>
       <div >
  <label  htmlFor="myInput"><Avatar/></label>
  <input
    id="myInput"
    style={{display:'none'}}
    type={"file"}
  />
</div>
        </>
    )
}
export default Store   ;