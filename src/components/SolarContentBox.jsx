import React from 'react';
import { Card, Typography, Col } from 'antd';
import DarkButton from './DarkButton';

const { Title, Text } = Typography;

const SolarContentBox = ({
  iconSrc,
  mainTitle,
  subTitle,
  contentText,
  buttonText,
  backgroundColor,
  cardStyle
}) => {
  return (
    <div
      style={{
        background: backgroundColor,
        padding: '70px 40px 20px 40px',
        display: 'flex',
        justifyContent: 'center'
      }}
      className='solar-content-box'
    >
      <Col span='22'>
        <Card style={cardStyle} bordered={false}>
          <div>
            <img src={iconSrc} alt='Icon' />
            <Title level={3}>{mainTitle}</Title>
          </div>

          <Title level={4}>{subTitle}</Title>

          <Text>{contentText}</Text>

          <br />
          <DarkButton buttonText={buttonText} />
        </Card>
      </Col>
    </div>
  );
};

export default SolarContentBox;