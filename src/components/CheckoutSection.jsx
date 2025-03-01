import { Row, Col, Typography } from 'antd'
import DarkButton from './DarkButton'

const { Title, Paragraph } = Typography

const CheckoutSection = () => {
  const features = [
    {
      title: 'Accelerated Checkout Experience',
      description:
        'Streamline the buying process with a fast, one-click lead generation process.'
    },
    {
      title: 'Privacy Shield Boosts Conversion',
      description:
        'Alyson creates a custom private email address for consumers so they are more comfortable signing up, resulting in more leads for your business and valuable information about your win rates.'
    },
    {
      title: 'Automated Form Creation',
      description:
        'What if your forms could learn? They ask the best question first and never ask questions they know the answer to. Alyson forms are like a self-driving car, helping boost revenue.'
    },
    {
      title: 'Gain Valuable Insights',
      description:
        'Alyson knows your ideal customer and often who is on your website and can tell you how well you are doing converting your best prospects.'
    }
  ]

  return (
    <div className='checkout-container'>
      <div className='checkout-content'  style={{background:'url(/media/images/Checkoutbox-bg.svg)'}}>
        {/* Header Section */}
        <div className='checkout-header'>
          <div className={'section-title-header'}>
            <img src='/media/images/checkout.svg' alt='Alyson Logo' width='10%' />
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
                <Title level={5}>{feature.title}</Title>
                <Paragraph>{feature.description}</Paragraph>
              </div>
            </Col>
          ))}
        </Row>

        {/* CTA Button */}
        <div >
          <DarkButton buttonText="Optimize Your Ad Spend Now" />
        </div>
      </div>
    </div>
  )
}

export default CheckoutSection
