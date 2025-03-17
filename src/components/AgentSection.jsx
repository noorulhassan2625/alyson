import { Row, Col, Typography, Divider } from 'antd'
import DarkButton from './DarkButton'
import ContactUsModal from './ContactUsModal'
import { useState } from 'react'

const { Title, Paragraph } = Typography

const AgentSection = () => {
  const features = [
    {
      title: 'AI-Powered Scheduling',
      description:
        'Let Alyson Assistant handle calls, emails, and texts to help your home services business book more appointments.',
      icon: (
        <>
          {' '}
          <img
            src='/media/images/ai_powered.svg'
            alt={'iconImage'}
            width={'40px'}
          />
        </>
      )
    },
    {
      title: 'Data Science Models',
      description:
        'Alyson models predict the likelihood of all users taking important actions, from opening an email to answering a call to converting to revenue.',
      icon: (
        <>
          {' '}
          <img
            src='/media/images/data_science_model.svg'
            alt={'iconImage'}
            width={'40px'}
          />
        </>
      )
    },
    {
      title: '1% of the Cost of a Human',
      description:
        'Alyson can make phone calls at as low as 1% of the cost of a human, allowing your sales team to focus on high-value activities.',
      icon: (
        <>
          {' '}
          <img
            src='/media/images/one_of_the_cost.svg'
            alt={'iconImage'}
            width={'40px'}
          />
        </>
      )
    },
    {
      title: 'Stop Losing Deals',
      description:
        'Stop losing deals to your competition because you’re too busy to manage the follow-up.',
      icon: (
        <>
          {' '}
          <img
            src='/media/images/stop_losing_deals.svg'
            alt={'iconImage'}
            width={'40px'}
          />
        </>
      )
    }
  ]
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='agent-container'>
      <div className='agent-content'  style={{background:'url(/media/images/Agent-bg.svg)'}}>
        <div className='section-divider'>
          <Divider style={{ color: '#FFBB2A' }} />
        </div>
        {/* Header Section */}
        <div className='agent-header'>
          <div className={'section-title-header'}>
            <img src='/media/images/Agent.svg' alt='Alyson Logo' width='13%' />
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
        </div>
        <DarkButton buttonText='Get a Demo' onClick={handleOpenModal} />
          <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  )
}

export default AgentSection
