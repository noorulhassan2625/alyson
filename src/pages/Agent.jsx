import FeaturePageHero from '../components/FeaturePageHero'
import CTASection from '../components/CTASection'
import LinksSection from '../components/LinksSection'
import FinalCTA from '../components/FinalCTA'
import '../css/featurePages.css'
import { Col, Row, Typography } from 'antd'
import FeatureContentBox from '../components/FeatureContentBox'

const { Title } = Typography
export default function AgentPage () {
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
          title1='Agent'
          title2='Alyson Agent - AI That Grows Your Business 25% Faster'
          text='Alyson Agent automates emails, SMS, calls, and chats —while learning and optimizing to maximize leads and revenue.'
          buttonText='Try Alyson Agent for Free'
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
            title2='Alyson Agent Handles Tasks, So You Don’t Have To.'
            text='Alyson writes, sends, and optimizes outreach—without human intervention.'
            buttonText='Let AI Handle Customer Outreach'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'AI drafts and personalizes customer emails',
              'Sends SMS reminders and follow-ups automatically',
              'Places smart phone calls to engage leads'
            ]}
          />
          <FeatureContentBox
            title2='AI-Powered Website Chatbot to Convert More Visitors'
            text='Capture leads and answer questions 24/7 with an AI chatbot trained for home services.'
            buttonText='Get an AI Chatbot That Converts'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'AI engages visitors in real time',
              'Answers FAQs and books appointments',
              'Connects leads with your team when needed'
            ]}
          />
          <FeatureContentBox
            title2='Smart Personalization from Your CDP.'
            text='AI That Knows Your Customers. Alyson reads user history to send highly personalized messages that convert.'
            buttonText='Start Sending AI-Personalized Messages'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'AI adapts offers based on past interactions',
              'Messages are tailored to customer preferences',
              'Higher engagement with personalized outreach'
            ]}
          />
          <FeatureContentBox
            title2='Self-Driving AI for Business Optimization'
            text='Alyson runs experiments to increase revenue & leads—all on autopilot.'
            buttonText='Let AI Optimize Your Growth'
            imageSrc='https://picsum.photos/seed/picsum/200/300'
            listItems={[
              'AI A/B tests messaging for best performance',
              'Adjusts outreach based on lead behavior',
              'Aligns with your business goals (more revenue & leads)'
            ]}
          />
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
