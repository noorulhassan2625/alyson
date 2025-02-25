import { Row, Col, Typography } from 'antd'
import InfoCard from './InfoCards'
import PagesIcon from './SVGComponents/PagesIcon'
import MirrorImageIcon from './SVGComponents/MirrorImageIcon'
import StarIcon from './SVGComponents/StarIcon'

const { Title, Paragraph } = Typography

const CompaignGradingBox = () => {
  const cardsData = [
    {
      icon: <PagesIcon />
    },
    {
      icon: <MirrorImageIcon />
    },
    {
      icon: <StarIcon />
    }
  ]

  return (
    <div className='generative-ai-container'>
      <div className='generative-ai-content'>
        <Row gutter={24} align='middle'>
          <Col xs={24} md={12}>
            <div className='text-content'>
              <Title level={3}>Proprietary Campaign Grading</Title>
              <Paragraph>
                Sometimes, the competition is your other ads. Rank every
                campaign and ad, then automatically ensure your budget goes to
                your highest-ranked ads.
              </Paragraph>
            </div>
          </Col>
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

export default CompaignGradingBox
