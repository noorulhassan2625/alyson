import React, { useState } from "react";
import { Row, Col, Typography, Button } from "antd";

const { Title } = Typography;

const LinksSection = () => {
  const [showAll, setShowAll] = useState(false);

  const industries = [
    ["HVAC", "Plumbing Software", "Electrician Software", "HVAC Software", "Plumbing Software", "Electrician Software", "Garage Door", "Chimney Sweep", "Home Warranty Services", "Services"],
    ["Mortgage Origination", "Credit Repair and Monitoring", "Internet, Cable & Broadband", "Moving and Relocation Services", "Utilities: Electricity Choice", "Other Home Services Products", "Water Treatment", "Landscape", "Pool Service", "Septic"],
    ["Pest Control", "Lawn Care", "Roofing", "Local Service Pros", "Escrow Service", "Property Insurance", "Solar Installation & Services", "Appliance Installation", "Flooring Installation", "Home Furnishings"],
    ["Smart Home Technology", "Proptech Products", "Bathroom Remodeling", "Roofing Services", "Kitchen Remodeling", "Window and Door Installation", "Appliance Repair", "Home Security System Installation", "System Installation", "Real Estate Listing Services"]
  ];

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="footer-container">
      <Row gutter={[40, 20]} justify="center">
        {/* Product Column */}
        <Col xs={24} sm={12} md={6} lg={6}>
          <Title level={5} className="footer-title">Product</Title>
          <ul className="footer-list">
            <li>Acquire</li>
            <li>Create</li>
            <li>Checkout</li>
            <li>Assistant</li>
            <li>Audiences</li>
            <li>Alyson Activate</li>
            <li>Identity</li>
          </ul>
        </Col>

        {/* Industries Column */}
        <Col className={showAll ? 'Show Less links-active' : ''} xs={24} sm={12} md={18} lg={18}>
          <Title level={5} className="footer-title">Industries</Title>
          <Row gutter={[20, 10]}>
            {industries.map((column, index) => (
              <Col xs={12} sm={6} md={6} lg={6} key={index}>
                <ul className="footer-list">
                  {column.slice(0, showAll ? column.length : 2).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
          <Button className={'expand-link-btn'} type="link" onClick={toggleShowAll}>
            {showAll ? 'less' : 'more'}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default LinksSection;