import { Col, Row, Typography } from 'antd'
import React from 'react'
import DarkButton from './DarkButton'

const { Title, Text } = Typography

function AgentContentBox({ title2, text, imageSrc}) {
    return (
      <div className='feature-page-content-box'>
        <Row gutter={[24, 24]} align="middle">
          {/* Left Side Content */}
          <Col span={12}  xs={24} lg={12} className='textual-content'>
            <Title level={1} style={{fontSize:'36px'}}>{title2}</Title>
            <hr  className='separator yellow'/>
            <Text>{text}</Text>
          </Col>
          {/* Right Side Content */}
          <Col span={12} xs={24} lg={12}>
            <div className="feature-image">
              <img src={imageSrc} width="100%" alt="AI-driven ads" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  

export default AgentContentBox
