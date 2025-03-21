import FeaturePageHero from '../components/FeaturePageHero'
import CTASection from '../components/CTASection'
import LinksSection from '../components/LinksSection'
import FinalCTA from '../components/FinalCTA'
import '../css/featurePages.css'
import { Col, Row, Typography } from 'antd'
import FeatureContentBox from '../components/FeatureContentBox'

const { Title } = Typography
export default function CreatePage () {
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
          title1='Create'
          title2='AI-Powered Landing Pages & Ads That Maximize Your Revenue'
          text='Alyson Create uses Generative AI & Reinforcement Learning to build and test thousands of landing pages, ads, and websites—automatically finding the best version to maximize revenue per visitor.'
          buttonText='Optimize Your Ad Spend Now'
          imageSrc='https://picsum.photos/seed/picsum/200/300'
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
            text='AI That Builds & Tests for You. Alyson’s AI generates thousands of versions, tests them, and finds the highest-converting page.'
            buttonText='Create Your First AI-Optimized Page'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'AI-generated landing pages in minutes',
              'Automatic A/B testing without manual setup',
              'AI-driven insights for continuous optimization'
            ]}
          />
          <FeatureContentBox
            title2='50% Revenue Boost: Higher Conversions, More Sales'
            text='Our AI-driven system finds the best-performing page, increasing revenue by up to 50%.'
            buttonText='Start Growing Your Revenue'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'AI optimizes layouts, copy, and CTAs for impact.',
              'Seamless integration with ad platforms.',
              'Data-backed insights for growth.'
            ]}
          />
          <FeatureContentBox
            title2='High-Converting Templates. Build & Launch Instantly'
            text='Get dozens of proven, high-converting templates designed for maximum performance.'
            buttonText='Explore AI-Powered Templates'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'Pre-optimized designs for any industry',
              'No coding required—just plug & play',
              'AI adapts designs based on audience behavior'
            ]}
          />
          <FeatureContentBox
            title2='Route Traffic Intelligently'
            text='Alyson intelligently directs traffic to winning variants, ensuring the best results.'
            buttonText='Let AI Optimize Your Campaigns'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'AI-powered traffic split testing',
              'Dynamic landing pages based on visitor type',
              'Automated decision-making for optimal performance'
            ]}
          />
        </div>
      </div>

      <CTASection
        ctaText1='Don’t leave conversions to chance. Let AI build, test, and'
        ctaText2='optimize for you.'
      />
      <LinksSection />
      <FinalCTA />
    </div>
  )
}
