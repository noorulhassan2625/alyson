import React, { useState } from 'react'
import { Row, Col, Typography, Collapse, Image } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography
const { Panel } = Collapse

function IdentityAccordions () {
  const [activeKey, setActiveKey] = useState(['1']) // Use array for activeKey

  const accordionData = [
    {
      key: '1',
      title: 'Comprehensive Identity Matching ',
      content:
        'Access over 172 million profiles and match data to create tailored identity and entity profiles for your business needs.',
      image: '/media/images/identity-Accordion-1.svg'
    },
    {
      key: '2',
      title: 'Household Expansion',
      content:
        'Expand your identity graph to include spouses and other high-propensity user segments.',
      image: '/media/images/identity-Accordion-2.svg'
    },
    {
      key: '3',
      title: 'Expand Ad Platform Audiences',
      content:
        'Increase match rates by as much as 50%, so when you have high-value prospects, platforms can show them your ads and boost revenues.',
      image: '/media/images/identity-Accordion-3.svg'
    },
    {
      key: '4',
      title: 'Automated Segment and Score',
      content:
        'Our data scientists score and segment your data automatically. Connect it to get real-time dashboards benchmarking your industry.',
      image: '/media/images/identity-Accordion-4.svg'
    }
  ]

  const handleChange = keys => {
    setActiveKey(keys)
  }

  // Get the currently active item (last item in array for accordion mode)
  const activeItem =
    accordionData.find(item => item.key === activeKey[activeKey.length - 1]) ||
    accordionData[0]

  return (
    <div style={{ background: '#FFFAF0', padding: '24px' }}>
      <div className='checkout-header'>
        <div className={'section-title-header'}>
          <img src='/media/images/activate.svg' alt='Alyson Logo' width='13%' />
          <Title level={2}>Identity</Title>
        </div>
        <Paragraph>
          Build tailored profiles and leverage Alyson’s 172M identity graph
          members to ensure accurate data for personalized communications and
          targeted campaigns.
        </Paragraph>
      </div>

      <div className='accordion-container' style={{ marginTop: '32px' }}>
        <Row gutter={[32, 32]} align='middle'>
          <Col xs={24} md={14}>
            <div>
              {activeItem?.image ? (
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  style={{
                    maxWidth: '100%'
                  }}
                  onError={e => {
                    e.target.onerror = null
                    e.target.src = '/media/images/default-accordion-image.svg'
                  }}
                />
              ) : (
                <div>Image not available</div>
              )}
            </div>
          </Col>
          <Col xs={24} md={10}>
            <Collapse
              accordion
              activeKey={activeKey}
              onChange={handleChange}
              className='checkout-accordion-container'
              bordered={false}
              textAlign='left'
              expandIconPosition='right'
              expandIcon={({ isActive }) => (
                <Image
                  src='/media/images/accordion-arrow.svg'
                  alt='arrow'
                  preview={false}
                  style={{
                    transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                    marginTop: '20px'
                  }}
                />
              )}
            >
              {accordionData.map(item => (
                <Panel
                  header={
                    <span style={{ fontWeight: 600, fontSize: '24px' }}>
                      {item.title}
                    </span>
                  }
                  key={item.key}
                >
                  <Paragraph style={{ marginBottom: 0, fontSize: '16px' }}>
                    {item.content}
                  </Paragraph>
                </Panel>
              ))}
            </Collapse>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default IdentityAccordions
