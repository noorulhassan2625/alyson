import { Row, Col, Typography, Button } from "antd";
import { DatabaseOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const AudiencesSection = () => {
  const features = [
    {
      title: "Identify Your Best Prospects",
      description:
        "Access data from over 170 million homeowners to build powerful models that help you identify your best prospects.",
    },
    {
      title: "Customer Data Platform",
      description:
        "Leverage Alyson’s powerful customer data platform to save all your customer data in a low-cost AWS S3 bucket and migrate data from any source to any destination.",
    },
    {
      title: "CRM Data Cleanup & Enhancement",
      description:
        "Identify and clean bad data, append missing details, and add new records and participants to your database.",
    },
    {
      title: "Unified Customer Profiles",
      description:
        "Join your CRM data, email, phone, direct mail, and website visits into one 360-degree view of your prospects.",
    },
  ];

  return (
    <div className="audiences-container">
      <div className="audiences-content">
        {/* Header Section */}
        <div className="audiences-header">
          <DatabaseOutlined className="audiences-icon" />
          <Title level={2}>Audiences</Title>
          <Paragraph>
            De-anonymize your traffic and clean, enhance, and unify your CRM data with insights from 170M+ homeowner profiles.
          </Paragraph>
        </div>

        {/* Features Section */}
        <Row gutter={[24, 24]} justify="center">
          {features.map((feature, index) => (
            <Col key={index} xs={24} sm={12} md={6}>
              <div className="audience-card">
                <Title level={5}>{feature.title}</Title>
                <Paragraph>{feature.description}</Paragraph>
              </div>
            </Col>
          ))}
        </Row>

        {/* CTA Button */}
        <div className="audiences-btn-container">
          <Button type="primary" size="large" className="audiences-btn">
            Know Your Audience—Start Today!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AudiencesSection;
