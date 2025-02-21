import React from 'react'
import { Card } from 'antd'
import {
  GlobalOutlined,
  LayoutOutlined,
  UserOutlined,
  MailOutlined,
  AimOutlined,
  FacebookOutlined,
  InstagramOutlined,
  RetweetOutlined,
  DatabaseOutlined,
  BranchesOutlined,
  ShoppingOutlined,
  MonitorOutlined,
  FontColorsOutlined
} from '@ant-design/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Autoplay } from 'swiper/modules'

const features = [
  {
    icon: <GlobalOutlined style={{ fontSize: 24, color: '#ff9800' }} />,
    title: 'AI-Powered Website Creation',
    description: 'Instantly generate & optimize landing pages for conversions.',
    linkIcons: [<LayoutOutlined />, <GlobalOutlined />]
  },
  {
    icon: <UserOutlined style={{ fontSize: 24, color: '#2196F3' }} />,
    title: 'Identity & Lead Matching',
    description: 'De-anonymize website visitors & verify user identities.',
    linkIcons: [<MailOutlined />, <GlobalOutlined />]
  },
  {
    icon: <AimOutlined style={{ fontSize: 24, color: '#673ab7' }} />,
    title: 'Smart Customer Acquisition',
    description: 'Target the right leads with AI-driven precision.',
    linkIcons: [
      <FacebookOutlined />,
      <InstagramOutlined />,
      <RetweetOutlined />
    ]
  },
  {
    icon: <DatabaseOutlined style={{ fontSize: 24, color: '#f44336' }} />,
    title: 'Data-Driven Audience Building',
    description: 'Build hyper-targeted audiences with rich customer insights',
    linkIcons: [<DatabaseOutlined />, <BranchesOutlined />]
  },
  {
    icon: <ShoppingOutlined style={{ fontSize: 24, color: '#4caf50' }} />,
    title: 'Frictionless AI Checkout',
    description: 'Use historical data to predict campaign success.',
    linkIcons: [<span>Privacy Shield</span>]
  },
  {
    icon: <MonitorOutlined style={{ fontSize: 24, color: '#4caf50' }} />,
    title: 'Real-Time Ad Optimization',
    description: 'Adjust bids & placements based on AI-driven insights.',
    linkIcons: [<FontColorsOutlined />, <GlobalOutlined />]
  }
]

const FeatureCards = () => {
  return (
    <div className='feature-section'>
      <Swiper
        effect='coverflow'
        centeredSlides
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: true
        }}
        modules={[EffectCoverflow, Autoplay]}
        className='feature-slider'
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index} className='feature-card'>
            <Card className='card-content'>
              <div className='title-header'>
                <div className='icon'>{feature.icon}</div>
                <h3>{feature.title}</h3>
              </div>
              <p>{feature.description}</p>
              <div className='links'>
                {feature.linkIcons.map((icon, idx) => (
                  <span key={idx} className='icon'>
                    {icon}
                  </span>
                ))}
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='mobile-view'>
      <Card className='card-content'>
        <div className='title-header'>
          <div className='icon'>
            <GlobalOutlined style={{ fontSize: 24, color: '#ff9800' }} />
          </div>
          <h3>AI-Powered Website Creation</h3>
        </div>
        <p>Instantly generate & optimize landing pages for conversions.</p>
        <div className='links'>
          <span className='icon'>
            <LayoutOutlined />
          </span>
          <span className='icon'>
            <GlobalOutlined />
          </span>
        </div>
      </Card>
      </div>
    </div>
  )
}

export default FeatureCards
