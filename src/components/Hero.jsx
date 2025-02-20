import { Col, Typography } from 'antd';
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
      <div className="hero-video-box">
      <Col xs={24} sm={12} md={18}>
        <video autoPlay loop muted playsInline className={'hero-video'}>
          <source src="/media/video/alyson-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Col>
      </div>
    </div>
  );
};

export default Hero;
