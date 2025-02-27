import React from "react";
import { Typography, Divider } from "antd";

const { Title } = Typography;
function LegalContentTitle({title}) {
  return (
    <div className="legal-title">
       <Title className="legal-content-title" level={2}>{title}</Title>
        <Divider className="legal-divider" />
    </div>
  )
}

export default LegalContentTitle
