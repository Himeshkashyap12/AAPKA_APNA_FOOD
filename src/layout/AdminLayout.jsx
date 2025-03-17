import React, { useState } from "react";
import AdminSidebar from "../components/admin/adminsidebar/AdminSidebar";
import AdminHeader from "../components/admin/adminHeader/AdminHeader";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <div className="bg-primary">
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
            margin: "24px 16px",
            padding: 24,
            minHeight: "80.8vh",
            background: "#FBF2E9",
            borderRadius: "10px",
          }}
        >
         <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
