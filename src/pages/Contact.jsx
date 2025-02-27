import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Form, Input, Button, Select, Col } from 'antd'
import LegelHero from '../components/LegelHero'
import LegalLinks from '../components/LegalLinks'
import '../css/legalPagesStyle.css'

const { TextArea } = Input

function Contact () {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes('/contact')) {
      document.body.style.backgroundColor = '#FAFAFA'
    } else {
      document.body.style.backgroundColor = ''
    }
  }, [location.pathname])

  const onFinish = values => {
    console.log('Form Data:', values)
  }

  return (
    <div className='legal-page'>
      <LegelHero title={'Contact Us'} />
      <div className='legal-content'>
        <div className='contact-form-container'>
          <Col className='contact-form-box' span={12}>
            <Form
              layout='vertical'
              onFinish={onFinish}
              className='contact-form'
            >
              <Form.Item
                name='interest'
                label='What best describes your interest in Alyson.ai?'
                rules={[
                  { required: true, message: 'Please select an option!' }
                ]}
              >
                <Select placeholder='Click here to make a selection'>
                  <Select.Option value='business'>
                    Business Inquiry
                  </Select.Option>
                  <Select.Option value='support'>
                    Customer Support
                  </Select.Option>
                  <Select.Option value='feedback'>Feedback</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name='name'
                label='Name'
                rules={[{ required: true, message: 'Please enter your name!' }]}
              >
                <Input placeholder='Enter your name' />
              </Form.Item>

              <Form.Item
                name='email'
                label='Email'
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  { type: 'email', message: 'Please enter a valid email!' }
                ]}
              >
                <Input placeholder='Enter your email' />
              </Form.Item>

              <Form.Item
                name='message'
                label='Message'
                rules={[
                  { required: true, message: 'Please enter your message!' }
                ]}
              >
                <TextArea rows={4} placeholder='Enter your message here' />
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='submit-button'
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </div>
      </div>
      <LegalLinks />
    </div>
  )
}

export default Contact
