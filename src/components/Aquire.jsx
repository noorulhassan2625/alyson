import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Acquire = () => {
  return (
    <div className="acquire-section">
      <div className={'section-title-header'}>
        <img src="/media/images/Acquire icon.svg" alt="Alyson Logo" width="10%" />
        <Title level={2}>Acquire</Title>
      </div>
      <Paragraph>
        Let Alyson’s AI help you acquire customers from any media channel including
        Google, Facebook, Meta, Affiliate Marketing, and Direct Mail. Alyson will get more
        leads, guaranteed.
      </Paragraph>
    </div>
  );
};

export default Acquire;
