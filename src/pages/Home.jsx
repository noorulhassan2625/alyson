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

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <FeatureCards />
      <StatusBox />
      <Acquire />
      <AquireCards />
      <CreateSection />
      <CreateCards />
      <CheckoutSection />
      <AgentSection />
      <AudiencesSection />
      <ActivateSection />
      <IdentitySection />
      <CTASection />
      {/* <LinksSection /> */}
      <FinalCTA />
    </div>
  );
}
