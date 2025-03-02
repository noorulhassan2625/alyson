import React from 'react';
import { Form, Select } from 'antd';

const SelectField = ({ label, options, placeholder }) => {
  return (
    <Form.Item
      name="interest"
      label={label}
      rules={[{ required: true, message: 'Please select an option!' }]}
      className='select-field'
    >
      <Select placeholder={placeholder}>
        {options.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default SelectField;
