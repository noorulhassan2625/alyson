import { Row, Col, Typography, Button, Divider } from "antd";
import DarkButton from "./DarkButton";

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
        <div className='section-divider'>
          <Divider style={{ color: '#FFBB2A' }} />
        </div>
        <div className={'section-title-header'}>
          <img src='/media/images/Audiences.svg' alt='Alyson Logo' width='10%' />
          <Title level={2}>Audiences</Title>
        </div>
        <div className="audiences-header">
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
          <DarkButton buttonText="Know Your Audience—Start Today!" />
        </div>
      </div>
    </div>
  );
};

export default AudiencesSection;
