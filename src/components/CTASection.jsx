import { Button, Typography } from 'antd'

const { Paragraph } = Typography

const CTASection = () => {
  return (
    <div className='cta-section'>
      <div className='cta-container'>
        <div className='cta-content'>
          {/* Main Text */}
          <Paragraph className='cta-text'>
            <span className='cta-bold'>
              Ready to transform your home services business?
              <br />
               Get started with
              Alyson today.
            </span>
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
