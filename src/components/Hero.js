import { Typography, Image } from 'antd';
import DarkButton from './DarkButton';

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <div className="hero">
      <Title className='hero-heading' level={1}>Hi, I’m Alyson</Title>
      <Paragraph className='text'>
        “I’m designed to grow your home services business by 25% or more.”
      </Paragraph>
      <DarkButton buttonText={'Let’s Talk'}/>
      <div className="hero-image">
        <Image src="/hero-image.png" alt="Alyson AI" width={400} height={300} />
      </div>
    </div>
  );
};

export default Hero;
