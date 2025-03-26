import React from 'react'
import { Card, Button, Typography, Col } from 'antd'
import { BarChartOutlined } from '@ant-design/icons'
import DarkButton from './DarkButton'

const { Title, Text } = Typography

const SolarContentBox = () => {
  return (
    <div
      style={{
        background: '#FFBB2A',
        padding: '70px 40px 20px 40px',
        display: 'flex',
        justifyContent: 'center'
      }}
      className='solar-content-box'
    >
      <Col span='22'>
        <Card
          style={{ borderRadius: 12, padding: '24px', textAlign: 'left' }}
          bordered={false}
        >
          <div>
            <img src='/media/images/Solar Box Icon.svg' alt='Icon' />
            <Title level={3}>
              Boosting Solar Company Revenue with Alyson Acquire
            </Title>
          </div>

          <Title level={4}>
            Achieving a 35% Revenue Increase through AI-Driven Marketing
          </Title>

          <Text>
            A prominent solar energy company with annual revenues exceeding $100
            million integrated Alyson Acquire into their marketing operations.
            Leveraging AI-driven customer acquisition and intelligent campaign
            management, the company experienced a 19% revenue increase within
            the first quarter, demonstrating the platform’s effectiveness in
            enhancing marketing strategies and driving substantial business
            growth.
          </Text>

          <br />
          <DarkButton buttonText='Hear from Our Satisfied Users' />
        </Card>
      </Col>
    </div>
  )
}

export default SolarContentBox
