import { Col, Input, Row } from "antd"
import CustomInput from "../../../common/CustomInput"
import CustomButton from "../../../common/CustomButton";

const AddCategory=()=>{
    return(
        <>
        <div className="add-category flex flex-col gap-5 pt-5">
        <Row gutter={[20, 20]}>
            
            <Col span={12}>
              <Input 
                type="file"
                className={"w-full py-2 shadow-xl"}
              />
            </Col>
            <Col span={12}>
            <CustomInput
              placeholder={"Enter category name"}
              className={"w-full"}
            />
          </Col>
            
          </Row>
        <Row gutter={[20, 20]}>

         
       
        </Row>
        <div className="flex justify-center">
          <CustomButton value={"Add category"}/>
          </div>
        </div>
        </>
    )
}

export default AddCategory;