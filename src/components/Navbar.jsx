import { useState } from "react";
import { Menu, Drawer, Collapse } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import {
  AppstoreOutlined,
  EditOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  TeamOutlined,
  MailOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import DarkButton from "./DarkButton";

const { Panel } = Collapse;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="/media/images/alysonlogo.svg" alt="Alyson Logo" width="100%" />
      </div>

      {/* Desktop Menu */}
      <Menu mode="horizontal" className="menu">
        <Menu.SubMenu className="nav-item" key="product" title="Product">
          <Menu.Item key="acquire" icon={<AppstoreOutlined />}>Acquire</Menu.Item>
          <Menu.Item key="create" icon={<EditOutlined />}>Create</Menu.Item>
          <Menu.Item key="checkout" icon={<ShoppingCartOutlined />}>Checkout</Menu.Item>
          <Menu.Item key="agent" icon={<UserOutlined />}>Agent</Menu.Item>
          <Menu.Item key="audience" icon={<TeamOutlined />}>Audience</Menu.Item>
          <Menu.Item key="activate" icon={<MailOutlined />}>Activate</Menu.Item>
          <Menu.Item key="identity" icon={<IdcardOutlined />}>Identity</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item className="nav-item" key="pricing">Pricing</Menu.Item>
        <Menu.Item className="nav-item" key="about">About</Menu.Item>
        <Menu.Item className="nav-item" key="connect">Connect</Menu.Item>
        <Menu.Item className="nav-item btn-nav" key="talk"> <DarkButton buttonText="Let’s Talk" /></Menu.Item>
      </Menu>

      {/* Mobile Menu Icon */}
      <MenuOutlined className="menu-icon" onClick={() => setVisible(true)} />

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setVisible(false)}
        open={visible}
      >
        <Collapse accordion>
          <Panel header="Product" key="1">
            <p><AppstoreOutlined /> Acquire - Let Alyson’s AI help you acquire customers from Google, Facebook, Meta, Affiliate marketing and Direct Mail</p>
            <p><EditOutlined /> Create - Use generative AI to create ads, build a website or create a landing page</p>
            <p><ShoppingCartOutlined /> Checkout - Boost sales with Alyson: Accelerated checkout boosting conversions by 50% with seamless one-tap payments.</p>
            <p><UserOutlined /> Agent - AI assistant handles calls, emails, texts, and data to boost efficiency and grow your business.</p>
            <p><TeamOutlined /> Audience - Unify CRM data with insights from 170M+ homeowners to build profiles and predict behavior.</p>
            <p><MailOutlined /> Activate - Re-engage old leads with personalized emails, texts, and ads. Identify engagement opportunities to turn inactive leads into new ones.</p>
            <p><IdcardOutlined /> Identity - Build identity and manage identity graphs for accurate insights.</p>
          </Panel>
          <Panel header="Pricing" key="2">
            <p>Basic</p>
            <p>Premium</p>
          </Panel>
          <Panel header="About" key="3">
            <p>Company</p>
            <p>Team</p>
          </Panel>
          <Panel header="Connect" key="4">
            <p>Contact Us</p>
            <p>Support</p>
          </Panel>
        </Collapse>
        <DarkButton buttonText="Let’s Talk" />
      </Drawer>
    </div>
  );
};

export default Navbar;
