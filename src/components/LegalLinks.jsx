import React from "react";
import { List } from "antd";
import { Link } from "react-router-dom";

const data = [
  { key: "about", label: "About", path: "/about" },
  { key: "privacy", label: "Privacy Policy", path: "/privacy-policy" },
  { key: "terms", label: "Terms of Use", path: "/terms-of-use" },
  { key: "cookie", label: "Cookie Policy", path: "/cookies" },
  { key: "contact", label: "Contact", path: "/contact" },
];

const LegalLinks = () => {
  return (
    <List
      className="legal-links"
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ textAlign: "center", flex: "1 1 auto" }}>
          <Link to={item.path}>{item.label}</Link>
        </List.Item>
      )}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 0,
      }}
    />
  );
};

export default LegalLinks;
