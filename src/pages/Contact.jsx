import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Form, Input, Button, Col, Typography } from 'antd'
import LegalLinks from '../components/LegalLinks'
import '../css/legalPagesStyle.css'
import SelectField from '../components/SelectField'

const { Title, Paragraph } = Typography
const { TextArea } = Input

function Contact () {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes('/contact')) {
      document.body.style.backgroundColor = '#ffffff'
    } else {
      document.body.style.backgroundColor = ''
    }
  }, [location.pathname])

  const onFinish = values => {
    console.log('Form Data:', values)
  }

  const interestOptions = [
    { value: 'business', label: 'Business Inquiry' },
    { value: 'support', label: 'Customer Support' },
    { value: 'feedback', label: 'Feedback' }
  ]

  return (
    <div className='legal-page'>
      <div className='contact-us-header legal-hero'>
        <Title className='legal-hero-title'>Contact Alyson.ai</Title>
      </div>
      <div className='legal-content'>
        <div className='contact-form-container'>
          <Col className='contact-form-box' lg={12} md={12} xs={24}>
            <Paragraph>
              We welcome your feedback and questions. To get in touch with us,
              please fill out the information below.
            </Paragraph>
            <Form
              layout='vertical'
              onFinish={onFinish}
              className='contact-form'
            >
              <SelectField
                label='PICK AN INDUSTRY'
                options={interestOptions}
                placeholder='What is the primary industry of your company?'
              />
              <SelectField
                label='CHOOSE NUMBER OF TECHNICIANS'
                options={interestOptions}
                placeholder='Select Number of Techs'
              />
              <SelectField
                label='IS THERE AT LEAST ONE FULL-TIME EMPLOYEE AT YOUR OFFICE?'
                options={interestOptions}
                placeholder='Select Number of full-time employees'
              />
              <SelectField
                label='WHAT TYPES OF JOBS DOES YOUR COMPANY SPECIALIZE IN?'
                options={interestOptions}
                placeholder='Select area of focus'
              />
              <SelectField
                label='PICK JOB SPECIALTY'
                options={interestOptions}
                placeholder='Select job focus'
              />

              <Form.Item
                name='name'
                label='FULL NAME'
                rules={[{ required: true, message: 'Please enter your name!' }]}
              >
                <Input placeholder='Enter your full name' />
              </Form.Item>
              <Form.Item
                name='text'
                label='PHONE'
                rules={[{ required: true, message: 'Please enter your name!' }]}
              >
                <Input placeholder='(123) 456 7890' />
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='submit-button'
                >
                  AGREE & CONTINUE
                </Button>
              </Form.Item>
            </Form>
            <div className='contact-us-footer'>
              <Paragraph>
                By clicking "Continue,'" you agree to receive recurring text
                and/or calls from Homelight and Alyson (e.g. account updates,
                news alerts, and promotional offers) to the number provided
                above, even if it is on any Do-Not-Call list. Standard message
                and data rates may apply. To unsubscribe from texts, reply STOP
                to any message you receive. Unsubscribe from calls by contacting
                Homelight at 877-989-8907 or Alyson at 866-627 -6775. Texts and
                calls may be made using an automatic telephone dialing system.
                Consent is not required as a condition of purchase. As part of
                your request. Homelight and Alyson may introduce you to eligible
                agents or Investors.
              </Paragraph>
              <Paragraph>
                By clicking "Continue," you acknowledge you have read the
                Homelight and Alyson{' '}
                <Link to='/privacy-policy'>Privacy Policies</Link> and agree to
                the <Link to='/terms-of-use'>Terms of Service</Link> for both
              </Paragraph>
            </div>
          </Col>
        </div>
      </div>
      <LegalLinks />
    </div>
  )
}

export default Contact
