import React from "react";
import { Layout } from "antd";
import Navbar from "../components/Navbar";
import AppRoutes from "../routes/AppRoutes";

const { Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ background: 'transparent' }}>
      <Navbar />
      <Content style={{ padding: "20px" }}>
        <AppRoutes />
      </Content>
      <Footer style={{ textAlign: "center" }}>My React App ©2025</Footer>
    </Layout>
  );
};

export default MainLayout;
