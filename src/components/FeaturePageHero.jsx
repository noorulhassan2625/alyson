import { Col, Row, Typography } from 'antd'
import React from 'react'
import DarkButton from './DarkButton'

const { Title, Text } = Typography

function FeaturePageHero() {
  return (
    <div className='feature-page-hero'>
      <Row gutter={[24, 24]} align="middle">
        {/* Left Side Content */}
        <Col span={12} className='textual-content'>
          <Title level={2}>
            Stop Wasting Money on Ad Platforms Like Google, Meta, and TikTok
          </Title>
          <Text>
            Turn every ad dollar into a measurable win with Alyson Acquire’s
            data-driven targeting and optimization platform.
          </Text>
          <div style={{ marginTop: 16 }}>
            <DarkButton buttonText="Optimize Your Ad Spend Now" />
          </div>
        </Col>

        {/* Right Side Content */}
        <Col span={12}>
          <div className="feature-image">
            <img src="https://picsum.photos/seed/picsum/200/300" width={'100%'} height={'300px'} alt="AI-driven ads" />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default FeaturePageHero
