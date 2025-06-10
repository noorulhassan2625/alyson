import { Typography, Col, Row, Divider } from "antd";
import DarkButton from "./DarkButton";
import ContactUsModal from "./ContactUsModal";
import { useState } from "react";

const { Title } = Typography;

const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="final-cta-container">
      {/* <div className='section-divider'>
          <Divider style={{ color: '#FFBB2A' }} />
        </div> */}

      <DarkButton buttonText="Get a Demo" onClick={handleOpenModal} />
      <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className="footer-links">
        <a href={`/about`} target="_blank" rel="noreferrer">
          <span>About</span>
        </a>
        <a href={`/privacy-policy`} target="_blank" rel="noreferrer">
          <span>Privacy Policy</span>
        </a>
        <a href={`/terms-of-use`} target="_blank" rel="noreferrer">
          <span>Terms of Use</span>
        </a>
        <a href={`/cookies`} target="_blank" rel="noreferrer">
          <span>Cookie Policy</span>
        </a>
        <a href={`/contact`} target="_blank" rel="noreferrer">
          <span>Contact</span>
        </a>
      </div>

      <Row
        gutter={[40]}
        className="contact-info-box"
        justify="center"
        style={{
          padding: "30px 30px 30px 30px",
          margin: "0px",
        }}
      >
        {/* Company Column */}
        <Col xs={24} sm={12} md={6} lg={6} style={{ justifyContent: "right" }}>
          <div
            className="contact-box-1"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <div>
              <img src="/media/images/support alyson email.svg" alt="" />
            </div>
            <Title level={5} className="cotact-info">
              support@alyson.ai
            </Title>
          </div>
        </Col>

        {/* Contact Column */}
        <Col xs={24} sm={12} md={18} lg={6}>
          <div className="contact-box-2" style={{ display: "flex" }}>
            <div>
              <img src="/media/images/helpline call.svg" alt="" />
            </div>
            <Title level={5} className="cotact-info">
              +1 307-381-1637
            </Title>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FinalCTA;
