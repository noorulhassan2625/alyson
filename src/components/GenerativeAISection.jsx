import { Row, Col, Typography } from "antd";
import { MailOutlined, MessageOutlined, LayoutOutlined } from "@ant-design/icons";
import InfoCard from "./InfoCards";


const { Title, Paragraph } = Typography;

const GenerativeAISection = () => {
  const cardsData = [
    {
      icon: <MailOutlined />,
    },
    {
      icon: <LayoutOutlined />,
    },
    {
      icon: <MessageOutlined />,
    }
  ];

  return (
    <div className="generative-ai-container">
      <div className="generative-ai-content">
        <Row gutter={24} align="middle">
          {/* Left Text Section (Col-6) */}
          <Col xs={24} md={12}>
            <div className="text-content">
              <Title level={3}>Generative AI for Creative Excellence</Title>
              <Paragraph>
                Gen AI is powerful, but how do you earn profits? Alyson’s experiment tool runs experiments for you and learns how to drive more profit for you.
              </Paragraph>
            </div>
          </Col>

          {/* Right Info Cards (Col-6) */}
          <Col xs={24} md={12}>
            <div className="info-cards-container">
              {cardsData.map((card, index) => (
                <InfoCard key={index} {...card} />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GenerativeAISection;
