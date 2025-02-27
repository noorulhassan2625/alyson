import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const LegalLinks = () => {
  return (
    <Menu className="legal-links" mode="horizontal" style={{ borderBottom: 'none' }}>
      <Menu.Item key="about">
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="privacy">
        <Link to="/privacy-policy">Privacy Policy</Link>
      </Menu.Item>
      <Menu.Item key="terms">
        <Link to="/terms-of-use">Terms of Use</Link>
      </Menu.Item>
      <Menu.Item key="cookie">
        <Link to="/cookies">Cookie Policy</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
  );
};

export default LegalLinks;
