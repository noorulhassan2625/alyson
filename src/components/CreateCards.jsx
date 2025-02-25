import React from 'react'
import GenerativeAISection from './GenerativeAISection'
import RevenueBox from './RevenueBox'
import CompaignGradingBox from './CompaignGrading'
import FeedBackBox from './FeedbackBox'
import DarkButton from './DarkButton'
import { Divider } from 'antd'

function CreateCards() {
  return (
    <div className={'create-cards'}>
      <GenerativeAISection />
      <RevenueBox />
      <CompaignGradingBox />
      <FeedBackBox />
      <DarkButton buttonText="Try Alyson Create for Free" />
      <div className='section-divider'>
        <Divider style={{ color: '#FFBB2A' }} />
      </div>
    </div>
  )
}

export default CreateCards
