import FeaturePageHero from '../components/FeaturePageHero'
import CTASection from '../components/CTASection'
import '../css/featurePages.css'
import { Col, Divider, Row, Typography } from 'antd'
import FeatureContentBox from '../components/FeatureContentBox'
import SolarContentBox from '../components/SolarContentBox'
import ServicesList from '../components/ServicesList'

const { Title } = Typography
export default function AcquirePage () {
  const solarContentProps = {
    iconSrc: '/media/images/Solar Box Icon.svg',
    mainTitle: 'Boosting Solar Company Revenue with Alyson Acquire',
    subTitle: 'Achieving a 35% Revenue Increase through AI-Driven Marketing',
    contentText: 'A prominent solar energy company with annual revenues exceeding $100 million integrated Alyson Acquire into their marketing operations. Leveraging AI-driven customer acquisition and intelligent campaign management, the company experienced a 19% revenue increase within the first quarter, demonstrating the platform\'s effectiveness in enhancing marketing strategies and driving substantial business growth.',
    buttonText: 'Hear from Our Satisfied Users',
    backgroundColor: '#FFBB2A',
    cardStyle: { borderRadius: 12, padding: '24px', textAlign: 'left' }
  };

  return (
    <div className='container'>
      <div
        className='hero-bg'
        style={{
          background:
            'linear-gradient(rgba(255, 204, 77, 0) 38%, rgb(255 252 240 / 94%) 60%), url(/media/images/hero-section.svg)'
        }}
      >
        <FeaturePageHero
          title1='Acquire'
          title2='Stop Wasting Money on Ad Platforms Like Google, Meta, and TikTok'
          text='Turn every ad dollar into a measurable win with Alyson Acquire’s data-driven targeting and optimization platform.'
          buttonText='Optimize Your Ad Spend Now'
          imageSrc='./media/images/AcquireHeroImg.svg'
        />
        <div className='center-heading' style={{ padding: '0px 20px' }}>
          <Row gutter={[24]} align='middle'>
            <Col span={16} style={{ margin: '0 auto' }}>
              <Title level={2}>
                Alyson’s AI models are trusted by top home services companies to
                automate and optimize their marketing campaigns with precision.
              </Title>
            </Col>
          </Row>
        </div>
        <div className='feature-page-content acquire-feature'>
          <FeatureContentBox
            title2='Maximize Ad Efficiency with Comprehensive Data Profiles'
            text='With Alyson Acquire, you gain access to detailed data profiles and a robust identity graph that refines your ad targeting. Every dollar spent connects you with customers who perfectly match your Ideal Customer Profile (ICP)'
            buttonText='Get Started with Smarter Targeting'
            imageSrc='./media/images/170M profiles.svg'
            listItems={[
              'Identify high-value prospects.',
              'Minimize wasted spend on low-quality leads.',
              'Drive better results on Google, Meta, and TikTok.'
            ]}
          />
          <FeatureContentBox
            title2='Real-Time Traffic Grading for Instant Insights'
            text='Stop guessing about ad performance. Alyson Acquire evaluates the quality of traffic from all major platforms in real time, giving you actionable insights to optimize campaigns on the fly.'
            buttonText='See Real-Time Grading in Action'
            imageSrc='./media/images/realtime trafficking.svg'
            listItems={[
              'Grade traffic quality instantly.',
              'Adapt campaigns for better outcomes.',
              'Save money by focusing on what works.'
            ]}
          />
          <FeatureContentBox
            title2='Smarter Algorithms, Smarter Results'
            text='Close the loop with advanced feedback systems that provide ad platforms like Google, Meta, and TikTok the data they need to refine performance. Alyson Acquire ensures every campaign gets smarter over time, boosting ROI and driving sustained success'
            buttonText='Boost ROI with Feedback Loops'
            imageSrc='./media/images/smarter algorithms.svg'
            listItems={[
              'Feed critical performance data back to ad algorithms',
              'Enable smarter targeting based on real results.',
              'Build lasting success with ongoing campaign refinement.'
            ]}
          />
          <FeatureContentBox
            title2='Scale with Confidence'
            text='Alyson Acquire’s identity graph technology ensures that your campaigns consistently reach your ideal audience, making it easier to scale your advertising efforts without overspending.'
            buttonText='Boost ROI with Feedback Loops'
            imageSrc='./media/images/scale with confidence.svg'
            listItems={[
              'Reach the right audience at scale.',
              'Stay within budget while growing your reach.',
              'Gain the confidence to expand your campaigns.'
            ]}
          />
        </div>
      </div>

      <SolarContentBox 
        iconSrc={solarContentProps.iconSrc}
        mainTitle={solarContentProps.mainTitle}
        subTitle={solarContentProps.subTitle}
        contentText={solarContentProps.contentText}
        buttonText={solarContentProps.buttonText}
        backgroundColor={solarContentProps.backgroundColor}
        cardStyle={solarContentProps.cardStyle}
      />

      <CTASection
        ctaText1='“Stop wasting money on ad platforms that don’t deliver.”'
        ctaText2='Optimize your ad spend with Alyson Acquire now.'
      />
      <ServicesList/>
      <div  style={{background:'white', padding:'5px 0px'}}>
      <div style={{background:'white', padding:'5px 0px'}}>
      <div className='section-divider' >
          <Divider style={{ color: '#FFBB2A' }} />
        </div>
      </div>
      </div>
    
         <Row
              gutter={[40]}
              className='contact-info-box'
              justify='center'
              style={{
                background: '#FFF8E5',
                padding: '0px 30px 50px 30px',
                margin: '0px'
              }}
            >
              {/* Company Column */}
              <Col xs={24} sm={12} md={6} lg={6} style={{ justifyContent: 'right' }}>
                <div className='contact-box-1' style={{ display: 'flex', justifyContent: 'end' }}>
                  <div>
                    <img src='/media/images/support alyson email.svg' alt='' />
                  </div>
                  <Title level={5} className='cotact-info'>
                    support@alyson.ai
                  </Title>
                </div>
              </Col>
      
              {/* Contact Column */}
              <Col xs={24} sm={12} md={18} lg={6}>
                <div className='contact-box-2' style={{ display: 'flex' }}>
                  <div>
                    <img src='/media/images/helpline call.svg' alt='' />
                  </div>
                  <Title level={5} className='cotact-info'>
                    (123) 456-7890
                  </Title>
                </div>
              </Col>
            </Row>
      {/* <LinksSection />
      <FinalCTA /> */}
    </div>
  )
}
