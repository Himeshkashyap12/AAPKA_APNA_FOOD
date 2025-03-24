import { Avatar, Badge, Button, Input } from "antd";
import { BellOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import profile from "../../../assets/profile/profile.jpeg";
const AdminHeader = ({ setCollapsed, collapsed }) => {
  return (
    <div className="flex justify-between bg-backgrondColor pe-10">
      <div className="flex gap-5">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <div className="w-[500px]">
          <Input
            placeholder={"Search"}
            className={" !rounded-full w-full"}
          />
        </div>
      </div>

      <div className="flex gap-5 items-center">
      <Badge size="small" count={3} color="#E65C5C"  className="cursor-pointer">
      <BellOutlined  style={{fontSize:"24px", color:"#333333"}} />
        </Badge>
        <Avatar className="cursor-pointer"  src={profile} />
      </div>
    </div>
  );
};
export default AdminHeader;
