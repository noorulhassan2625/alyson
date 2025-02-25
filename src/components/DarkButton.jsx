import { Button } from 'antd'
import React from 'react'

function DarkButton({ buttonText }) {
  return (
    <div>
      <Button className="dark-btn">{buttonText}</Button>
    </div>
  )
}

export default DarkButton
