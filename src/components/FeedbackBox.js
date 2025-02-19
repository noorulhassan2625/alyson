import { Row, Col, Typography } from 'antd'
import {
  SoundOutlined,
  RetweetOutlined,
  UserSwitchOutlined
} from '@ant-design/icons'
import InfoCard from './InfoCards'

const { Title, Paragraph } = Typography

const FeedBackBox = () => {
  const cardsData = [
    {
      icon: <UserSwitchOutlined />
    },
    {
      icon: <RetweetOutlined />
    },
    {
      icon: <SoundOutlined />
    }
  ]

  return (
    <div className='generative-ai-container'>
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
              <Paragraph>
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
