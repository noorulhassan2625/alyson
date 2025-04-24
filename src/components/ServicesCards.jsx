import { Col, Row, Typography } from 'antd';
import React from 'react';
import { motion, useInView } from 'framer-motion'; // Import framer-motion and useInView
import { useRef } from 'react'; // Import useRef for the ref

const { Title, Paragraph } = Typography;

function ServicesCards() {
  const ref = useRef(null); // Create a ref for the motion.div
  const isInView = useInView(ref, {
    once: true, // Animation triggers only once
    amount: 0.3 // Trigger when 30% of the component is visible
  });

  // Define the animation variants
  const rowVariants = {
    hidden: { opacity: 0, y: 100 }, // Start off-screen from the bottom
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } // Fade in and slide to position
  };

  return (
    <div className='services-cards'>
      <div className={'section-title-header'}>
        <Title level={2}>
          Helping Your Industry Grow with Smarter AI Solutions
        </Title>
      </div>
      <div className='identity-header'>
        <Paragraph>
          Build tailored profiles and leverage Alyson's 172M identity graph
          members to ensure accurate data for personalized <br /> communications and
          targeted campaigns.
        </Paragraph>
      </div>
      <div className='services-cards-container'>
        <motion.div
          ref={ref} // Attach the ref to observe visibility
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} // Animate only when in view
          variants={rowVariants}
        >
          <Row>
            <Col lg={6} xl={6} md={6} sm={24} xs={24}>
              <div className='services-card'>
                <img
                  src='/media/images/servicebox-icon-1.svg'
                  alt='Service Icon 1'
                />
                <h3>Home Services & Trades</h3>
              </div>
            </Col>
            <Col lg={6} xl={6} md={6} sm={24} xs={24} className='identity-header'>
              <div className='services-card'>
                <img
                  src='/media/images/servicebox-icon-2.svg'
                  alt='Service Icon 2'
                />
                <h3>Real Estate & Homeownership Services</h3>
              </div>
            </Col>
            <Col lg={6} xl={6} md={6} sm={24} xs={24} className='identity-header'>
              <div className='services-card'>
                <img
                  src='/media/images/servicebox-icon-3.svg'
                  alt='Service Icon 3'
                />
                <h3>Utility & Tech Services</h3>
              </div>
            </Col>
            <Col lg={6} xl={6} md={6} sm={24} xs={24} className='identity-header'>
              <div className='services-card'>
                <img
                  src='/media/images/servicebox-icon-4.svg'
                  alt='Service Icon 4'
                />
                <h3>Emerging & Specialized Services</h3>
              </div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </div>
  );
}

export default ServicesCards;