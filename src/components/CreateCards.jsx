import React from 'react'
import GenerativeAISection from './GenerativeAISection'
import RevenueBox from './RevenueBox'
import CompaignGradingBox from './CompaignGrading'
import FeedBackBox from './FeedbackBox'
import { Button } from 'antd'

function CreateCards () {
  return (
    <div className={'create-cards'}>
      <GenerativeAISection />
      <RevenueBox />
      <CompaignGradingBox />
      <FeedBackBox />
      <Button type="primary" className="cta-btn">Try Alyson Create for Free</Button>
    </div>
  )
}

export default CreateCards
