import { Menu } from "antd";
import DarkButton from "./DarkButton";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/media/images/alysonlogo.svg" alt="Alyson Logo" width={'100%'} />
        {/* <span>Alyson</span> */}
      </div>
      <Menu mode="horizontal" className="menu">
        <Menu.Item className="nav-item" key="product">Product</Menu.Item>
        <Menu.Item className="nav-item" key="pricing">Pricing</Menu.Item>
        <Menu.Item className="nav-item" key="about">About</Menu.Item>
        <Menu.Item className="nav-item" key="connect">Connect</Menu.Item>
      </Menu>
      <DarkButton buttonText={'Let’s Talk'}/>
    </div>
  );
};

export default Navbar;
