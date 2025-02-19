import ActivateSection from "../components/ActivateSection";
import AgentSection from "../components/AgentSection";
import Acquire from "../components/Aquire";
import AquireCards from "../components/AquireCards";
import AudiencesSection from "../components/AudiencesSection ";
import CheckoutSection from "../components/CheckoutSection";
import CreateCards from "../components/CreateCards";
import CreateSection from "../components/CreateSection";
import CTASection from "../components/CTASection";
import FeatureCards from "../components/FeatureCards";
import FinalCTA from "../components/FinalCTA";
import Hero from "../components/Hero";
import IdentitySection from "../components/IdentitySection";
import LinksSection from "../components/LinksSection";
import StatusBox from "../components/StatusBox";
import "../css/home.css";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <FeatureCards/>
      <StatusBox/>
      <Acquire/>
      <AquireCards/>
      <CreateSection/>
      <CreateCards/>
      <CheckoutSection/>
      <AgentSection/>
      <AudiencesSection/>
      <ActivateSection/>
      <IdentitySection />
      <CTASection/>
      <LinksSection/>
      <FinalCTA/>
    </div>
  );
}
