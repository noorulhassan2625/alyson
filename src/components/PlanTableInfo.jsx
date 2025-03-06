import React from 'react'
import { Table, Button, Typography } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

const PlanTableInfo = () => {
  const columns = [
    {
      title: <strong>PRODUCT FEATURES</strong>,
      dataIndex: 'feature',
      key: 'feature',
      align: 'left',
      render: text => <strong>{text}</strong>,
      'width': '50%'
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          <Title level={5} style={{ marginBottom: 0 }}>
            Free Plan
          </Title>
          <Text
            style={{ fontSize: '20px', fontWeight: 'bold', color: '#1E5DCF' }}
          >
            $0
          </Text>
          <br />
          <Text type='secondary'>Free for a limited time</Text>
          <br />
          <Button type='primary' style={{ marginTop: 8 }}>
            Get started
          </Button>
        </div>
      ),
      dataIndex: 'free',
      key: 'free',
      align: 'center'
    },
    {
      title: (
        <div style={{ textAlign: 'center' }}>
          <Title level={5} style={{ marginBottom: 0, color: '#178A41' }}>
            Business Plan
          </Title>
          <Text
            style={{ fontSize: '20px', fontWeight: 'bold', color: '#178A41' }}
          >
            Business Plan
          </Text>
          <br />
          <Button
            type='default'
            style={{ backgroundColor: '#178A41', color: '#fff', marginTop: 8 }}
          >
            Get started
          </Button>
        </div>
      ),
      dataIndex: 'business',
      key: 'business',
      align: 'center'
    }
  ]

  const data = [
    {
      key: '1',
      feature: 'Acquire: AI-Driven Campaigns',
      free: <CheckOutlined />,
      business: <CheckOutlined />
    },
    {
      key: '2',
      feature: 'Create: Ad & Landing Page Tools',
      free: <CheckOutlined />,
      business: <CheckOutlined />
    },
    {
      key: '3',
      feature: 'Create: Website Creation',
      free: <CloseOutlined style={{ color: 'red' }} />,
      business: <CheckOutlined />
    },
    {
      key: '4',
      feature: 'Checkout: Accelerated Payments',
      free: <CheckOutlined />,
      business: <CheckOutlined />
    },
    {
      key: '5',
      feature: 'Assistant: AI Scheduling',
      free: <CheckOutlined />,
      business: <CheckOutlined />
    },
    {
      key: '6',
      feature: 'Activate: Re-Engagement Tools',
      free: <CheckOutlined />,
      business: <CheckOutlined />
    },
    {
      key: '7',
      feature: 'Audiences: CRM Data Insights',
      free: <CheckOutlined />,
      business: <CheckOutlined />
    },
    { key: '8', feature: 'Identity Solution', free: 'No', business: 'Yes' },
    {
      key: '9',
      feature: 'Revenue Agreement',
      free: 'Terms agreed upfront on incremental revenue growth',
      business: 'Terms agreed upfront on incremental revenue growth'
    },
    {
      key: '10',
      feature: 'Limited-Time Offer',
      free: 'Available until (insert date)',
      business: 'N/A'
    },
    {
      key: '11',
      feature: 'Terms & Conditions Apply',
      free: 'Unlimited',
      business: 'Unlimited'
    }
  ]

  return (
    <Table columns={columns} dataSource={data} pagination={false} bordered />
  )
}

export default PlanTableInfo
