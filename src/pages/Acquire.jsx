import Acquire from '../components/Aquire'
import AquireCards from '../components/AquireCards'
import CreateCards from '../components/CreateCards'
import CreateSection from '../components/CreateSection'
import FeatureCards from '../components/FeatureCards'
import Hero from '../components/Hero'
import StatusBox from '../components/StatusBox'
import AgentSection from '../components/AgentSection'
import AudiencesSection from '../components/AudiencesSection'
import ActivateSection from '../components/ActivateSection'
import IdentitySection from '../components/IdentitySection'
import CheckoutSection from '../components/CheckoutSection'
import CTASection from '../components/CTASection'
import LinksSection from '../components/LinksSection'
import FinalCTA from '../components/FinalCTA'
import FeaturePageHero from '../components/FeaturePageHero'
import '../css/featurePages.css'
export default function AcquirePage () {
  return (
    <div className='container'>
      <div
        className='hero-bg'
        style={{
          background:
            'linear-gradient(rgba(255, 204, 77, 0) 38%, rgb(255 252 240 / 94%) 60%), url(/media/images/hero-section.svg)'
        }}
      >
        <FeaturePageHero/>
        <FeaturePageHero/>
        <FeaturePageHero/>
            {/* <Hero />
        <FeatureCards />
        <StatusBox />
        <Acquire />
        <AquireCards /> */}
      </div>
      {/* <CreateSection />
      <CreateCards />
      <CheckoutSection />
      <AgentSection />
      <AudiencesSection />
      <ActivateSection />
      <IdentitySection /> */}
      <CTASection />
      {/* <LinksSection /> */}
      <FinalCTA />
    </div>
  )
}
