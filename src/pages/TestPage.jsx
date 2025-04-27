import React, { useState } from 'react';
import '../css/TestPage.css';
import { Select, Radio, Space, Button, DatePicker } from 'antd';
import dayjs from 'dayjs';
import { PoweroffOutlined } from '@ant-design/icons';

function TestPage() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const options = [
    { label: 'Channel - Email', value: 'channel-email' },
    { label: 'Channel - SMS', value: 'channel-sms' },
    { label: 'Channel - AI Calling', value: 'channel-ai-calling' },
    { label: 'Channel - Direct Mail', value: 'channel-direct-mail' },
    { label: 'Channel - Phone', value: 'channel-phone' },
    { label: 'Records with Alyson Content', value: 'records-alyson-content' },
  ];

  const handleClear = () => {
    setSelectedValue(null);
    setSearchValue('');
    setFromDate(null);
    setToDate(null);
  };

  const handleSubmit = () => {
    const from = fromDate ? dayjs(fromDate).format('YYYY-MM') : 'Not selected';
    const to = toDate ? dayjs(toDate).format('YYYY-MM') : 'Not selected';
    alert(`Selected Option: ${selectedValue || 'Not selected'}\nFrom: ${from}\nTo: ${to}`);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className='container test-page Secect-form-wrapper'>
      <Space direction="vertical">
      <Space>
          <DatePicker
            picker="month"
            value={fromDate}
            onChange={(date) => setFromDate(date)}
            placeholder="From (Month-Year)"
            format="YYYY-MM"
            style={{ width: 200 }}
          />
          <DatePicker
            picker="month"
            value={toDate}
            onChange={(date) => setToDate(date)}
            placeholder="To (Month-Year)"
            format="YYYY-MM"
            style={{ width: 200 }}
          />
        </Space>
        <Space>
          <Select
            value={selectedValue}
            onChange={(value) => {
              setSelectedValue(value);
              setSearchValue('');
            }}
             className='select-filter-wrapper'
            placeholder="Audience Filter"
            style={{ width: 200 , height:'25px'}}
            showSearch
            onSearch={(value) => setSearchValue(value)}
            dropdownRender={() => (
              <Space direction="vertical" style={{ padding: '8px' }}>
                <Radio.Group
                  value={selectedValue}
                  onChange={(e) => {
                    setSelectedValue(e.target.value);
                    setSearchValue('');
                  }}
                >
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map((option) => (
                      <Radio key={option.value} value={option.value}>
                        {option.label}
                      </Radio>
                    ))
                  ) : (
                    <div>No matching options</div>
                  )}
                </Radio.Group>
              </Space>
            )}
          />
          <div className='button-wrapper'>
           <Button type="primary" onClick={handleSubmit}>
            <PoweroffOutlined/>
          </Button>
          <Button className='clear-btn' onClick={handleClear}>
            Clear
          </Button>
          </div>
         
        </Space>

      </Space>
    </div>
  );
}

export default TestPage;