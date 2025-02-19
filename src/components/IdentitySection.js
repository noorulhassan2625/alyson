import { Row, Col, Typography, Button } from "antd";
import { IdcardOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const IdentitySection = () => {
  const features = [
    {
      title: "Comprehensive Identity Matching",
      description:
        "Access over 172 million profiles and match data to create tailored identity and entity profiles for your business needs.",
    },
    {
      title: "Household Expansion",
      description:
        "Expand your identity graph to include spouses and other high-propensity user segments.",
    },
    {
      title: "Expand Ad Platform Audiences",
      description:
        "Increase match rates by as much as 50%, so when you have high-value prospects, platforms can show them your ads and boost revenues.",
    },
    {
      title: "Automated Segment and Score",
      description:
        "Alyson data scientists score and segment your data automatically. Just connect your data and get real-time dashboards comparing your performance to other companies in your industry.",
    },
  ];

  return (
    <div className="identity-container">
      <div className="identity-content">
        {/* Header Section */}
        <div className="identity-header">
          <IdcardOutlined className="identity-icon" />
          <Title level={2}>Identity</Title>
          <Paragraph>
            Build tailored profiles and leverage Alyson’s 172M identity graph members to ensure accurate data for personalized communications and targeted campaigns.
          </Paragraph>
        </div>

        {/* Features Section */}
        <Row gutter={[24, 24]} justify="center">
          {features.map((feature, index) => (
            <Col key={index} xs={24} sm={12} md={6}>
              <div className="identity-card">
                <Title level={5} className="identity-title">
                  {feature.title}
                </Title>
                <Paragraph className="identity-description">
                  {feature.description}
                </Paragraph>
              </div>
            </Col>
          ))}
        </Row>

        {/* Call to Action Button */}
        <div className="identity-button">
          <Button type="primary" size="large">Unlock Accurate Targeting!</Button>
        </div>
      </div>
    </div>
  );
};

export default IdentitySection;
