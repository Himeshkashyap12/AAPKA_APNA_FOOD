import { Menu ,Switch } from "antd";
import CustomText from "../../../common/CustomText";
import "./adminsidebar.css";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const AdminSidebar = ({ collapsed }) => {
  const navigate=useNavigate();
  console.log(collapsed);

  const sidebarItems = [
    {
      key: "1",
      path:"admin/menu",
      icon: <UserOutlined style={{ color: "#443627" }} />,
      label: !collapsed && (
        <CustomText className={"font-semibold text-secondary"} value="Menu" />
      ),
    },
    {
      key: "2",
      path:"admin/store",
      icon: <UserOutlined style={{ color: "#443627" }} />,
      label: !collapsed && (
        <CustomText className={"font-semibold text-secondary"} value="Store" />
      ),
    },
    {
      key: "3",
      path:"admin/qrcode",
      icon: <UserOutlined style={{ color: "#443627" }} />,
      label: !collapsed && (
        <CustomText
          className={"font-semibold text-secondary"}
          value="QR code"
        />
      ),
    },
    {
      key: "4",
      path:"admin/orders",
      icon: <UserOutlined style={{ color: "#443627" }} />,
      label: !collapsed && (
        <CustomText
          className={"font-semibold text-secondary "}
          s
          value="Orders"
        />
      ),
    },
    {
      key: "5",
      path:"admin/analytics",
      icon: <UserOutlined style={{ color: "#443627" }} />,
      label: !collapsed && (
        <CustomText
          className={"font-semibold text-secondary "}
          value="Analytics"
        />
      ),
    },
    {
      key: "6",
      path:"admin/reports",
      icon: <UserOutlined style={{ color: "#443627" }} />,
      label: !collapsed && (
        <CustomText
          className={"font-semibold text-secondary "}
          s
          value="Reports"
        />
      ),
    },
    {
      key: "7",
      path:"admin/setting",
      icon: <UserOutlined style={{ color: "#443627" }} />,
      label: !collapsed && (
        <CustomText
          className={"font-semibold text-secondary "}
          value="Settings"
        />
      ),
      children: [
        {
          key: "10",
          icon: <UserOutlined style={{ color: "#443627" }} />,
          path:"admin/accounts",
          label: !collapsed && (
            <CustomText
              className={"font-semibold text-secondary "}
              value="Action"
            />
          ),
        },]
    
    },
  ];
  const handleSidebar=(e)=>{
    const selectedItem = sidebarItems.find(item => item.key === e.key) ||
    sidebarItems.flatMap(item => item.children || []).find(child => child.key === e.key);
    debugger
    
  if (selectedItem?.path) {
    navigate(selectedItem.path);
  }
     

  }

  return (
    <div className="admin-sidebar ">
      <div className="admin-logo flex justify-center py-2">
        <div className=" size-[50px] rounded-full bg-white"></div>
      </div>
      <div className="admin-menu">
        <Menu
          onClick={(e) => {handleSidebar(e)}}
          defaultSelectedKeys={["1"]}
          items={sidebarItems}
          className="bg-primary "
          mode="inline"
        />
      </div>
    </div>
  );
};
export default AdminSidebar;
