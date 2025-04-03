import { Row, Col, Typography } from 'antd'
import InfoCard from './InfoCards'
import MailIcon from './SVGComponents/MailIcon'
import LayoutIcon from './SVGComponents/LayoutIcon'
import MessageIcon from './SVGComponents/MessageIcon'

const { Title, Paragraph } = Typography

const GenerativeAISection = () => {
  const cardsData = [
    {
      icon: (
        <img
          src='/media/images/icon_create_1.svg'
          alt={'iconImage'}
          width={'100%'}
        />
      )
    },
    {
      icon: (
        <img
          src='/media/images/icon_create_2.svg'
          alt={'iconImage'}
          width={'100%'}
        />
      )
    },
    {
      icon: (
        <img
          src='/media/images/icon_create_3.svg'
          alt={'iconImage'}
          width={'100%'}
        />
      )
    },
  ]

  return (
    <div className='generative-ai-container'>
      <div className='generative-ai-content'>
        <Row gutter={24} align='middle'>
          {/* Left Text Section (Col-6) */}
          <Col xs={24} md={12}>
            <div className='text-content'>
              <Title level={3}>Generative AI for Creative Excellence</Title>
              <Paragraph className='create-box-text'>
                Gen AI is powerful, but how do you earn profits? Alyson’s
                experiment tool runs experiments for you and learns how to drive
                more profit for you.
              </Paragraph>
            </div>
          </Col>

          {/* Right Info Cards (Col-6) */}
          <Col xs={24} md={12}>
            <div className='info-cards-container'>
              {cardsData.map((card, index) => (
                <InfoCard key={index} {...card} />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default GenerativeAISection
