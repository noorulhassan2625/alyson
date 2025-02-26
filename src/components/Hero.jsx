import { useState, useRef } from 'react';
import { Col, Typography } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import DarkButton from './DarkButton';

const { Title, Paragraph } = Typography;

const Hero = () => {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setHasPlayed(true);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="hero">
      <Title className="hero-heading" level={1}>
        Hi, I’m Alyson
      </Title>
      <Paragraph className="text">
        “I’m designed to grow your home services business by 25% or more.”
      </Paragraph>
      <DarkButton buttonText={'Let’s Talk'} />

      <div className="hero-video-box" onClick={handlePlayPause}>
        <Col xs={20} sm={10} md={14} className="video-container">
          {!isVideoLoaded && (
            <img
              src="/media/images/placeholder.png"
              alt="Video placeholder"
              className="video-placeholder"
            />
          )}

          <video
            ref={videoRef}
            playsInline
            className={`hero-video ${isVideoLoaded ? 'visible' : 'hidden'}`}
            onLoadedData={() => setIsVideoLoaded(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={handleVideoEnd}
          >
            <source src="/media/video/alyson-hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {(!isPlaying && isVideoLoaded) && (
            <div className="play-overlay">
              <PlayCircleOutlined className="play-icon" />
            </div>
          )}
        </Col>
      </div>
    </div>
  );
};

export default Hero;
