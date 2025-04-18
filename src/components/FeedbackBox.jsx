import { Row, Col, Typography } from 'antd'
import InfoCard from './InfoCards'
import UserCallingIcon from './SVGComponents/UserCallingIcon'
import LoopIcon from './SVGComponents/LoopIcon'
import SpeakerIcon from './SVGComponents/SpeakerIcon'

const { Title, Paragraph } = Typography

const FeedBackBox = () => {
  const cardsData = [
    {
      icon: (
        <img
          src='/media/images/icon_create_10.svg'
          alt={'iconImage'}
          width={'100%'}
        />
      )
    },
    {
      icon: (
        <img
          src='/media/images/icon_create_11.svg'
          alt={'iconImage'}
          width={'100%'}
        />
      )
    },
    {
      icon: (
        <img
          src='/media/images/icon_create_12.svg'
          alt={'iconImage'}
          width={'100%'}
        />
      )
    },
  ]

  return (
    <div className='generative-ai-container feedback-box'>
      <div className='generative-ai-content'>
        <Row gutter={24} align='middle'>

          <Col xs={24} md={12}>
            <div className='info-cards-container'>
              {cardsData.map((card, index) => (
                <InfoCard key={index} {...card} />
              ))}
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className='text-content'>
              <Title level={3}>Better Feedback Loops</Title>
              <Paragraph className="create-box-text">
                Build world-leading feedback loops and stop relying on pixels
                that miss up to 30% of the events you need to optimize your ads.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default FeedBackBox
