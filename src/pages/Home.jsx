import Acquire from "../components/Aquire";
import AquireCards from "../components/AquireCards";
import CreateCards from "../components/CreateCards";
import CreateSection from "../components/CreateSection";
import FeatureCards from "../components/FeatureCards";
import Hero from "../components/Hero";
import StatusBox from "../components/StatusBox";
import AgentSection from "../components/AgentSection";
import AudiencesSection from "../components/AudiencesSection";
import ActivateSection from "../components/ActivateSection";
import IdentitySection from "../components/IdentitySection";
import CheckoutSection from "../components/CheckoutSection";
import CTASection from "../components/CTASection";
import LinksSection from "../components/LinksSection";
import FinalCTA from "../components/FinalCTA";
import "../css/home.css";
import ServicesList from "../components/ServicesList";
import CheckoutAccordions from "../components/CheckoutAccordions";
import IdentityAccordions from "../components/IdentityAccordions";

export default function Home() {
  return (
    <div className="container">
      <div
        className="hero-bg"
        style={{
          background:
            "linear-gradient(rgba(255, 204, 77, 0) 28%, rgb(255 252 240 / 94%) 40%), url(/media/images/hero-section.svg)",
        }}
      >
        <Hero />
        <FeatureCards />
        <div className="dotted-bg">
        <StatusBox />
        </div>
        <Acquire />
        <AquireCards />
      </div>
      <CreateSection />
      <CreateCards />
      {/* <CheckoutSection /> */}
      <CheckoutAccordions />
      <AgentSection />
      <AudiencesSection />
      <ActivateSection />
      {/* <IdentitySection /> */}
      <IdentityAccordions/>
      <CTASection
        ctaText1="Ready to transform your home services business?"
        ctaText2="Get started with Alyson today."
      />

      <ServicesList/>
  
      <FinalCTA />
    </div>
  );
}
