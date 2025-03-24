import { Row } from "antd";
import "./auth.css";
import CustomHeading from "../../../common/CustomHeading";
import CustomInput from "../../../common/CustomInput";
import CustomButton from "../../../common/CustomButton";
const AdminLogin = () => {
  return (
    <div className="admin-signup px-24 h-[100vh] flex flex-col justify-center ">
      <Row justify={"end"}>
        <div className="w-[40%]">
          <CustomHeading
            className={"!text-white"}
            level={1}
            value={"AAPKA APNA FOOD"}
          />
          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-md">
              <CustomInput  className="" placeholder={"Enter your Email"} />
            </div>
            <div className="bg-white rounded-md">
              <CustomInput placeholder={"Enter your password"} />
            </div>
            <CustomButton className="w-full" value={"Log in"} />
          </div>
        </div>
      </Row>
    </div>
  );
};
export default AdminLogin;
