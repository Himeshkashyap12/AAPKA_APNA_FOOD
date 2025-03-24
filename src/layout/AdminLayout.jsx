import React, { useState } from "react";
import AdminSidebar from "../components/admin/adminsidebar/AdminSidebar";
import AdminHeader from "../components/admin/adminHeader/AdminHeader";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout >
      <div className="bg-backgrondColor h-[100vh]">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ background: "var(--primary)" }}
        >
          <AdminSidebar collapsed={collapsed} />
        </Sider>
      </div>
      <Layout>
        <Header
          style={{
            padding: 0,
          }}
        >
          <AdminHeader setCollapsed={setCollapsed} collapsed={collapsed} />
        </Header>
        <Content
          style={{
            padding: " 30px 50px",
            background: "#FFF2F2",
          }}
        >
         <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
