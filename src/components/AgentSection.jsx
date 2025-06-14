import { Row, Col, Typography, Divider } from "antd";
const { Title, Paragraph } = Typography;

const AgentSection = () => {
  const features = [
    {
      title: "AI-Powered Scheduling",
      description:
        "Let Alyson Agent handle calls, emails, and texts to help your home services business book more appointments.",
      icon: (
        <>
          {" "}
          <img
            src="/media/images/Assistant_icon_1.svg"
            alt={"iconImage"}
            width={"40px"}
          />
        </>
      ),
    },
    {
      title: "Data Science Models",
      description:
        "Alyson predicts user actions—opening emails, answering calls, converting—so you can run experiments and boost appointments with quality homeowners.",
      icon: (
        <>
          {" "}
          <img
            src="/media/images/Assistant_icon_2.svg"
            alt={"iconImage"}
            width={"40px"}
          />
        </>
      ),
    },
    {
      title: "1% of the Cost of a Human",
      description:
        "Alyson can make phone calls at as low as 1% of the cost of a human, allowing your sales team to focus on high-value activities instead of boring, repetitive tasks.",
      icon: (
        <>
          {" "}
          <img
            src="/media/images/Assistant_icon_3.svg"
            alt={"iconImage"}
            width={"40px"}
          />
        </>
      ),
    },
    {
      title: "Stop Losing Deals",
      description:
        "Stop losing deals to your competition because you’re just too busy to manage the follow-up.",
      icon: (
        <>
          {" "}
          <img
            src="/media/images/Assistant_icon_4.svg"
            alt={"iconImage"}
            width={"40px"}
          />
        </>
      ),
    },
  ];
  // const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className="agent-container">
      <div
        className="agent-content"
        style={{ background: "url(/media/images/Agent-bg.svg)" }}
      >
        <div className="section-divider">
          <Divider style={{ color: "#FFBB2A" }} />
        </div>
        {/* Header Section */}
        <div className="agent-header">
          <div className={"section-title-header"}>
            <img src="/media/images/Agent.svg" alt="Alyson Logo" width="13%" />
            <Title level={2}>Agent</Title>
          </div>
          <Paragraph>
            Alyson acts as an agent to help you get more appointments. She can
            make and receive calls, send emails and texts, and seamlessly manage
            your data to build audiences and convert old leads back into fresh
            ones.
          </Paragraph>
        </div>

        {/* Features Section */}
        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col key={index} xs={24} sm={12} md={6}>
              <div className="agent-feature">
                <div className="feature-icon">{feature.icon}</div>
                <Title level={5}>{feature.title}</Title>
                <Paragraph>{feature.description}</Paragraph>
              </div>
            </Col>
          ))}
        </Row>

        {/* CTA Button */}
        <div className="agent-btn-container"></div>
        {/* <DarkButton buttonText='Get a Demo' onClick={handleOpenModal} />
          <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
      </div>
    </div>
  );
};

export default AgentSection;
