import { Menu, Button } from "antd";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Alyson Logo" width={40} height={40} />
        <span>Alyson</span>
      </div>
      <Menu mode="horizontal" className="menu">
        <Menu.Item key="product">Product</Menu.Item>
        <Menu.Item key="pricing">Pricing</Menu.Item>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="connect">Connect</Menu.Item>
      </Menu>
      <Button type="primary" className="cta-btn">Let’s Talk</Button>
    </div>
  );
};

export default Navbar;
