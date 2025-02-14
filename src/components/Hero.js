import { Button } from "antd";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Hi, I’m Alyson</h1>
      <p>“I’m designed to grow your home services business by 25% or more.”</p>
      <Button type="primary" className="cta-btn">Let’s Talk</Button>
      <div className="hero-image">
        <img src="/hero-image.png" alt="Alyson AI" width={400} height={300} />
      </div>
    </div>
  );
};

export default Hero;
