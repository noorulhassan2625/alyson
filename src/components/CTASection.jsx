import { Button, Typography } from 'antd'

const { Paragraph } = Typography

const CTASection = ({ ctaText1, ctaText2  }) => {
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
            <Button className='cta-button black-btn'>Request a Demo</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASection
