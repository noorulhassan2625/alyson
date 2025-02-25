import { Typography } from "antd";
import DarkButton from "./DarkButton";

const { Title } = Typography;

const FinalCTA = () => {
  return (
    <div className="final-cta-container">
      <Title level={2} className="cta-heading">
        Be the first to experience our app upon launch.
      </Title>
      <DarkButton buttonText="Let’s Talk" />
      <div className="footer-links">
        <a
          href={`https://www.alyson.ai/about`}
          target="_blank"
          rel="noreferrer"
        >
          <span>About</span>
        </a>
        <a
          href={`https://www.alyson.ai/privacy`}
          target="_blank"
          rel="noreferrer"
        >
          <span>Privacy Policy</span>
        </a>
        <a
          href={`https://www.alyson.ai/terms`}
          target="_blank"
          rel="noreferrer"
        >
          <span>Terms of Use</span>
        </a>
        <a
          href={`https://www.alyson.ai/cookies`}
          target="_blank"
          rel="noreferrer"
        >
          <span>Cookie Policy</span>
        </a>
        <a
          href={`https://www.alyson.ai/contact`}
          target="_blank"
          rel="noreferrer"
        >
          <span>Contact</span>
        </a>
      </div>

      <p className="footer-text">2025 Alyson.ai</p>
    </div>
  );
};

export default FinalCTA;
