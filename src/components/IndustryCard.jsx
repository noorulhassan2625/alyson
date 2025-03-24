import React from "react";
import { Card, Typography } from "antd";
import { FileTextOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text, Link } = Typography;

const IndustryCard = ({ title, description, services, link, image, linkText }) => {
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
        {services?.map((service, index) => (
          <li key={index}>
            <Text>{service}</Text>
          </li>
        ))}
      </ul>
      <Link href={link} className="industry-card__link">
      {linkText || 'View All'}
            </Link>
    </Card>
  );
};

export default IndustryCard;
