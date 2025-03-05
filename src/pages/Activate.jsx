import FeaturePageHero from '../components/FeaturePageHero'
import CTASection from '../components/CTASection'
import LinksSection from '../components/LinksSection'
import FinalCTA from '../components/FinalCTA'
import '../css/featurePages.css'
import { Col, Row, Typography } from 'antd'
import FeatureContentBox from '../components/FeatureContentBox'

const { Title } = Typography
export default function ActivatePage () {
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
          title1='Activate'
          title2='Re-Engage Old Leads & Win More Customers'
          text='Alyson Activate turns cold leads into conversions. Using real-time intent signals, predictive AI models, and personalized outreach, Alyson revives inactive leads through targeted emails, texts, and ads—at the perfect moment.'
          buttonText='Activate Your Leads Now'
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
            title2='AI-Powered Lead Re-Engagement'
            text='Transform inactive leads into new opportunities with AI-driven outreach.'
            buttonText='Start Re-Engaging Now'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'Send hyper-personalized emails & texts based on real-time engagement.',
              'Detect online activity across the Alyson ecosystem and act instantly.',
              'Use predictive scoring to prioritize high-value leads.'
            ]}
          />
          <FeatureContentBox
            title2='Smarter Campaigns, Less Effort'
            text='Let Alyson optimize your re-engagement efforts with minimal manual work.'
            buttonText='See Real-Time Grading in Action'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'Automatically segment leads based on behavior and intent.',
              'Trigger campaigns that reach the right users at the right time.',
              'Focus on high-scoring leads while filtering out low-converting ones.'
            ]}
          />
          <FeatureContentBox
            title2='Content That Drives Conversions'
            text='Alyson finds the best content to engage and convert your audience.'
            buttonText='Get AI-Powered Content'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'Automatically surface high-performing content for every campaign.',
              'Generate email, SMS, and ad copy tailored to each user segment.',
              'Improve engagement without hiring expensive marketing analysts.'
            ]}
          />
          <FeatureContentBox
            title2='Real-Time Intent-Based Targeting'
            text='Reach leads when they’re most likely to convert.'
            buttonText='Start Targeting Smarter'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'Alyson detects when leads are online and engages at the perfect moment',
              'Syncs with real-time signals from the entire Alyson network.',
              'Boost response rates with precision-timed outreach.'
            ]}
          />
        </div>
      </div>

      <CTASection
        ctaText1='Stop Losing Leads. Start Converting More Customers.'
      />
      <LinksSection />
      <FinalCTA />
    </div>
  )
}
