import { Row, Col, Typography, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import DarkButton from './DarkButton'

const { Title, Paragraph } = Typography

const AgentSection = () => {
  const features = [
    {
      title: 'AI-Powered Scheduling',
      description:
        'Let Alyson Assistant handle calls, emails, and texts to help your home services business book more appointments.',
      icon: '🤖'
    },
    {
      title: 'Data Science Models',
      description:
        'Alyson models predict the likelihood of all users taking important actions, from opening an email to answering a call to converting to revenue.',
      icon: '📊'
    },
    {
      title: '1% of the Cost of a Human',
      description:
        'Alyson can make phone calls at as low as 1% of the cost of a human, allowing your sales team to focus on high-value activities.',
      icon: '📞'
    },
    {
      title: 'Stop Losing Deals',
      description:
        'Stop losing deals to your competition because you’re too busy to manage the follow-up.',
      icon: '📉'
    }
  ]

  return (
    <div className='agent-container'>
      <div className='agent-content'>
        {/* Header Section */}
        <div className='agent-header'>
          <div className={'section-title-header'}>
            <img src='/media/images/Agent.svg' alt='Alyson Logo' width='10%' />
            <Title level={2}>Agent</Title>
          </div>
          <Paragraph>
            Alyson acts as an agent to help you get more appointments. She can
            make and receive calls, send emails and texts, and seamlessly manage
            your data to build audiences and convert old leads back into fresh
            ones.
          </Paragraph>
        </div>

        {/* Features Section */}
        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col key={index} xs={24} sm={12} md={6}>
              <div className='agent-feature'>
                <div className='feature-icon'>{feature.icon}</div>
                <Title level={5}>{feature.title}</Title>
                <Paragraph>{feature.description}</Paragraph>
              </div>
            </Col>
          ))}
        </Row>

        {/* CTA Button */}
        <div className='agent-btn-container'>
          {/* <Button type='primary' size='large' className='agent-btn'>
            Try Alyson Agent for Free
          </Button> */}
        </div>
          <DarkButton buttonText="Try Alyson Agent for Free" />
      </div>
    </div>
  )
}

export default AgentSection
