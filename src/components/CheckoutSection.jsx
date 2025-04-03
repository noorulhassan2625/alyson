import { Row, Col, Typography } from 'antd'
const { Title, Paragraph } = Typography

const CheckoutSection = () => {
  const features = [
    {
      icon: (
        <img
          src='/media/images/checkout_icon_1.svg'
          alt={'iconImage'}
          width={'20%'}
        />
      ),
      title: 'Accelerated Checkout Experience',
      description:
        'Streamline the buying process with a fast, one-click lead generation process.'
    },
    {
      icon: (
        <img
          src='/media/images/checkout_icon_2.svg'
          alt={'iconImage'}
          width={'20%'}
        />
      ),
      title: 'Privacy Shield Boosts Conversion',
      description:
        'Alyson creates private emails for consumers, boosting sign-ups, leads, and insights on win rates'
    },
    {
      icon: (
        <img
          src='/media/images/checkout_icon_3.svg'
          alt={'iconImage'}
          width={'20%'}
        />
      ),
      title: 'Automated Form Creation',
      description:
        'What if your forms learned? Like a self-driving car, Alyson asks the best questions first, never repeats, and boosts revenue.'
    },
    {
      icon: (
        <img
          src='/media/images/checkout_icon_4.svg'
          alt={'iconImage'}
          width={'20%'}
        />
      ),
      title: 'Gain Valuable Insights',
      description:
        'Alyson knows your ideal customer and often who is on your website and can tell you how well you are doing converting your best prospects.'
    }
  ]

  // const [isModalOpen, setIsModalOpen] = useState(false) // State for modal visibility
  // const handleOpenModal = () => {
  //   setIsModalOpen(true)
  // }

  // const handleCloseModal = () => {
  //   setIsModalOpen(false)
  // }

  return (
    <div className='checkout-container'>
      <div
        className='checkout-content'
        style={{ background: 'url(/media/images/Checkoutbox-bg.svg)' }}
      >
        {/* Header Section */}
        <div className='checkout-header'>
          <div className={'section-title-header'}>
            <img
              src='/media/images/checkout.svg'
              alt='Alyson Logo'
              width='13%'
            />
            <Title level={2}>Checkout</Title>
          </div>
          <Paragraph>
            Alyson has over 170 million consumer profiles—so when she recognizes
            someone, they can skip the signup process, boosting your conversion
            rate by as much as 50%.
          </Paragraph>
        </div>

        {/* Features Section */}
        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col key={index} xs={24} sm={6}>
              <div className='checkout-feature'>
                <div className='feature-icon'>{feature.icon}</div>
                <Title level={5}>{feature.title}</Title>
                <Paragraph>{feature.description}</Paragraph>
              </div>
            </Col>
          ))}
        </Row>

        {/* CTA Button */}
        {/* <div style={{ margin: '20px 0px 20px 0px' }}>
          <DarkButton buttonText='Get a Demo' onClick={handleOpenModal} />
          <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div> */}
      </div>
    </div>
  )
}

export default CheckoutSection
