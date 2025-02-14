import Acquire from "../components/Aquire";
import AquireCards from "../components/AquireCards";
import FeatureCards from "../components/FeatureCards";
import Hero from "../components/Hero";
import StatusBox from "../components/StatusBox";


export default function Home() {
  return (
    <div className="container">
      <Hero />
      <FeatureCards/>
      <StatusBox/>
      <Acquire/>
      <AquireCards/>
    </div>
  );
}
