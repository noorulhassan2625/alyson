import React from 'react';
import GenerativeAISection from './GenerativeAISection';
import RevenueBox from './RevenueBox';
import CompaignGradingBox from './CompaignGrading';
import FeedBackBox from './FeedbackBox';
// import DarkButton from './DarkButton';
import { Divider } from 'antd';
// import ContactUsModal from './ContactUsModal';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function CreateCards() {
  //   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  // Refs for each section
  const generativeRef = useRef(null);
  const revenueRef = useRef(null);
  const campaignRef = useRef(null);
  const feedbackRef = useRef(null);

  // InView hooks for each section
  const isGenerativeInView = useInView(generativeRef, { once: true, amount: 0.3 });
  const isRevenueInView = useInView(revenueRef, { once: true, amount: 0.3 });
  const isCampaignInView = useInView(campaignRef, { once: true, amount: 0.3 });
  const isFeedbackInView = useInView(feedbackRef, { once: true, amount: 0.3 });

  // Animation variants for left and right
  const leftVariants = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } // Fade in and slide to position
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } // Fade in and slide to position
  };

  return (
    <div className={'create-cards'}>
      {/* <div className='create-cards-bg'  style={{background:'url(/media/images/Create-bg.svg)'}}> */}
      <div className='create-cards-bg'>
        <motion.div
          ref={generativeRef}
          initial="hidden"
          animate={isGenerativeInView ? 'visible' : 'hidden'}
          variants={leftVariants}
        >
          <GenerativeAISection />
        </motion.div>
        <Divider style={{ borderColor: '#ffffff', minWidth: '50%', width: '80%', margin: '0 auto' }} />
        <motion.div
          ref={revenueRef}
          initial="hidden"
          animate={isRevenueInView ? 'visible' : 'hidden'}
          variants={rightVariants}
        >
          <RevenueBox />
        </motion.div>
        <Divider style={{ borderColor: '#ffffff', minWidth: '50%', width: '80%', margin: '0 auto' }} />
        <motion.div
          ref={campaignRef}
          initial="hidden"
          animate={isCampaignInView ? 'visible' : 'hidden'}
          variants={leftVariants}
        >
          <CompaignGradingBox />
        </motion.div>
        <Divider style={{ borderColor: '#ffffff', minWidth: '50%', width: '80%', margin: '0 auto' }} />
        <motion.div
          ref={feedbackRef}
          initial="hidden"
          animate={isFeedbackInView ? 'visible' : 'hidden'}
          variants={rightVariants}
        >
          <FeedBackBox />
        </motion.div>
      </div>
      {/* <DarkButton buttonText='Get a Demo' onClick={handleOpenModal} />
      <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
      <div className='section-divider'>
        <Divider style={{ color: '#FFBB2A' }} />
      </div>
    </div>
  );
}

export default CreateCards;