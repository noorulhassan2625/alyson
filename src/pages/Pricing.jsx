import CTASection from "../components/CTASection";
import LinksSection from "../components/LinksSection";
import FinalCTA from "../components/FinalCTA";
import "../css/pricing.css";
import { Col, Row, Typography, Grid } from "antd";
import PackagesCard from "../components/PackagesCard";
import PlanTableInfo from "../components/PlanTableInfo";
import PackagesCardMobile from "../components/PackagesCardMobile";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

export default function Pricing() {
  const screens = useBreakpoint();

  return (
    <div className="container">
      <div
        className="hero-bg"
        style={{
          background:
            "linear-gradient(rgba(255, 204, 77, 0) 38%, rgb(255 252 240 / 94%) 60%), url(/media/images/hero-section.svg)",
        }}
      >
        <div className="central-title">
          <Row gutter={[24]} align="middle">
            <Col sm={24} lg={16} style={{ margin: "0 auto" }}>
              <Title level={2}>Only pay for what you use</Title>
              <Text>Easy to predict pricing</Text>
            </Col>
          </Row>
        </div>

        <div className="packages-cards" style={{ padding: "0px 20px" }}>
          <Row gutter={[24]} align="middle">
            {/* Free Plan */}
            <Col className="package-card-box" sm={24} lg={12} style={{ margin: "0 auto" }}>
              {!screens.xs && (
                <PackagesCard
                  title="Free"
                  offer="(Limited-Time Offer)"
                  buttonText="Get started"
                  successFee="Success-based: 20%"
                  successText="of gross margin on incremental revenue"
                  usage="Full access during promotional period"
                  support={[
                    "- No connectors",
                    "- No engagement manager",
                    "- No weekly meetings",
                  ]}
                />
              )}

              {screens.xs && (
                <PackagesCardMobile
                  plan={{
                    name: "Free",
                    offer: "Limited-Time Offer",
                    buttonText: "Get started",
                    successFee: "Success-based: 20%",
                    successDescription: "of gross margin on incremental revenue",
                    usage: "Full access during promotional period",
                    support: ["No connectors", "No engagement manager", "No weekly meetings"],
                    features: [
                      { name: "AI-Driven Campaigns", available: true },
                      { name: "Ad & Landing Page Tools", available: true },
                      { name: "Website Creation", available: false },
                      { name: "Accelerated Payments", available: true },
                      { name: "AI Scheduling", available: true },
                      { name: "CRM Data Insights", available: true },
                      { name: "Identity Solution", available: false },
                      { name: "Revenue Agreement", available: true },
                      { name: "Limited-Time Offer", available: true },
                      { name: "Terms & Conditions Apply", available: true },
                    ],
                  }}
                />
              )}
            </Col>

            {/* Business Plan */}
            <Col className="package-card-box" sm={24} lg={12} style={{ margin: "0 auto" }}>
              {!screens.xs && (
                <PackagesCard
                  title="Business"
                  offer="Cost + 12% of gross margin on incremental revenue"
                  buttonText="Get started"
                  successFee="Cost + 12%"
                  successText="of gross margin on incremental revenue"
                  usage="Full access"
                  support={[
                    "- Includes connectors",
                    "- Dedicated engagement manager",
                    "- Weekly strategy meetings",
                  ]}
                />
              )}

              {screens.xs && (
                <PackagesCardMobile
                  plan={{
                    name: "Business",
                    offer: "Standard Plan",
                    buttonText: "Get started",
                    successFee: "Cost + 12%",
                    successDescription: "of gross margin on incremental revenue",
                    usage: "Full access",
                    support: [
                      "Includes connectors",
                      "Dedicated engagement manager",
                      "Weekly strategy meetings",
                    ],
                    features: [
                      { name: "AI-Driven Campaigns", available: true },
                      { name: "Ad & Landing Page Tools", available: true },
                      { name: "Website Creation", available: true },
                      { name: "Accelerated Payments", available: true },
                      { name: "AI Scheduling", available: true },
                      { name: "CRM Data Insights", available: true },
                      { name: "Identity Solution", available: true },
                      { name: "Revenue Agreement", available: true },
                      { name: "Limited-Time Offer", available: false },
                      { name: "Terms & Conditions Apply", available: true },
                    ],
                  }}
                />
              )}
            </Col>
          </Row>
        </div>

        <div className="plans-title">
          <Row gutter={[24]} align="middle">
            <Col sm={24} lg={16} style={{ margin: "0 auto" }}>
              <Title level={2}>Compare all features</Title>
            </Col>
          </Row>
        </div>
        <div className="plans-info">
          <PlanTableInfo />
        </div>
      </div>

      <CTASection
        ctaText1="“Stop wasting money on ad platforms that don’t deliver.”"
        ctaText2="Optimize your ad spend with Alyson Acquire now."
      />
      <LinksSection />
      <FinalCTA />
    </div>
  );
}
