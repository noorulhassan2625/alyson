import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Typography } from 'antd'
import LegelHero from '../components/LegelHero'
import '../css/legalPagesStyle.css'
import LegalLinks from '../components/LegalLinks'

const { Title, Paragraph, Text } = Typography

function About () {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes('/about')) {
      document.body.style.backgroundColor = '#FAFAFA'
    } else {
      document.body.style.backgroundColor = ''
    }
  }, [location.pathname])

  return (
    <div className='legal-page'>
      <LegelHero title={'About Alyson.ai'} />
      <div className='legal-content'>
        <Paragraph>
          At Alyson.ai, we are revolutionizing the way you manage home projects.
          Our AI-powered platform brings simplicity and efficiency to renovation
          and building projects, transforming a usually complex process into a
          streamlined and enjoyable experience. Our tools empower you to plan
          effectively, compare contractor bids, and make well-informed decisions
          that align with your budget and design preferences.
        </Paragraph>
        <Paragraph>
          Our mission is to make your home improvement journey as smooth and
          effective as possible, ensuring you feel supported every step of the
          way. With Alyson.ai, bring your dream home to life without the usual
          stress and overspending. Join us in building a future where home
          projects are managed smarter, not harder.
        </Paragraph>
      </div>
      <LegalLinks/>
    </div>
  )
}

export default About
