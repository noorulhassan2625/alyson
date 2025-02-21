import { Typography, Button } from "antd";
import DarkButton from "./DarkButton";

const { Title } = Typography;

const FinalCTA = () => {
  return (
    <div className="final-cta-container">
      <Title level={2} className="cta-heading">
        Be the first to experience our app upon launch.
      </Title>
      {/* <Button className="cta-button">Let's Talk</Button> */}
       <DarkButton buttonText="Let’s Talk" />
      <div className="footer-links">
        <span>About</span>
        <span>Privacy Policy</span>
        <span>Terms of Use</span>
        <span>Cookie Policy</span>
        <span>Contact</span>
      </div>

      <p className="footer-text">2024 Alyson.</p>
    </div>
  );
};

export default FinalCTA;
