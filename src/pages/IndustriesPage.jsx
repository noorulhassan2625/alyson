import React from 'react'
import { Row, Col, Typography } from 'antd'
import CTASection from '../components/CTASection'
import LinksSection from '../components/LinksSection'
import FinalCTA from '../components/FinalCTA'
import IndustryCard from '../components/IndustryCard'
import '../css/IndustryPageStyling.css'

const { Title } = Typography

const industryData = [
  {
    title: 'Home Services & Trades',
    description:
      'AI-powered scheduling, customer management, and marketing tools for service professionals.',
    services: [
      'HVAC (Heating, Ventilation & Air Conditioning)',
      'Plumbing',
      'Electrical Services',
      'Bathroom & Kitchen Remodeling'
    ],
    link: '#',
    image: '/media/images/home service mini.svg'
  },
  {
    title: 'Real Estate & Homeownership Services',
    description:
      'Boost lead generation, automate client communications, and simplify property management.',
    services: [
      'Property Management Services',
      'Real Estate Listing Services',
      'Home Warranty Services',
      'Mortgage Origination & Lending'
    ],
    link: '#',
    image: '/media/images/real estate mini.svg'
  },
  {
    title: 'Utility & Tech Services',
    description:
      'Optimize workflows, enhance customer engagement, and drive sustainable energy solutions.',
    services: [
      'Solar Installation & Renewable Energy Services',
      'Utilities & Electricity Choice Providers',
      'Internet, Cable & Broadband Services'
    ],
    link: '#',
    image: '/media/images/Utility & tech mini.svg'
  },
  {
    title: 'Emerging & Specialized Services',
    description:
      'Supporting cutting-edge businesses and local service professionals with AI-driven growth strategies.',
    services: [
      'PropTech (Property Technology)',
      'AI-Driven Marketing',
      'Smart Home Services'
    ],
    link: '#',
    image:'/media/images/Utility & tech mini.svg'
  }
]

export default function IndustriesPage () {
  return (
    <div className='container'>
      <div
        className='hero-bg'
        style={{
          background:
            'linear-gradient(rgba(255, 204, 77, 0) 38%, rgb(255 252 240 / 94%) 60%), url(/media/images/hero-section.svg)'
        }}
      >
        <div className='industry-top-heading' style={{ padding: '0px 20px' }}>
          <Row gutter={[24]} align='middle'>
            <Col span={16} style={{ margin: '0 auto' }}>
              <Title level={5}>Industries</Title>
              <Title level={2}>
                Helping Your Industry Grow with Smarter AI Solutions
              </Title>
              <Title level={4}>
                Alyson.ai empowers businesses in home services, real estate,
                utilities, and more to streamline operations and increase
                revenue.
              </Title>
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
