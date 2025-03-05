import { Col, Row, Typography } from 'antd'
import React from 'react'
import DarkButton from './DarkButton'

const { Title, Text } = Typography

function FeaturePageHero ({ title1, title2, text, buttonText, imageSrc }) {
  return (
    <div className='feature-page-hero'>
      <Row gutter={[24, 24]} align='middle'>
        {/* Left Side Content */}
        <Col span={12} xs={24} lg={12} className='textual-content'>
          <Title level={5}>{title1}</Title>
          <Title level={1}>{title2}</Title>
          <Text>{text}</Text>
          <div style={{ marginTop: 16 }}>
            <DarkButton buttonText={buttonText} />
          </div>
        </Col>

        {/* Right Side Content */}
        <Col span={12} xs={24} lg={12}>
          <div className='feature-image'>
            <img
              src={imageSrc}
              width='100%'
              height='300px'
              alt='AI-driven ads'
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default FeaturePageHero
