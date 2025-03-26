import React, { useState } from "react";
import { Row, Col, Typography, Button } from "antd";
import { CheckCircleOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const ServicesList = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (index) => {
    setExpandedCategories(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const ServicesData = [
    {
      title: "Home Services & Trades",
      description:
        "AI-powered scheduling, customer management, and marketing tools for service professionals.",
      services: [
        "HVAC (Heating, Ventilation & Air Conditioning)",
        "Plumbing",
        "Electrical Services",
        "Bathroom & Kitchen Remodeling",
        "Garage Door Services",
        "Chimney Sweeps & Inspection",
        "Water Treatment & Filtration",
        "Septic Services",
        "Pest Control",
        "Lawn Care & Landscaping",
        'Pool Maintenance & Repair',
        'Roofing & Gutter Services',
        'Window & Door Installation',
        'Smart Home Technology & Security Systems',
        'Appliance Installation & Repair',
        'Flooring Installation & Refinishing',
        'Interior Design & Home Furnishings',
        'Residential Cleaning Services',
        'Energy Auditing & Efficiency Services',
        'Moving & Relocation Services',
      ],
      icon: "/media/images/servicebox-icon-1.svg",
    },
    {
      title: "Real Estate & Homeownership Services",
      description:
        "Boost lead generation, automate client communication, and simplify property management.",
      services: [
        "Property Management Services",
        "Real Estate Listing Services",
        "Home Warranty Services",
        "Mortgage Origination & Lending",
        "HELOC & 2nd Mortgages",
        "Title Insurance & Escrow Services",
        "Property & Homeowners Insurance",
        "Credit Repair & Monitoring",
      ],
      icon: "/media/images/servicebox-icon-2.svg",
    },
    {
      title: "Utility & Tech Services",
      description:
        "Optimize workflows, enhance customer engagement, and drive sustainable energy solutions.",
      services: [
        "Solar Installation & Renewable Energy Services",
        "Utilities & Electricity Choice Providers",
        "Internet, Cable & Broadband Services",
      ],
      icon: "/media/images/servicebox-icon-3.svg",
    },
    {
      title: "Emerging & Specialized Services",
      description:
        "Supporting cutting-edge businesses and local service professionals with AI-driven growth strategies.",
      services: [
        "PropTech (Property Technology) Products",
        "Local Service Professionals (Handyman, General Contractors, etc.)",
      ],
      icon: "/media/images/servicebox-icon-4.svg",
    },
  ];

  return (
    <div className="footer-container footer-services services-list-container">
      {/* Header Section */}
      <div className={"section-title-header"}>
        <Title level={2}>Helping Your Industry Grow with Smarter AI Solutions</Title>
      </div>
      <div className="identity-header">
        <Paragraph>
          Build tailored profiles and leverage Alyson's 172M identity graph
          members to ensure accurate data for personalized communications and
          targeted campaigns.
        </Paragraph>
      </div>
      <Row gutter={[32, 32]} justify="center">
        {ServicesData.map((category, index) => (
          <Col key={index} xs={24} sm={12} md={12} lg={6}>
            <div className="service-category">
              <div className="service-header">
                <img src={category.icon} alt={category.title} className="service-icon" />
                <Title className="service-title" level={4}>{category.title}</Title>
              </div>
              <Paragraph className="service-description">{category.description}</Paragraph>
              <ul className="service-list">
                {category.services.slice(0, expandedCategories[index] ? category.services.length : 5).map((service, idx) => (
                  <li key={idx}>
                    {service}
                  </li>
                ))}
              </ul>
              {category.services.length > 5 && (
                <Button 
                  type="link" 
                  onClick={() => toggleCategory(index)}
                  className="helping-list-button"
                >
                  {expandedCategories[index] ? 'Show Less' : 'View All'}
                </Button>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServicesList;