import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Typography, List } from 'antd'
import LegelHero from '../components/LegelHero'
import '../css/legalPagesStyle.css'
import LegalLinks from '../components/LegalLinks'
import LegalContentTitle from '../components/LegalContentTitle'

const { Paragraph } = Typography

function Cookies () {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes('/cookies')) {
      document.body.style.backgroundColor = '#FAFAFA'
    } else {
      document.body.style.backgroundColor = ''
    }
  }, [location.pathname])

  return (
    <div className='legal-page '>
      <LegelHero title={'Cookie Use Policy'} />
      <div className='legal-content'>
        {/* <LegalContentTitle title={'Last Modified: May 1, 2022.'} /> */}
        <div className='privacy-policy-content'>
          <Paragraph>
            When you visit our website, we or our third-party partners may store
            or retrieve information on your browser, mainly through cookies. We
            use this information to make the site function as you expect, to
            track analytics and provide a more personalized web experience, to
            personalize ads and measure the success of our marketing campaigns
            and similar activities as described in our Privacy Notice.
          </Paragraph>
          <Paragraph>
            You can choose not to allow certain types of cookies. Click on the
            tab for each category of cookies to learn more and adjust your
            preferences. You cannot opt-out of certain types of cookies that are
            needed in order to ensure the proper functioning of our website.
          </Paragraph>
          <Paragraph>
            Do Not Sell or Share My Personal Information. Under certain privacy
            laws, you have the right to direct a business not to "sell" or
            “share” your personal information, including for targeted
            advertising purposes. Please visit the “Advertising Cookies” tab on
            the left to opt-out of our third-party partners collecting your
            information through cookies for targeted advertising purposes.
          </Paragraph>
          <Paragraph>
            To learn more about our privacy practices, please visit our Privacy
            Policy.
          </Paragraph>
          <LegalContentTitle title={'Strictly Necessary Cookies'} />
          <Paragraph>
            These cookies are necessary for the website to function and cannot
            be switched off in our systems. They are usually only set in
            response to actions made by you which amount to a request for
            services, such as setting your privacy preferences, logging in or
            filling in forms. You can set your browser to block or alert you
            about these cookies, but some parts of the site will not then work.
            These cookies do not store any personally identifiable information.
          </Paragraph>
          <LegalContentTitle title={'Functional Cookies'} />
          <Paragraph>
            These cookies enable the website to provide enhanced functionality
            and personalization. They may be set by us or by third party
            providers whose services we have added to our pages. If you do not
            allow these cookies then some or all of these services may not
            function properly.
          </Paragraph>
          <LegalContentTitle title={'Advertising Cookies'} />
          <Paragraph>
            These cookies may be set through our site by our advertising
            partners. They may be used by those companies to build a profile of
            your interests and show you relevant ads on other sites. They do not
            store directly personal information, but are based on uniquely
            identifying your browser and internet device. If you do not allow
            these cookies, you will receive the same number of ads, but they may
            be less relevant to you.
          </Paragraph>
         
        </div>
      </div>
      <LegalLinks />
    </div>
  )
}

export default Cookies
