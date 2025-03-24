import React from 'react'
import { Row, Col, Typography } from 'antd'
import IndustryCard from '../components/IndustryCard'
import '../css/IndustryPageStyling.css'
import '../css/ConnectPage.css'
import DarkButton from '../components/DarkButton'
import FeaturePageHero from '../components/FeaturePageHero'
import { ArrowRightOutlined } from '@ant-design/icons'
import ConversationBox from '../components/ConversationBox'
import { span } from 'framer-motion/client'
const { Title } = Typography

const industryData = [
  {
    title: 'Automate Your Business',
    description: 'Alyson handles bookings, follow-ups, and operations so you don’t have to.',

    link: '#',
    image: '/media/images/home service mini.svg',
    // linkText: (
    //   <div>
    //     <span>
    //       Contact Us <ArrowRightOutlined />
    //     </span>
    //   </div>
    // )
  },
  {
    title: 'Engage Customers Effortlessly',
    description: 'AI-driven interactions build stronger relationships and boost retention.',
    // link: '#',
    image: '/media/images/real estate mini.svg',
    // linkText: (
    //   <div>
    //     <span>
    //       Explore Partnerships <ArrowRightOutlined />
    //     </span>
    //   </div>
    // )
  },
  {
    title: 'Drive Measurable Growth',
    description:
      'Designed to help home service businesses grow revenue by 25% or more.',

    link: '#',
    image: '/media/images/Utility & tech mini.svg',
    linkText: (
      <div>
        <span>
          Social Platforms <ArrowRightOutlined />
        </span>
      </div>
    )
  },
  // {
  //   title: 'Join Our Learning Hub',
  //   description:
  //     'Get the latest AI insights, industry tips, and best practices.',

  //   link: '#',
  //   image: '/media/images/Emerging mini.svg',
  //   linkText: 'Test text'
  // }
]

// Define ConversationBox Content
const conversationContent = {
  title: 'How Alyson.ai Helps Your Business',
  features: [
    <span><b>Smart Scheduling: </b>Automates bookings & reminders.</span>,
    <span><b>AI-Powered Customer Engagement: </b>Responds to inquiries 24/7.</span>,
    <span><b>Performance Insights: </b>Tracks revenue growth & efficiency.</span>,
    <span><b>Marketing & Follow-Ups: </b>Helps retain customers effortlessly.</span>,
  ]
}

export default function About () {
  return (
    <div className='container'>
      <div
        className='hero-bg about'
        style={{
          background:
            'linear-gradient(rgba(255, 204, 77, 0) 38%, rgb(255 252 240 / 94%) 60%), url(/media/images/hero-section.svg)',
          paddingBottom: '60px'
        }}
      >
        <FeaturePageHero
          title1='About Alyson.ai'
          title2='Why We Created Alyson.ai'
          text='At Alyson.ai, we wanted our platform to feel approachable, friendly, and reliable—just like a trusted colleague who’s always there to help you grow. The name Alyson represents everything we stand for: smart solutions, intuitive support, and a personal touch. She’s the AI designed to make running your business easier, more efficient, and, most importantly, successful.'
          buttonText='Activate Your Leads Now'
          imageSrc='./media/images/AcquireHeroImg.svg'
        />

        <div className='industry-top-heading' style={{ padding: '0px 100px' }}>
          <Row gutter={[24]}>
            <Col xs={24} sm={24} lg={16} md={16} >
              <Title level={2}>Why Choose Alyson.ai?</Title>
            </Col>
          </Row>
        </div>

        {/* Industry Cards Section */}
        <div className='industry-cards-section'>
          <Row gutter={[24, 24]}>
            {industryData.map((industry, index) => (
              <Col span={8} lg={8} md={8} sm={24} xs={24} key={index}>
                <IndustryCard {...industry} />
              </Col>
            ))}
          </Row>
        </div>
        {/* Pass Dynamic Data to ConversationBox */}
        <ConversationBox
          title={conversationContent.title}
          features={conversationContent.features}
        />

        <div className='bottom-btn' style={{ textAlign: 'left', paddingLeft: '150px' }}>
          <DarkButton buttonText='Activate Your Leads Now' />
        </div>
      </div>

      {/* <CTASection
        ctaText1='“Stop wasting money on ad platforms that don’t deliver.”'
        ctaText2='Optimize your ad spend with Alyson Acquire now.'
      /> */}
      {/* <LinksSection /> */}
      {/* <FinalCTA /> */}

      {/* <hr style={{ borderColor: '#FCEAC7', opacity: '0.5' }}></hr> */}
      <Row
        gutter={[40]}
        className='contact-info-box'
        justify='center'
        style={{
          background: '#FFF8E5',
          padding: '0px 30px 50px 30px',
          margin: '0px'
        }}
      >
        {/* Company Column */}
        <Col xs={24} sm={12} md={6} lg={6} style={{ justifyContent: 'right' }}>
          <div className='contact-box-1' style={{ display: 'flex', justifyContent: 'end' }}>
            <div>
              <img src='/media/images/support alyson email.svg' alt='' />
            </div>
            <Title level={5} className='cotact-info'>
              support@alyson.ai
            </Title>
          </div>
        </Col>

        {/* Contact Column */}
        <Col xs={24} sm={12} md={18} lg={6}>
          <div className='contact-box-2' style={{ display: 'flex' }}>
            <div>
              <img src='/media/images/helpline call.svg' alt='' />
            </div>
            <Title level={5} className='cotact-info'>
              (123) 456-7890
            </Title>
          </div>
        </Col>
      </Row>
    </div>
  )
}
