import { Card, Row, Col } from 'antd'
import DarkButton from './DarkButton'
import ContactUsModal from './ContactUsModal'
import { useState } from 'react'

const cardData = [
  {
    icon: (
      <>
        {' '}
        <img
          src='/media/images/Acquire_icon_1.svg'
          alt={'iconImage'}
          width={'70%'}
        />
      </>
    ),
    title: 'AI-Driven Customer Acquisition',
    description:
      'Alyson deanonymizes site traffic, grades homeowner quality based on your ICP, and adjusts bids accordingly.'
  },
  {
    icon: (
      <>
        {' '}
        <img
          src='/media/images/Acquire_icon_2.svg'
          alt={'iconImage'}
          width={'70%'}
        />
      </>
    ),
    title: 'Proprietary Campaign Grading',
    description:
      'Sometimes, the competition is your other ads. Rank every campaign and ad, then automatically ensure your budget goes to your highest-ranked ads.'
  },
  {
    icon: (
      <>
        {' '}
        <img
          src='/media/images/Acquire_icon_3.svg'
          alt={'iconImage'}
          width={'70%'}
        />
      </>
    ),
    title: 'Pause or Reduce Bids',
    description:
      'Pause bad ads quickly and save a lot of money. Let Alyson’s AI assist you in identifying ads that aren’t likely to succeed and pause or reduce bids.'
  },
  {
    icon: (
      <>
        {' '}
        <img
          src='/media/images/Acquire_icon_4.svg'
          alt={'iconImage'}
          width={'70%'}
        />
      </>
    ),
    title: 'Better Feedback Loops',
    description:
      'Build world-leading feedback loops and stop relying on pixels that miss up to 30% of the events you need to optimize your ads.'
  }
]


const AcquireCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
const handleOpenModal = () => {
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
};

  return (
    <div className='cards-section AcquireCards'>
      <Row gutter={[24, 24]} justify='center'>
        {cardData.map((card, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card className='Aquire-cards' bordered={false}>
              <div className='card-content'>
                <div className='icon'>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <div className={'aquire-btn'}>
      <DarkButton buttonText='Get a Demo' onClick={handleOpenModal} />
      <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  )
}

export default AcquireCards
