import { Button, Typography } from 'antd'
import ContactUsModal from './ContactUsModal'
import { useState } from 'react';
import DarkButton from './DarkButton';

const { Paragraph } = Typography

const CTASection = ({ ctaText1, ctaText2  }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
const handleOpenModal = () => {
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
};

  return (
    <div className='cta-section'>
      <div className='cta-container' style={{ background: 'url(/media/images/ready-bg.svg)' }}>
        <div className='cta-content'>
          {/* Main Text */}
          <Paragraph className='cta-text'>
            <span className='cta-bold'>{ctaText1}</span>
            <br />
            <span className='cta-bold'>{ctaText2}</span>
          </Paragraph>


          {/* Buttons */}
          <div className='cta-buttons'>
            <DarkButton buttonText='Get a Demo' onClick={handleOpenModal} />
            {/* <Button onClick={handleOpenModal} className='cta-button black-btn'>Get a Demo</Button> */}
            <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASection
