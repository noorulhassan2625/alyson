import { Row, Col, Typography } from 'antd'
import InfoCard from './InfoCards'
import BarsIcon from './SVGComponents/BarsIcon'
import ChartUpIcon from './SVGComponents/ChartUpIcon'
import DollarIcon from './SVGComponents/DollarIcon'

const { Title, Paragraph } = Typography

const RevenueBox = () => {
  const cardsData = [
    {
      icon: (
        <img
          src='/media/images/icon_create_4.svg'
          alt={'iconImage'}
          width={'100%'}
        />
      )
    },
    {
      icon: (
        <img
          src='/media/images/icon_create_5.svg'
          alt={'iconImage'}
          width={'100%'}
        />
      )
    },
    {
      icon: (
        <img
          src='/media/images/icon_create_6.svg'
          alt={'iconImage'}
          width={'100%'}
        />
      )
    },

  ]

  return (
    <div className='generative-ai-container revenue-box'>
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
              <Paragraph className="create-box-text">
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
