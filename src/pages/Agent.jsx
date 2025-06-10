import FeaturePageHero from '../components/FeaturePageHero'
import CTASection from '../components/CTASection'
import LinksSection from '../components/LinksSection'
import FinalCTA from '../components/FinalCTA'
import '../css/featurePages.css'
import { Col, Row, Typography } from 'antd'
import FeatureContentBox from '../components/FeatureContentBox'
import Hero from '../components/Hero'
import AgentContentBox from '../components/AgentContentBox'

const { Title } = Typography
export default function AgentPage () {
  return (
    <div className='container'>
      <div
        className='hero-bg'
        style={{
          background: 'white'
        }}
        // style={{
        //   background:
        //     'linear-gradient(rgba(255, 204, 77, 0) 38%, rgb(255 252 240 / 94%) 60%), url(/media/images/hero-section.svg)'
        // }}
      >
        <Hero
          title1=' Hi, I’m Alyson'
          title2='I’m looking forward to helping you manage your next home project.'
        />
         <div className='feature-page-content acquire-feature agent-menu'>
        
        <AgentContentBox
          title2='Planning & Research'
          text='Share your renovation vision, Alyson will research and plan every detail for you. '
          imageSrc='./media/images/small-illustrations-01.png'
        />
        <AgentContentBox
          title2='Bids and review profiles'
          text="Request bids and assess contractors' profiles, ensuring alignment with your vision to bring your renovation plans to life"
          imageSrc='./media/images/small-illustrations-02.png'
        />
        <AgentContentBox
          title2='Evaluate proposals'
          text='With Alyson receive and compare proposals from contractors based on your budget, simplifying the decision-making process.'
          imageSrc='./media/images/small-illustrations-03.png'
        />
        <AgentContentBox
          title2='Save time and money'
          text='Efficiently scouring for the best prices and negotiating on your behalf, Alyson will handle it all.'
          imageSrc='./media/images/small-illustrations-04.png'
        />
          </div>
        <div className='center-heading' style={{ padding: '0px 20px' }}>
          <Row gutter={[24]} align='middle'>
            <Col span={16} style={{ margin: '0 auto' }}>
              <Title level={2}>
                Alyson partners have helped over 500,000 homeowners in the US
                manage their home projects, saving hundreds of hours and
                delivering a 4.5 average rating.
              </Title>
            </Col>
          </Row>
        </div>
      </div>

      <CTASection
        ctaText1='AI That Grows Your Business While You Sleep '
        ctaText2='Let Alyson automate, optimize, and personalize your customer interactions.'
      />
      <LinksSection />
      <FinalCTA />
    </div>
  )
}
