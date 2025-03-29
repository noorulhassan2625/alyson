import React, { useState } from "react";
import { Card, Typography } from "antd";
import { FileTextOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text, Link } = Typography;

const IndustryCard = ({ title, description, services, link, image, linkText }) => {
  const [showAllServices, setShowAllServices] = useState(false);
  
  // Determine which services to display
  const displayedServices = showAllServices ? services : services?.slice(0, 3);

  return (
    <Card className="industry-card">
      <div className="industry-card__icon">
        {image ? (
          <img src={image} alt={title} className="industry-card__image" />
        ) : (
          <FileTextOutlined className="industry-card__fallback-icon" />
        )}
      </div>
      <Title level={4} className="industry-card__title">
        {title}
      </Title>
      <Paragraph className="industry-card__description">{description}</Paragraph>
      <ul className="industry-card__list">
        {displayedServices?.map((service, index) => (
          <li key={index}>
            <Text>{service}</Text>
          </li>
        ))}
      </ul>
      {services?.length > 3 && (
        <Link 
          href="#" 
          className="industry-card__link"
          onClick={(e) => {
            e.preventDefault();
            setShowAllServices(!showAllServices);
          }}
        >
          {showAllServices ? 'Show Less' : (linkText || 'View All')}
        </Link>
      )}
    </Card>
  );
};

export default IndustryCard;