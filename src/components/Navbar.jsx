import { useState } from "react";
import { Menu, Drawer, Collapse } from "antd";
import { MenuOutlined } from "@ant-design/icons";
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
        <Menu.Item className="nav-item" key="product">Product</Menu.Item>
        <Menu.Item className="nav-item" key="pricing">Pricing</Menu.Item>
        <Menu.Item className="nav-item" key="about">About</Menu.Item>
        <Menu.Item className="nav-item" key="connect">Connect</Menu.Item>
        <Menu.Item className="nav-item btn-nav" key="connect"> <DarkButton buttonText="Let’s Talk" /></Menu.Item>
       
      </Menu>

      {/* Mobile Menu Icon */}
      <MenuOutlined className="menu-icon" onClick={() => setVisible(true)} />

      {/* Mobile Drawer with Accordions */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <Collapse accordion>
          <Panel header="Product" key="1">
            <p>Product 1</p>
            <p>Product 2</p>
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

      {/* <DarkButton buttonText="Let’s Talk" /> */}
    </div>
  );
};

export default Navbar;
