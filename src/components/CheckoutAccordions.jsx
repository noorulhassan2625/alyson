import React, { useState } from 'react';
import { Row, Col, Typography, Collapse, Image } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

function CheckoutAccordions() {
  const [activeKey, setActiveKey] = useState(['1']); // Use array for activeKey

  const accordionData = [
    {
      key: '1',
      title: 'Accelerated Checkout Experience',
      content: 'Streamline the buying process with a fast, one- click lead generation process.',
      image: '/media/images/accordion-side-img-1.svg'
    },
    {
      key: '2',
      title: 'Privacy Shield Boosts Conversion',
      content: 'Streamline the buying process with a fast, one- click lead generation process.',
      image: '/media/images/accordion-side-img-2.svg'
    },
    {
      key: '3',
      title: 'Automated Form Creation',
      content: 'Streamline the buying process with a fast, one- click lead generation process.',
      image: '/media/images/accordion-side-img-3.svg'
    },
    {
      key: '4',
      title: 'Gain Valuable Insights',
      content: 'Alyson knows your ideal customer and often who is on your website and can tell you how well you are doing converting your best prospects.',
      image: '/media/images/accordion-side-img-4.svg'
    }
  ];

  const handleChange = (keys) => {
    setActiveKey(keys);
  };

  // Get the currently active item (last item in array for accordion mode)
  const activeItem = accordionData.find(item => item.key === activeKey[activeKey.length - 1]) || accordionData[0];

  return (
    <div style={{ background: '#FFFAF0', padding: '24px' }}>
      <div className='checkout-header'>
        <div className={'section-title-header'}>
          <img src='/media/images/checkout.svg' alt='Alyson Logo' width='13%' />
          <Title level={2}>Checkout</Title>
        </div>
        <Paragraph>
          Alyson has over 170 million consumer profiles—so when she recognizes
          someone, they can skip the signup process, boosting your conversion
          rate by as much as 50%.
        </Paragraph>
      </div>
      
      <div className='accordion-container' style={{ marginTop: '32px' }}>
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={10}>
            <Collapse
              accordion
              activeKey={activeKey}
              onChange={handleChange}
              className="checkout-accordion-container"
              bordered={false}
              textAlign="left"
              expandIconPosition='right'
              expandIcon={({ isActive }) => (
               <Image
                 src='/media/images/accordion-arrow.svg'
                 alt='arrow'
                 preview={false}
                 style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)', marginTop: '20px' }}
                 />
              )}
            >
              {accordionData.map(item => (
                <Panel 
                  header={
                    <span style={{ fontWeight: 600, fontSize: '24px' }}>
                      {item.title}
                    </span>
                  } 
                  key={item.key} 
                >
                  <Paragraph style={{ marginBottom: 0, fontSize:'16px' }}>{item.content}</Paragraph>
                </Panel>
              ))}
            </Collapse>
          </Col>

          <Col xs={24} md={14}>
            <div>
              {activeItem?.image ? (
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  style={{ 
                    maxWidth: '100%', 
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/media/images/default-accordion-image.svg';
                  }}
                />
              ) : (
                <div>Image not available</div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CheckoutAccordions;