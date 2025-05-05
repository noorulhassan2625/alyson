import { Row, Col, Typography, Divider } from "antd";
const { Title, Paragraph } = Typography;

const AudiencesSection = () => {


  const features = [
    {
      icon: (
        <>
          {' '}
          <img
            src='/media/images/Audience_icon_1.svg'
            alt={'iconImage'}
            width={'15%'}
          />
        </>
      ),
      title: "Identify Your Best Prospects",
      description:
        "Access data from over 170 million homeowners to build powerful models that help you identify your best prospects.",
    },
    {
      icon: (
        <>
          {' '}
          <img
            src='/media/images/Audience_icon_2.svg'
            alt={'iconImage'}
            width={'15%'}
          />
        </>
      ),
      title: "Customer Data Platform",
      description:
        "Use Alyson’s customer data platform to store data in a low-cost AWS S3 bucket and migrate it from any source to any destination.",
    },
    {
      icon: (
        <>
          {' '}
          <img
            src='/media/images/Audience_icon_3.svg'
            alt={'iconImage'}
            width={'15%'}
          />
        </>
      ),
      title: "CRM Data Cleanup & Enhancement",
      description:
        "Identify and clean bad data, append missing details, and add new records and properties to your database.",
    },
    {
      icon: (
        <>
          {' '}
          <img
            src='/media/images/Audience_icon_4.svg'
            alt={'iconImage'}
            width={'15%'}
          />
        </>
      ),
      title: "Unified Customer Profiles",
      description:
        "Join your CRM data, email, phone, direct mail, and website visits into one 360-degree view of your prospects.",
    },
  ];

  return (
    <div className="audiences-container">
      <div className="audiences-content"  style={{background:'url(/media/images/Audiences-bg.svg)'}}>
        {/* Header Section */}
        <div className='section-divider'>
          <Divider style={{ color: '#FFBB2A' }} />
        </div>
        <div className={'section-title-header'}>
          <img src='/media/images/Audiences.svg' alt='Alyson Logo' width='13%' />
          <Title level={2}>Audiences</Title>
        </div>
        <div className="audiences-header">
          <Paragraph>
            De-anonymize your traffic and clean, enhance, and unify your CRM data with insights from 170M+ homeowner profiles.
          </Paragraph>
        </div>
    <div className="audiences-contaniner-box" style={{margin:'0 120px'}}>
        {/* Features Section */}
        <Row gutter={[24, 24]} justify="center">
          {features.map((feature, index) => (
            <Col  className="audience-col" key={index} xs={24} sm={12} md={12} style={{textAlign: 'center' ,justifyContent: 'center'}}>
              <div className="audience-card">
                <div className="audience-icon">
                  {feature.icon}
                </div>
                <Title level={5}>{feature.title}</Title>
                <Paragraph>{feature.description}</Paragraph>
              </div>
            </Col>
          ))}
        </Row>
    </div>


        {/* CTA Button */}
        {/* <div className="audiences-btn-container">
        <DarkButton buttonText='Get a Demo' onClick={handleOpenModal} />
        <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div> */}
      </div>
    </div>
  );
};

export default AudiencesSection;
