import { Row, Col, Typography, Divider } from 'antd';
import { motion, useInView } from 'framer-motion'; // Import framer-motion and useInView
import { useRef } from 'react'; // Import useRef for the ref
const { Title, Paragraph } = Typography;

const ActivateSection = () => {
  const features = [
    {
      icon: (
        <>
          <img
            src='/media/images/Activate_icon_1.svg'
            alt={'iconImage'}
            width={'100%'}
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
          <img
            src='/media/images/Activate_icon_2.svg'
            alt={'iconImage'}
            width={'100%'}
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
          <img
            src='/media/images/Activate_icon_3.svg'
            alt={'iconImage'}
            width={'100%'}
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
          <img
            src='/media/images/Activate_icon_4.svg'
            alt={'iconImage'}
            width={'100%'}
          />
        </>
      ),
      title: 'Engage with Content',
      description:
        'Creating content is costly, and finding relevant content needs pricey analysts. Let Alyson find engaging content that boosts your revenue.'
    }
  ];

  const ref = useRef(null); // Create a ref for the motion.div
  const isInView = useInView(ref, {
    once: true, // Animation triggers only once
    amount: 0.3 // Trigger when 30% of the component is visible
  });

  // Define the animation variants
  const rowVariants = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } // Fade in and slide to position
  };

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
          <Paragraph>
            Re-engage old leads with personalized emails, texts, and ads.
            Identify engagement opportunities to turn inactive leads into fresh
            leads and new customers.
          </Paragraph>
        </div>

        {/* Features Section */}
        <motion.div
          ref={ref} // Attach the ref to observe visibility
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} // Animate only when in view
          variants={rowVariants}
        >
          <Row gutter={[24, 24]} justify='center'>
            {features.map((feature, index) => (
              <Col key={index} xs={24} sm={12} md={6}>
                <div className='activate-card'>
                  <div style={{ display: 'flex' }}>
                  <div className='activate-icon'>{feature.icon}</div>
                  <Title level={5} className='activate-title'>
                    {feature.title}
                  </Title>
                  </div>
                  <Paragraph className='activate-description'>
                    {feature.description}
                  </Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Call to Action Button */}
        {/* <div className='activate-button'>
          <DarkButton buttonText='Get a Demo' onClick={handleOpenModal} />
          <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div> */}
          <div className='section-divider'>
          <Divider style={{ color: '#FFBB2A' }} />
        </div>
      </div>
    </div>
  );
};

export default ActivateSection;