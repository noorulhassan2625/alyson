import FeaturePageHero from '../components/FeaturePageHero'
import CTASection from '../components/CTASection'
import LinksSection from '../components/LinksSection'
import FinalCTA from '../components/FinalCTA'
import '../css/featurePages.css'
import { Col, Row, Typography } from 'antd'
import FeatureContentBox from '../components/FeatureContentBox'

const { Title } = Typography
export default function AcquirePage () {
  return (
    <div className='container'>
      <div
        className='hero-bg'
        style={{
          background:
            'linear-gradient(rgba(255, 204, 77, 0) 38%, rgb(255 252 240 / 94%) 60%), url(/media/images/hero-section.svg)'
        }}
      >
        <FeaturePageHero
          title1='Acquire'
          title2='Stop Wasting Money on Ad Platforms Like Google, Meta, and TikTok'
          text='Turn every ad dollar into a measurable win with Alyson Acquire’s data-driven targeting and optimization platform.'
          buttonText='Optimize Your Ad Spend Now'
          imageSrc='./media/images/AcquireHeroImg.svg'
        />
        <div className='center-heading' style={{ padding: '0px 20px' }}>
          <Row gutter={[24]} align='middle'>
            <Col span={16} style={{ margin: '0 auto' }}>
              <Title level={2}>
                Alyson’s AI models are trusted by top home services companies to
                automate and optimize their marketing campaigns with precision.
              </Title>
            </Col>
          </Row>
        </div>
        <div className='feature-page-content acquire-feature'>
          <FeatureContentBox
            title2='Maximize Ad Efficiency with Comprehensive Data Profiles'
            text='With Alyson Acquire, you gain access to detailed data profiles and a robust identity graph that refines your ad targeting. Every dollar spent connects you with customers who perfectly match your Ideal Customer Profile (ICP)'
            buttonText='Get Started with Smarter Targeting'
            imageSrc='./media/images/170M profiles.svg'
            listItems={[
              'Identify high-value prospects.',
              'Minimize wasted spend on low-quality leads.',
              'Drive better results on Google, Meta, and TikTok.'
            ]}
          />
          <FeatureContentBox
            title2='Real-Time Traffic Grading for Instant Insights'
            text='Stop guessing about ad performance. Alyson Acquire evaluates the quality of traffic from all major platforms in real time, giving you actionable insights to optimize campaigns on the fly.'
            buttonText='See Real-Time Grading in Action'
            imageSrc='./media/images/realtime trafficking.svg'
            listItems={[
              'Grade traffic quality instantly.',
              'Adapt campaigns for better outcomes.',
              'Save money by focusing on what works.'
            ]}
          />
          <FeatureContentBox
            title2='Smarter Algorithms, Smarter Results'
            text='Close the loop with advanced feedback systems that provide ad platforms like Google, Meta, and TikTok the data they need to refine performance. Alyson Acquire ensures every campaign gets smarter over time, boosting ROI and driving sustained success'
            buttonText='Boost ROI with Feedback Loops'
            imageSrc='./media/images/smarter algorithms.svg'
            listItems={[
              'Feed critical performance data back to ad algorithms',
              'Enable smarter targeting based on real results.',
              'Build lasting success with ongoing campaign refinement.'
            ]}
          />
          <FeatureContentBox
            title2='Scale with Confidence'
            text='Alyson Acquire’s identity graph technology ensures that your campaigns consistently reach your ideal audience, making it easier to scale your advertising efforts without overspending.'
            buttonText='Boost ROI with Feedback Loops'
            imageSrc='./media/images/scale with confidence.svg'
            listItems={[
              'Reach the right audience at scale.',
              'Stay within budget while growing your reach.',
              'Gain the confidence to expand your campaigns.'
            ]}
          />
        </div>
      </div>

      <CTASection
        ctaText1='“Stop wasting money on ad platforms that don’t deliver.”'
        ctaText2='Optimize your ad spend with Alyson Acquire now.'
      />
      <LinksSection />
      <FinalCTA />
    </div>
  )
}
