import { Typography } from "antd";
import { LinkOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Acquire = () => {
  return (
    <div className="acquire-section">
      <div className="icon-box">
        <LinkOutlined style={{ fontSize: 24, color: "black" }} />
      </div>
      <Title level={2}>Acquire</Title>
      <Paragraph>
        Let Alyson’s AI help you acquire customers from any media channel including  
        Google, Facebook, Meta, Affiliate Marketing, and Direct Mail. Alyson will get more  
        leads, guaranteed.
      </Paragraph>
    </div>
  );
};

export default Acquire;
