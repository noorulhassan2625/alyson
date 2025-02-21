import React from 'react'
import GenerativeAISection from './GenerativeAISection'
import RevenueBox from './RevenueBox'
import CompaignGradingBox from './CompaignGrading'
import FeedBackBox from './FeedbackBox'
import DarkButton from './DarkButton'

function CreateCards () {
  return (
    <div className={'create-cards'}>
      <GenerativeAISection />
      <RevenueBox />
      <CompaignGradingBox />
      <FeedBackBox />
      {/* <Button type="primary" className="cta-btn">Try Alyson Create for Free</Button> */}
       <DarkButton buttonText="Try Alyson Create for Free" />
    </div>
  )
}

export default CreateCards
