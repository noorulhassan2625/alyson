import { Card, Row, Col } from "antd";
import { RocketOutlined, TeamOutlined, AimOutlined } from "@ant-design/icons";

const features = [
  {
    icon: <RocketOutlined style={{ fontSize: 24, color: "#ff9800" }} />,
    title: "Real-Time Ad Optimization",
    description: "Adjust bids & placements based on AI-driven insights.",
  },
  {
    icon: <TeamOutlined style={{ fontSize: 24, color: "#2196F3" }} />,
    title: "Data-Driven Audience Building",
    description: "Build hyper-targeted audiences with rich customer insights.",
  },
  {
    icon: <AimOutlined style={{ fontSize: 24, color: "#673ab7" }} />,
    title: "Smart Customer Acquisition",
    description: "Target the right leads with AI-driven precision.",
  },
];

const FeatureCards = () => {
  return (
    <div className="feature-section">
      <Row gutter={[16, 16]} justify="center">
        {features.map((feature, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card className="feature-card">
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeatureCards;
