import { Card, Row, Col, Button } from "antd";
import {
  RobotOutlined,
  TrophyOutlined,
  BankOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const cardData = [
  {
    icon: <RobotOutlined style={{ fontSize: 40 }} />,
    title: "AI-Driven Customer Acquisition",
    description:
      "Alyson uses her broad identity graph to deanonymize site traffic, grade homeowner quality, and adjust bids accordingly.",
  },
  {
    icon: <TrophyOutlined style={{ fontSize: 40 }} />,
    title: "Proprietary Campaign Grading",
    description:
      "Rank every campaign and ad, then ensure your budget goes to your highest-ranked ads.",
  },
  {
    icon: <BankOutlined style={{ fontSize: 40 }} />,
    title: "Pause or Reduce Bids",
    description:
      "Alyson’s AI assists in identifying ads that aren’t likely to succeed, helping you pause or reduce bids.",
  },
  {
    icon: <MessageOutlined style={{ fontSize: 40 }} />,
    title: "Better Feedback Loops",
    description:
      "Build world-class feedback loops and stop relying on pixels that miss up to 30% of events.",
  },
];

const AquireCards = () => {
  return (
    <div className="cards-section">
      <Row gutter={[24, 24]} justify="center">
        {cardData.map((card, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card className="feature-card" bordered={false}>
              <div className="card-content">
                <div className="icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Button type="primary" className="cta-btn">Optimize Your Ad Spend Now</Button>
    </div>
  );
};

export default AquireCards;
