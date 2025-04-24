import { Card, Row, Col } from 'antd';
import DarkButton from './DarkButton';
import ContactUsModal from './ContactUsModal';
import { useState } from 'react';
import { motion, useInView } from 'framer-motion'; // Import useInView from framer-motion
import { useRef } from 'react'; // Import useRef for the ref

const cardData = [
  {
    icon: (
      <>
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
];

const AcquireCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null); // Create a ref for the motion.div
  const isInView = useInView(ref, {
    once: true, // Animation triggers only once
    amount: 0.3 // Trigger when 30% of the component is visible
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Define the animation variants
  const rowVariants = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } // Fade in and slide to position
  };

  return (
    <div className='cards-section AcquireCards'>
      <motion.div
        ref={ref} // Attach the ref to observe visibility
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'} // Animate only when in view
        variants={rowVariants}
      >
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
      </motion.div>
      <div className={'aquire-btn'}>
        <DarkButton buttonText='Get a Demo' onClick={handleOpenModal} />
        <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default AcquireCards;