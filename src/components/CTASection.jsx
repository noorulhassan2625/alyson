import { Button, Typography } from 'antd'

const { Paragraph } = Typography

const CTASection = () => {
  return (
    <div className='cta-section'>
      <div className='cta-container'>
        <div className='cta-content'>
          {/* Main Text */}
          <Paragraph className='cta-text'>
            “Stop wasting money on ad platforms that{' '}
            <span className='cta-bold'>don’t</span> deliver.
            <br />
            Optimize your ad spend with{' '}
            <span className='cta-bold'>Alyson Acquire</span> now.”
          </Paragraph>

          {/* Buttons */}
          <div className='cta-buttons'>
            <Button className='cta-button black-btn'>Request a Demo</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASection
