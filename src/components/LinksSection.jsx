import React, { useState, useEffect } from 'react'
import { Row, Col, Typography, Button } from 'antd'
import { Link } from 'react-router-dom'
const { Title } = Typography

const LinksSection = () => {
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize() // Check on mount
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const industries = [
    [
      'HVAC',
      'Plumbing Software',
      'Electrician Software',
      'HVAC Software',
      'Plumbing Software',
      'Electrician Software',
      'Garage Door',
      'Chimney Sweep',
      'Home Warranty Services',
      'Services'
    ],
    [
      'Mortgage Origination',
      'Credit Repair and Monitoring',
      'Internet, Cable & Broadband',
      'Moving and Relocation Services',
      'Utilities: Electricity Choice',
      'Other Home Services Products',
      'Water Treatment',
      'Landscape',
      'Pool Service',
      'Septic'
    ],
    [
      'Pest Control',
      'Lawn Care',
      'Roofing',
      'Local Service Pros',
      'Escrow Service',
      'Property Insurance',
      'Solar Installation & Services',
      'Appliance Installation',
      'Flooring Installation',
      'Home Furnishings'
    ],
    [
      'Smart Home Technology',
      'Proptech Products',
      'Bathroom Remodeling',
      'Roofing Services',
      'Kitchen Remodeling',
      'Window and Door Installation',
      'Appliance Repair',
      'Home Security System Installation',
      'System Installation',
      'Real Estate Listing Services'
    ]
  ]

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <div className='footer-container'>
      <Row gutter={[40, 20]} justify='center'>
        {/* Product Column */}
        <Col xs={24} sm={12} md={6} lg={6}>
          <Title level={5} className='footer-title'>
            Product
          </Title>
          <ul className='footer-list'>
            {[
              'Acquire',
              'Create',
              'Checkout',
              'Assistant',
              'Audiences',
              'Alyson Activate',
              'Identity'
            ].map((item, index) => (
              <li key={index}>
                <Link href='/contact'>{item}</Link>
              </li>
            ))}
          </ul>
        </Col>

        {/* Industries Column */}
        <Col
          xs={24}
          sm={12}
          md={18}
          lg={18}
          className={isMobile && showAll ? 'activated' : ''}
        >
          <Title level={5} className='footer-title'>
            Industries
          </Title>
          <Row gutter={[20, 10]}>
            {industries.map((column, index) => (
              <Col
                xs={24}
                sm={6}
                md={6}
                lg={6}
                key={index}
                className={isMobile && showAll ? 'activated' : ''}
              >
                <ul className='footer-list'>
                  {column
                    .slice(0, isMobile && !showAll ? 2 : column.length)
                    .map((item, i) => (
                      <li key={i}>
                        <Link to='/contact'>{item}</Link>
                      </li>
                    ))}
                </ul>
              </Col>
            ))}
          </Row>
          {isMobile && (
            <Button
              className='expand-link-btn'
              type='link'
              onClick={toggleShowAll}
            >
              {showAll ? 'less' : 'more'}
            </Button>
          )}
        </Col>
      </Row>
      <hr style={{ borderColor: '#FCEAC7', opacity: '0.5' }}></hr>
      <Row gutter={[40]} className='contact-info-box' justify='center'>
        {/* Company Column */}
        <Col xs={24} sm={12} md={6} lg={6}>
          <div style={{ display: 'flex' }}>
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
          <div style={{ display: 'flex' }}>
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

export default LinksSection
