import { Col, Row, Typography } from 'antd'
import React from 'react'


const { Title, Paragraph } = Typography;

function ServicesCards () {
  return (
    <div className='services-cards'>
      <div className={'section-title-header'}>
        <Title level={2}>
          Helping Your Industry Grow with Smarter AI Solutions
        </Title>
      </div>
      <div className='identity-header'>
        <Paragraph>
          Build tailored profiles and leverage Alyson's 172M identity graph
          members to ensure accurate data for personalized <br></br> communications and
          targeted campaigns.
        </Paragraph>
      </div>
      <div className='services-cards-container'>
        <Row>
          <Col lg={6} xl={6} md={6} sm={24} xs={24} className='section-title-header'>
            <div className='services-card'>
              <img
                src='/media/images/servicebox-icon-1.svg'
                alt='Service Icon 1'
              />
              <h3>Home Services & Trades</h3>
            </div>{' '}
          </Col>
          <Col lg={6} xl={6} md={6} sm={24} xs={24} className='identity-header'>
            <div className='services-card'>
              <img
                src='/media/images/servicebox-icon-2.svg'
                alt='Service Icon 2'
              />
              <h3>Real Estate & Homeownership Services</h3>
            </div>{' '}
          </Col>
          <Col lg={6} xl={6} md={6} sm={24} xs={24} className='identity-header'>
            <div className='services-card'>
              <img
                src='/media/images/servicebox-icon-3.svg'
                alt='Service Icon 2'
              />
              <h3>Utility & Tech Services</h3>
            </div>{' '}
          </Col>
          <Col lg={6} xl={6} md={6} sm={24} xs={24} className='identity-header'>
            <div className='services-card'>
              <img
                src='/media/images/servicebox-icon-4.svg'
                alt='Service Icon 2'
              />
              <h3>Emerging & Specialized Services</h3>
            </div>{' '}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ServicesCards
