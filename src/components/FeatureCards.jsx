import React, { useState, useEffect } from 'react'
import { Card } from 'antd'
import {
  GlobalOutlined,
  UserOutlined,
  AimOutlined,
  DatabaseOutlined,
  ShoppingOutlined,
  MonitorOutlined,
} from '@ant-design/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Autoplay } from 'swiper/modules'
import GlobeIcon from './SVGComponents/GlobeIcon'
import GmailIcon from './SVGComponents/GmailIcon'
import SimpleLayoutIcon from './SVGComponents/SimpleLayoutIcon'
import FacebookIcon from './SVGComponents/FacebookIcon'
import InstagramIcon from './SVGComponents/InstagramIcon'
import MetaIcon from './SVGComponents/MetaIcon'
import PlusIcon from './SVGComponents/PlusIcon'
import AdsenseIcon from './SVGComponents/AdsenseIcon'
import DatabaseIcon from './SVGComponents/DatabaseIcon'
import MultipleUsers from './SVGComponents/MultipleUsers'
import PrivacyShieldIcon from './SVGComponents/PrivacyShieldIcon'

const features = [
  {
    icon: (
      <GlobalOutlined
        style={{ width: 20, height: 20, fontSize: 24, color: '#ff9800' }}
      />
    ),
    title: 'AI-Powered Website Creation',
    description:
      'Instantly generate & optimize landing pages for conversions and conversations',
    linkIcons: [<SimpleLayoutIcon />, <GlobeIcon />]
  },
  {
    icon: (
      <UserOutlined
        style={{ width: 20, height: 20, fontSize: 24, color: '#2196F3' }}
      />
    ),
    title: 'Identity & Lead Matching',
    description:
      'De-anonymize website visitors & verify user identities. Website and visitors',
    linkIcons: [<GmailIcon />, <GlobeIcon />]
  },
  {
    icon: (
      <AimOutlined
        style={{ width: 20, height: 20, fontSize: 24, color: '#673ab7' }}
      />
    ),
    title: 'Smart Customer Acquisition',
    description:
      'Target the right leads with AI-driven precision. Pinpoint your ideal leads with AI-powered.',
    linkIcons: [
      <FacebookIcon />,
      <InstagramIcon/>,
      <MetaIcon />,
      <PlusIcon/>,
      <span className='link-icon-text' style={{position:'relative', top:'9px', left:'-8px'}}>and many more platforms</span>
    ]
  },
  {
    icon: (
      <DatabaseOutlined
        style={{ width: 20, height: 20, fontSize: 24, color: '#f44336' }}
      />
    ),
    title: 'Data-Driven Audience Building',
    description: 'Build hyper-targeted audiences with rich customer insights',
    linkIcons: [<DatabaseIcon />, <MultipleUsers />]
  },
  {
    icon: (
      <ShoppingOutlined
        style={{ width: 20, height: 20, fontSize: 24, color: '#4caf50' }}
      />
    ),
    title: 'Frictionless AI Checkout',
    description:
      'Use historical data to predict and improve marketing campaign success rates.',
    linkIcons: [<div className='privacyIdcon'><PrivacyShieldIcon/></div>]
  },
  {
    icon: (
      <MonitorOutlined
        style={{ width: 20, height: 20, fontSize: 24, color: '#4caf50' }}
      />
    ),
    title: 'Real-Time Ad Optimization',
    description:
      'Optimize bids and placements using AI-driven insights for better results.',
    linkIcons: [<AdsenseIcon />, <GlobeIcon />]
  }
]

const FeatureCards = () => {
  const [slidesPerView, setSlidesPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth <= 768 ? 1 : 3)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='feature-section'>
      <Swiper
        effect='coverflow'
        centeredSlides
        slidesPerView={slidesPerView}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 30000,
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
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
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
    </div>
  )
}

export default FeatureCards
