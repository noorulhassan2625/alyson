import React from 'react'
import { Form, Input, Select, Checkbox, Button, Typography } from 'antd'
import DarkButton from './DarkButton'

const { Title, Text } = Typography
const { Option } = Select

const ContactUsForm = () => {
  return (
    <div className='contact-us-container'>
      {/* Left Form Section */}
      <div className='contact-form'>
        <Title level={3} className='contact-title'>
          Let's Connect
        </Title>
        <Text className='contact-description'>
          Fill out the form below, and our team will reach out to discuss how
          Alyson.ai can help your business thrive.
        </Text>

        <Form layout='vertical' className='form'>
          <Form.Item label='Full Name' name='name' rules={[{ required: true }]}>
            <Input placeholder='Full Name' />
          </Form.Item>

          <Form.Item
            label='Email Address'
            name='email'
            rules={[{ required: true, type: 'email' }]}
          >
            <Input placeholder='Email Address' />
          </Form.Item>

          <Form.Item label='Phone Number' name='phone'>
            <Input placeholder='Phone Number' />
          </Form.Item>

          <Form.Item label='Industry Selection' name='industry'>
            <Select placeholder='Industry Selection'>
              <Option value='tech'>Technology</Option>
              <Option value='finance'>Finance</Option>
              <Option value='healthcare'>Healthcare</Option>
            </Select>
          </Form.Item>

          <Form.Item label='Company Name' name='company'>
            <Input placeholder='Company Name' />
          </Form.Item>

          <Form.Item label='Message/Request' name='message'>
            <Input.TextArea rows={3} placeholder='Message/Request' />
          </Form.Item>

          <Form.Item name='updates' valuePropName='checked'>
            <Checkbox className='checkbox-notify'>
              I’d like to receive updates and insights from Alyson.ai
            </Checkbox>
          </Form.Item>
          <div className='contact-form-submission-btn'>
            <DarkButton buttonText='Get in Touch' />
          </div>
        </Form>
      </div>

      {/* Right Info Section */}
      <div className='contact-info'>
        <div className='contact-info-content'>
          <Title level={4}>What to Expect</Title>
          <ul className='contact-list'>
            <li>Our team will reach out within 24 hours.</li>
            <li>
              We’ll discuss your business needs and how Alyson.ai can help.
            </li>
            <li>No pressure—just a conversation about growth.</li>
          </ul>
          <Text className='contact-link'>Why Alyson.ai?</Text>
        </div>

        {/* Illustration */}
        <div className='contact-illustration'>
          <img
            src='/media/images/Alyson.svg'
            width={'100%'}
            alt='Contact Us Illustration'
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUsForm
