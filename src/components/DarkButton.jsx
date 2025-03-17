import { Button } from 'antd';
import React from 'react';

function DarkButton({ buttonText, onClick }) {
  return (
    <div>
      <Button onClick={onClick} className='dark-btn'>
        {buttonText}
      </Button>
    </div>
  );
}

export default DarkButton;