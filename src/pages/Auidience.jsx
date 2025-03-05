import FeaturePageHero from '../components/FeaturePageHero'
import CTASection from '../components/CTASection'
import LinksSection from '../components/LinksSection'
import FinalCTA from '../components/FinalCTA'
import '../css/featurePages.css'
import { Col, Row, Typography } from 'antd'
import FeatureContentBox from '../components/FeatureContentBox'

const { Title } = Typography
export default function AuidiencePage () {
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
          title1='Auidience'
          title2='Turn Anonymous Visitors into High-Value Leads'
          text='Alyson Audiences enhances your CRM with insights from 170M+ homeowner profiles, improving targeting and conversion rates.'
          buttonText='Get Better Audiences Now'
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
            title2='De-Anonymize Your Traffic'
            text='Identify website visitors and match them with verified homeowner profiles for better outreach.'
            buttonText='See Who’s Engaging with You'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'Match anonymous traffic to real leads',
              'Unlock contact details for retargeting',
              'Connect CRM data with behavioral insights'
            ]}
          />
          <FeatureContentBox
            title2='Enhance Your CRM Data'
            text='Clean, Enrich & Unify Your Customer Records Alyson automatically fixes and enhances CRM data, ensuring accuracy and completeness.'
            buttonText='Upgrade Your CRM Data'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'Remove duplicates and incorrect entries',
              'Append missing customer data',
              'Merge multiple records into one unified profile'
            ]}
          />
          <FeatureContentBox
            title2='Actionable Intelligence for Smarter Marketing'
            text='Get deeper customer insights with data from 170M+ homeowners, improving your marketing strategies.'
            buttonText='Access Better Audience Insights'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'Analyze customer behavior patterns',
              'Identify high-intent leads faster',
              'Use AI-driven insights for better outreach'
            ]}
          />
          <FeatureContentBox
            title2='Build Highly Effective Marketing Audiences'
            text='Alyson helps you segment and target the right prospects, increasing campaign efficiency.'
            buttonText='Start Targeting Smarter'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'Create lookalike audiences based on top customers',
              'Prioritize leads most likely to convert',
              'Improve ad performance with precise targeting'
            ]}
          />
        </div>
      </div>

      <CTASection
        ctaText1='Uncover Hidden Opportunities in Your Data'
        ctaText2='Let Alyson transform your CRM into a powerful marketing engine.'
      />
      <LinksSection />
      <FinalCTA />
    </div>
  )
}
