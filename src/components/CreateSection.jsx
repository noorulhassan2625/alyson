import { Typography } from "antd";
import { EditOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const CreateSection = () => {
  return (
    <div className="create-section">
      <div className="create-content">
        <div className="create-icon">
          <EditOutlined />
        </div>
        <Title level={3}>Create</Title>
        <Paragraph>
          Alyson generative AI creates ads, landing pages, and websites proven
          to generate more revenue, then matches each user with the best page
          for them to create revenue.
        </Paragraph>
      </div>
    </div>
  );
};

export default CreateSection;
