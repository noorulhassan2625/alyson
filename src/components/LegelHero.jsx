import React from "react";
import { Typography, Divider } from "antd";

const { Title } = Typography;

const LegalHero = ({title}) => {
  return (
    <div className="legal-hero">
      <Title className="legal-hero-title" level={2}>{title}</Title>
      <Divider className="legal-divider" />
    </div>
  );
};

export default LegalHero;
