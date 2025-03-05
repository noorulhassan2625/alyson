import FeaturePageHero from '../components/FeaturePageHero'
import CTASection from '../components/CTASection'
import LinksSection from '../components/LinksSection'
import FinalCTA from '../components/FinalCTA'
import '../css/featurePages.css'
import { Col, Row, Typography } from 'antd'
import FeatureContentBox from '../components/FeatureContentBox'

const { Title } = Typography
export default function IdentityPage () {
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
          title1='Identity'
          title2='Identify, Convert, and Engage Website Visitors Instantly'
          text='Alyson Identity de-anonymizes website traffic using our 172M+ home and homeowner profiles—so you can verify users effortlessly, reduce sign-in friction, and build high-value audiences to grow your home services business.'
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
            title2='Seamless Sign-In Without Friction'
            text='Reduce barriers with instant identity verification and frictionless login.'
            buttonText='Simplify User Sign-In'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'Identify visitors instantly and let them sign in with a simple code.',
              'Eliminate lengthy forms and password resets.',
              'Increase conversions by making sign-ups effortless.'
            ]}
          />
          <FeatureContentBox
            title2='Unlock Hidden Website Visitors'
            text='Turn anonymous traffic into real, qualified leads effortlessly.'
            buttonText='SeeDiscover Your Visitors'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'Reveal who is visiting your site and their homeowner profile.',
              'Gain rich insights without requiring users to fill out forms.',
              'Boost conversions by targeting the right audience.'
            ]}
          />
          <FeatureContentBox
            title2='Smarter AI, Better Insights'
            text='Power Alyson’s AI tools with enhanced identity and data accuracy.'
            buttonText='Power Your AI with Better Data'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'Improve AI-driven conversations with verified user data.',
              'Get cleaner, more accurate customer data at scale.',
              'Enhance audience segmentation and personalization.'
            ]}
          />
          <FeatureContentBox
            title2='Affordable Data with Maximum Value'
            text='Get premium data insights at a fraction of the cost of other vendors.'
            buttonText='Get Smarter Data for Less'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'Enjoy reduced data costs or even free access on performance plans.',
              'Access a rich identity graph to optimize every interaction.',
              'Scale your business with high-quality, cost-effective data.'
            ]}
          />
        </div>
      </div>

      <CTASection ctaText1='Don’t Let Leads Slip Away—Start Identifying Today' />
      <LinksSection />
      <FinalCTA />
    </div>
  )
}
