import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
import ServicesCards from "../components/ServicesCards";

// Animation variants for fade-in and slide-up effect
const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Component wrapper to handle animation
const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Trigger once when 30% of component is visible
  const [hasAnimated, setHasAnimated] = useState(false);

  // Ensure animation only runs once
  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};

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
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        <AnimatedSection>
          <FeatureCards />
        </AnimatedSection>
        <div className="dotted-bg">
          <AnimatedSection>
            <StatusBox />
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <Acquire />
        </AnimatedSection>
          <AquireCards />
      </div>
      <AnimatedSection>
        <CreateSection />
      </AnimatedSection>
      <AnimatedSection>
        <CreateCards />
      </AnimatedSection>
      <AnimatedSection>
        <CheckoutAccordions />
      </AnimatedSection>
      <AnimatedSection>
        <AgentSection />
      </AnimatedSection>
      <AnimatedSection>
        <AudiencesSection />
      </AnimatedSection>
      <AnimatedSection>
        <ActivateSection />
      </AnimatedSection>
      <AnimatedSection>
        <IdentityAccordions />
      </AnimatedSection>
      <AnimatedSection>
        <CTASection
          ctaText1="Ready to transform your home services business?"
          ctaText2="Get started with Alyson today."
        />
      </AnimatedSection>
      <AnimatedSection>
        <ServicesCards />
      </AnimatedSection>
      <AnimatedSection>
        <FinalCTA />
      </AnimatedSection>
    </div>
  );
}