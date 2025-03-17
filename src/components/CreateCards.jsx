import React, { useState } from 'react'
import GenerativeAISection from './GenerativeAISection'
import RevenueBox from './RevenueBox'
import CompaignGradingBox from './CompaignGrading'
import FeedBackBox from './FeedbackBox'
import DarkButton from './DarkButton'
import { Divider } from 'antd'
import ContactUsModal from './ContactUsModal'

function CreateCards() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
const handleOpenModal = () => {
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
};

  return (
    <div className={'create-cards'}
    >
      <div className='create-cards-bg'  style={{background:'url(/media/images/Create-bg.svg)'}}>
      <GenerativeAISection />
      <Divider style={{ borderColor: '#ffffff', minWidth:'50%', width:'80%', margin:'0 auto' }} />
      <RevenueBox />
      <Divider style={{ borderColor: '#ffffff', minWidth:'50%', width:'80%', margin:'0 auto' }} />
      <CompaignGradingBox />
      <Divider style={{ borderColor: '#ffffff', minWidth:'50%', width:'80%', margin:'0 auto' }} />
      <FeedBackBox />
      </div>
      <DarkButton buttonText='Get a Demo' onClick={handleOpenModal} />
      <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className='section-divider'>
        <Divider style={{ color: '#FFBB2A' }} />
      </div>
    </div>
  )
}

export default CreateCards
