import React from "react";
import { Card, Button } from "antd";

const PackagesCard = ({ title, offer, buttonText, successFee, successText, usage, support }) => {
  return (
    <Card
      style={{
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
      className="packages-card"
    >
      <h2 style={{ fontWeight: "bold" }}>{title}</h2>
      <p style={{ fontSize: "16px", color: "gray" }}>
        {offer}
      </p>
      <Button type="primary" style={{ margin: "10px 0" }}>
        {buttonText}
      </Button>
      <h4 style={{ marginTop: "20px" }}>Success Fee</h4>
      <p className="fee-text" style={{ fontSize: "30px", fontWeight: "bold", color: "#347ABC" }}>
        {successFee}
      </p>
      <p className="fee-subtext" style={{ fontSize: "16px", color: "gray", marginTop: "-10px" }}>
        {successText}
      </p>
      <h4 style={{ marginTop: "20px" }}>Usage</h4>
      <p>✔ {usage}</p>
      <h4>Support</h4>
      <ul style={{ paddingLeft: "20px", color: "gray" }}>
        {support.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  );
};

export default PackagesCard;
