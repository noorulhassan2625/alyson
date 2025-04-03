import { Row, Col, Typography, Divider } from "antd";

const { Title, Paragraph } = Typography;

const IdentitySection = () => {
  const features = [
    {
      icon: (
        <>
          {' '}
          <img
            src='/media/images/Identity_icon_1.svg'
            alt={'iconImage'}
            width={'20%'}
          />
        </>
      ),title: "Comprehensive Identity Matching",
      description:
        "Access over 172 million profiles and match data to create tailored identity and entity profiles for your business needs.",
    },
    {
      icon: (
        <>
          {' '}
          <img
            src='/media/images/Identity_icon_2.svg'
            alt={'iconImage'}
            width={'20%'}
          />
        </>
      ),
      title: "Household Expansion",
      description:
        "Expand your identity graph to include spouses and other high-propensity user segments.",
    },
    {
      icon: (
        <>
          {' '}
          <img
            src='/media/images/Identity_icon_3.svg'
            alt={'iconImage'}
            width={'20%'}
          />
        </>
      ),
      title: "Expand Ad Platform Audiences",
      description:
        "Increase match rates by as much as 50%, so when you have high-value prospects, platforms can show them your ads and boost revenues.",
    },
    {
      icon: (
        <>
          {' '}
          <img
            src='/media/images/Identity_icon_4.svg'
            alt={'iconImage'}
            width={'20%'}
          />
        </>
      ),
      title: "Automated Segment and Score",
      description:
        "Our data scientists score and segment your data automatically. Connect it to get real-time dashboards benchmarking your industry.",
    },
  ];

//   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
// const handleOpenModal = () => {
//   setIsModalOpen(true);
// };

// const handleCloseModal = () => {
//   setIsModalOpen(false);
// };


  return (
    <div className="identity-section" style={{background:'white'}}>
    <div className="identity-container" style={{background:'url(/media/images/Identity-bg.svg)'}}>
      <div className="identity-content">
        {/* Header Section */}
        <div className='section-divider'>
          <Divider style={{ color: '#FFBB2A' }} />
        </div>
        <div className={'section-title-header'}>
          <img src='/media/images/activate.svg' alt='Alyson Logo' width='13%' />
          <Title level={2}>Identity</Title>
        </div>
        <div className="identity-header">
          {/* <IdcardOutlined className="identity-icon" />
          <Title level={2}>Identity</Title> */}
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
                  <div className="identity-icon">
                    {feature.icon}
                  </div>
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
        {/* <div className="identity-button">
        <DarkButton buttonText='Get a Demo' onClick={handleOpenModal} />
        <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default IdentitySection;
