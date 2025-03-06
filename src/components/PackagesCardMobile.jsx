import React from "react";
import { Card, Button, Typography, List } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const PackagesCardMobile = ({ plan }) => {
  return (
    <Card
      style={{
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        margin: "0 auto",
      }}
      className="packages-card-mobile"
    >
      <Title level={3}>{plan.name}</Title>
      <Text type="secondary">
        <i>{plan.offer}</i>
      </Text>
      <br />
      <Button type="primary" style={{ margin: "10px 0" }}>
        {plan.buttonText}
      </Button>

      <Title level={5}>Success Fee</Title>
      <Text style={{ fontSize: "18px", fontWeight: "bold", color: "#1E5DCF" }}>
        {plan.successFee}
      </Text>
      <Text type="secondary">{plan.successDescription}</Text>

      <Title level={5} style={{ marginTop: "20px" }}>
        Usage
      </Title>
      <Text>
        <CheckOutlined /> {plan.usage}
      </Text>

      <Title level={5}>Support</Title>
      <List
        dataSource={plan.support}
        renderItem={(item) => <List.Item>- {item}</List.Item>}
      />

      <Title level={5}>Plan Includes</Title>
      <List
        dataSource={plan.features}
        renderItem={(item) => (
          <List.Item>
            {item.available ? <CheckOutlined /> : <CloseOutlined style={{ color: "red" }} />} {item.name}
          </List.Item>
        )}
      />
    </Card>
  );
};

export default PackagesCardMobile;
