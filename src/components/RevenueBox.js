import { Row, Col, Typography } from 'antd'
import {
  BarChartOutlined,
  RiseOutlined,
  DollarOutlined
} from '@ant-design/icons'
import InfoCard from './InfoCards'

const { Title, Paragraph } = Typography

const RevenueBox = () => {
  const cardsData = [
    {
      icon: <BarChartOutlined /> 
    },
    {
      icon: <RiseOutlined />
    },
    {
      icon: <DollarOutlined />
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
              <Title level={3}>50% Revenue Boost</Title>
              <Paragraph>
                Alyson aims to generate a 50% overall revenue boost and will
                compare all experiments to your previous best pages so you can
                calculate the lift.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default RevenueBox
