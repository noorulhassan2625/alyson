import React from 'react';
import { Card } from "antd";
import { RocketOutlined, TeamOutlined, AimOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const features = [
  {
    icon: <RocketOutlined style={{ fontSize: 24, color: "#ff9800" }} />,
    title: "Real-Time Ad Optimization",
    description: "Adjust bids & placements based on AI-driven insights.",
  },
  {
    icon: <TeamOutlined style={{ fontSize: 24, color: "#2196F3" }} />,
    title: "Data-Driven Audience Building",
    description: "Build hyper-targeted audiences with rich customer insights.",
  },
  {
    icon: <AimOutlined style={{ fontSize: 24, color: "#673ab7" }} />,
    title: "Smart Customer Acquisition",
    description: "Target the right leads with AI-driven precision.",
  },
  {
    icon: <RocketOutlined style={{ fontSize: 24, color: "#f44336" }} />,
    title: "Automated Bidding",
    description: "Optimize bids in real-time using AI algorithms.",
  },
  {
    icon: <TeamOutlined style={{ fontSize: 24, color: "#4caf50" }} />,
    title: "Predictive Analytics",
    description: "Use historical data to predict campaign success.",
  },
];

const FeatureCards = () => {
  return (
    <div className="feature-section">
      <Swiper
        effect="coverflow"
        centeredSlides
        slidesPerView={3}
        spaceBetween={80}
        loop={true} // Enable infinite loop
        autoplay={{
          delay: 2000, // Auto-slide every 2 seconds
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
        coverflowEffect={{
          rotate: 0, // Rotate cards for a 3D effect
          stretch: 0,
          depth: 100, // Depth of the 3D effect
          modifier: 1.5,
          slideShadows: true, // Add shadows for a more realistic effect
        }}
        modules={[EffectCoverflow, Autoplay]} // Add Autoplay module
        className="feature-slider"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index} className="feature-card">
            <Card className="card-content">
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureCards;