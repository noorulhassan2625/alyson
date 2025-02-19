import { Card } from "antd";

const InfoCard = ({ icon, title, description }) => {
  return (
    <Card className="info-card">
      <div className="info-icon">{icon}</div>
    </Card>
  );
};

export default InfoCard;
