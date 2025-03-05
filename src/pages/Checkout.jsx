import FeaturePageHero from '../components/FeaturePageHero'
import CTASection from '../components/CTASection'
import LinksSection from '../components/LinksSection'
import FinalCTA from '../components/FinalCTA'
import '../css/featurePages.css'
import { Col, Row, Typography } from 'antd'
import FeatureContentBox from '../components/FeatureContentBox'

const { Title } = Typography
export default function CheckoutPage () {
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
          title1='Checkout'
          title2='Frictionless AI Checkout That Converts More Visitors'
          text='Alyson Checkout streamlines the buying experience with AI-driven optimization, reducing friction and boosting conversions.'
          buttonText='See Alyson Checkout in Action'
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
            title2='Fast, Seamless Checkout. Speed Up the Buying Process'
            text='Reduce cart abandonment with an AI-powered, one-click checkout experience.'
            buttonText='Optimize Your Checkout'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'One-click checkout for higher conversions',
              'Autofill and smart payment suggestions',
              'AI-driven form optimization'
            ]}
          />
          <FeatureContentBox
            title2='Reduce Cart Abandonment Recover Lost Sales Instantly'
            text='Intelligent reminders and follow-ups bring back potential buyers and close the deal.'
            buttonText='Boost Conversions Now'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'AI-powered abandoned cart recovery emails',
              'Real-time incentives to push conversions',
              'Optimized checkout UX to reduce drop-offs'
            ]}
          />
          <FeatureContentBox
            title2='Payments That Just Work'
            text='AI dynamically routes payments for the fastest, most cost-effective transactions.'
            buttonText='Streamline Your Payments'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'AI chooses the best payment processor',
              'Faster processing, lower transaction fees',
              'Support for multiple payment methods'
            ]}
          />
          <FeatureContentBox
            title2='Personalized Purchase Experiences with AI-Tailored Checkout Journeys'
            text='Personalized checkout flows increase conversions and customer satisfaction.'
            buttonText='Let AI Optimize Your Campaigns'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'AI adapts checkout flow based on user data',
              'Customized upsells and cross-sells',
              'Smart order confirmations and engagement'
            ]}
          />
        </div>
      </div>

      <CTASection
        ctaText1='Don’t let checkout friction cost you sales. Make every'
        ctaText2='transaction effortless.'
      />
      <LinksSection />
      <FinalCTA />
    </div>
  )
}
