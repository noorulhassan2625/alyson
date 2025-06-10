import { useState, useRef } from 'react'
import { Col, Typography } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import DarkButton from './DarkButton'
import PlayButton from './SVGComponents/PlayButton'
import ContactUsModal from './ContactUsModal'
import { useLocation } from 'react-router-dom'

const { Title, Paragraph } = Typography

const Hero = ({ title1, title2 }) => {
  const [hasPlayed, setHasPlayed] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef(null)
  const location = useLocation()

  const path = location.pathname

  const handlePlayPause = () => {
    setIsPlaying(true)
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
        setHasPlayed(true)
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false) // State for modal visibility
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='hero'>
      <Title className='hero-heading' level={1}>
        {title1}
      </Title>
      <Paragraph className='text'>
        {/* “I’m designed to grow your home services business by 25% or more.” */}
        {title2}
      </Paragraph>
      <DarkButton buttonText='Get a Demo' onClick={handleOpenModal} />
      <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      {/* <Col xs={20} sm={10} md={14}>
        <iframe
          src='https://player.vimeo.com/video/962412209?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          frameBorder='0'
          allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
          style={{
            // position: 'absolute',
            // top: 0,
            // left: 0,
            width: '100%',
            height: '100%'
          }}
          title='Alyson AI'
        ></iframe>
      </Col> */}
      <div className='hero-video-box' onClick={handlePlayPause}>
        <Col xs={20} sm={10} md={14} className='video-container'>

          {path === '/agent' ? (
            <>
              <iframe
                src='https://player.vimeo.com/video/962412209?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                frameBorder='0'
                allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
                style={{
                  position: 'relative',
                  top: 0,
                  left: 0,
                  width: '100%',
                   height: '500px'
                }}
                title='Alyson AI'
              ></iframe>
            </>
          ) : (
            <>
              {!isVideoLoaded && (
                <img
                  src='/media/images/placeholder.png'
                  alt='Video placeholder'
                  className='video-placeholder'
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
                controls={isPlaying ? true : false}
              >
                <source
                  src='/media/video/alyson-hero-video.mp4'
                  type='video/mp4'
                />
                Your browser does not support the video tag.
              </video>

              {!isPlaying && isVideoLoaded && (
                <div className='play-overlay'>
                  <PlayButton className='play-icon' />
                </div>
              )}
            </>
          )}
        </Col>
      </div>
    </div>
  )
}

export default Hero
