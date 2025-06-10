import { Row, Col, Typography, Divider } from 'antd'
const { Title, Paragraph } = Typography

const ActivateSection = () => {
  const features = [
    {
      icon: (
        <>
          {' '}
          <img
            src='/media/images/Activate_icon_1.svg'
            alt={'iconImage'}
            width={'20%'}
          />
        </>
      ),
      title: 'Revitalize Old Leads',
      description:
        'Transform inactive leads into new opportunities with Alyson Activate’s re-engagement tools.'
    },
    { 
      icon: (
      <>
        {' '}
        <img
          src='/media/images/Activate_icon_2.svg'
          alt={'iconImage'}
          width={'20%'}
        />
      </>
    ),
      title: 'Automated Outreach',
      description:
        'Send targeted emails, text messages, and display ads to re-engage leads effortlessly.'
    },
    {
      icon: (
        <>
          {' '}
          <img
            src='/media/images/Activate_icon_3.svg'
            alt={'iconImage'}
            width={'20%'}
          />
        </>
      ),
      title: 'Access Network Intelligence',
      description:
        'Identify when leads are engaging across the entire Alyson network and act at the right moment to maximize conversions based on network intent signals.'
    },
    {
      icon: (
        <>
          {' '}
          <img
            src='/media/images/Activate_icon_4.svg'
            alt={'iconImage'}
            width={'20%'}
          />
        </>
      ),
      title: 'Engage with Content',
      description:
        'Creating content is costly, and finding relevant content needs pricey analysts. Let Alyson find engaging content that boosts your revenue.'
    }
  ]
  

  return (
    <div className='activate-container'>
      <div
        className='activate-content'
        style={{ background: 'url(/media/images/Activate-bg.svg)' }}
      >
        {/* Header Section */}
        <div className='section-divider'>
          <Divider style={{ color: '#FFBB2A' }} />
        </div>
        <div className={'section-title-header'}>
          <img src='/media/images/activate.svg' alt='Alyson Logo' width='13%' />
          <Title level={2}>Activate</Title>
        </div>
        <div className='activate-header'>
          {/* <BulbOutlined className="activate-icon" />
          <Title level={2}>Activate</Title> */}
          <Paragraph>
            Re-engage old leads with personalized emails, texts, and ads.
            Identify engagement opportunities to turn inactive leads into fresh
            leads and new customers.
          </Paragraph>
        </div>

        {/* Features Section */}
        <Row gutter={[24, 24]} justify='center'>
          {features.map((feature, index) => (
            <Col key={index} xs={24} sm={12} md={6}>
              <div className='activate-card'>
                <div className='activate-icon'>{feature.icon}</div>
                <Title level={5} className='activate-title'>
                  {feature.title}
                </Title>
                <Paragraph className='activate-description'>
                  {feature.description}
                </Paragraph>
              </div>
            </Col>
          ))}
        </Row>

        {/* Call to Action Button */}
        {/* <div className='activate-button'>
          <DarkButton buttonText='Get a Demo' onClick={handleOpenModal} />
          <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div> */}
      </div>
    </div>
  )
}

export default ActivateSection
