import { Avatar, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import CustomInput from "../../../common/CustomInput";
const AdminHeader = ({ setCollapsed, collapsed }) => {
  return (
    <div className="flex justify-between bg-primary pe-10">
      <div className="flex gap-5">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <div className="w-[500px]">
          <CustomInput
            placeholder={"Search"}
            className={" !rounded-full w-full"}
          />
        </div>
      </div>

      <div>
        <Avatar />
      </div>
    </div>
  );
};
export default AdminHeader;
