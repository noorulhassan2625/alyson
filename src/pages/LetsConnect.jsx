import React from 'react'
import { Row, Col, Typography } from 'antd'
import IndustryCard from '../components/IndustryCard'
import '../css/IndustryPageStyling.css'
import '../css/ConnectPage.css'
import DarkButton from '../components/DarkButton'
import FeaturePageHero from '../components/FeaturePageHero'
import { ArrowRightOutlined } from '@ant-design/icons'
import ConversationBox from '../components/ConversationBox'
const { Title } = Typography

const industryData = [
  {
    title: 'Talk to Our Team',
    description: 'Have questions? Our team is here to help.',

    link: '#',
    image: '/media/images/Telephone Talking Icon.svg',
    linkText: (
      <div>
        <span>
          Contact Us <ArrowRightOutlined />
        </span>
      </div>
    )
  },
  {
    title: 'Partner with Alyson.ai',
    description: 'Interested in collaborations or integrations? Let’s chat.',
    link: '#',
    image: '/media/images/HandShake Deal Icon.svg',
    linkText: (
      <div>
        <span>
          Explore Partnerships <ArrowRightOutlined />
        </span>
      </div>
    )
  },
  {
    title: 'Follow Us on Social Media',
    description:
      'Stay updated with insights, product updates, and success stories.',

    link: '#',
    image: '/media/images/Speaker Loud Icon.svg',
    linkText: (
      <div>
        <span style={{margin:'0px 5px'}}>
        <img src='/media/images/Social LinkedIn Icon.svg' alt='Alyson' />
        </span>
        <span style={{margin:'0px 5px'}}>
        <img src='/media/images/Social Facebook Icon.svg' alt='Alyson' />
        </span>
        <span style={{margin:'0px 5px'}}>
        <img src='/media/images/Social X Icon.svg' alt='Alyson' />
        </span>
      </div>
    )
  },
  {
    title: 'Join Our Learning Hub',
    description:
      'Get the latest AI insights, industry tips, and best practices.',

    link: '#',
    image: '/media/images/Book Page Icon.svg',
    linkText: (
      <div>
        <span>
          Contact Us <ArrowRightOutlined />
        </span>
      </div>
    )
  }
]

// Define ConversationBox Content
const conversationContent = {
    title: "Be Part of the Conversation",
    features: [
      "Get early access to new features",
      "Connect with other business owners in home services",
      "Exclusive webinars, AMAs, and AI insights",
    ],
  };

export default function LetsConnect () {
  return (
    <div className='container'>
      <div
        className='hero-bg lets-connect'
        style={{
          background:
            'linear-gradient(rgba(255, 204, 77, 0) 38%, rgb(255 252 240 / 94%) 60%), url(/media/images/hero-section.svg)',
          paddingBottom: '60px'
        }}
      >
        <FeaturePageHero
          title1='Connect'
          title2='Let’s Stay Connected'
          text='Whether you have questions, need support, or want to be part of the Alyson.ai community, you’re in the right place'
          buttonText='Join Our Community'
          imageSrc='./media/images/AcquireHeroImg.svg'
        />

        <div className='industry-top-heading' style={{ padding: '0px' }}>
          <Row gutter={[24]} align='middle'>
            <Col span={16}lg={16} md={16} sm={24} xs={24} style={{ margin: '0 auto' }}>
              <Title level={2}>Ways to Connect with Alyson.ai</Title>
            </Col>
          </Row>
        </div>

        {/* Industry Cards Section */}
        <div className='industry-cards-section'>
          <Row gutter={[24, 24]}>
            {industryData.map((industry, index) => (
              <Col span={6} lg={6} md={8} sm={24} xs={24} key={index}>
                <IndustryCard {...industry} />
              </Col>
            ))}
          </Row>
        </div>
         {/* Pass Dynamic Data to ConversationBox */}
         <ConversationBox title={conversationContent.title} features={conversationContent.features} />

        <div className='bottom-btn' style={{textAlign:'left', paddingLeft:'150px'}}>
        <DarkButton buttonText='Join Our Community' />
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
              +1 307-381-1637
            </Title>
          </div>
        </Col>
      </Row>
    </div>
  )
}
