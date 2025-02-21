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
    </Layout>
  );
};

export default MainLayout;
