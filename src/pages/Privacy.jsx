import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Typography, List } from 'antd'
import LegelHero from '../components/LegelHero'
import '../css/legalPagesStyle.css'
import LegalLinks from '../components/LegalLinks'
import LegalContentTitle from '../components/LegalContentTitle'

const { Paragraph } = Typography

function Privacy () {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes('/privacy-policy')) {
      document.body.style.backgroundColor = '#FAFAFA'
    } else {
      document.body.style.backgroundColor = ''
    }
  }, [location.pathname])

  return (
    <div className='legal-page '>
      <LegelHero title={'Privacy Policy'} />
      <div className='legal-content'>
        <LegalContentTitle title={'Last Modified: May 1, 2022.'} />
        <div className='privacy-policy-content'>
          <Paragraph>
            Alyson.ai (“Alyson,” “we,” “us,” or “our”), including our
            affiliates, respect your privacy and understand that you care about
            your personal information and how it is used. We value your trust in
            sharing your personal information with us and are dedicated to
            protecting your privacy. This Privacy Notice describes in detail the
            types of information we collect about you; how we use your
            information and with whom we share it; the choices and rights you
            have with regard to your information; how we protect your
            information; and how you can contact us about our privacy practices.
          </Paragraph>
          <LegalContentTitle title={'SCOPE'} />
          <Paragraph>
            This Privacy Notice applies to the use of the Services (as defined
            below), including by both consumers and Professionals.
            “Professional(s)” means individuals, companies and other
            organizations or persons acting as real estate professionals or
            otherwise engaged in a business related to Alyson.ai’s Services,
            including, without limitation, REALTORS®, agents, providers of
            moving-related services, products or information, homebuilders,
            lenders, brokers, real estate professionals, re-modelers,
            seniors-related housing, product or service providers, home service
            professionals and other service professionals. Except as otherwise
            indicated, Professionals, consumers and other persons using the
            Services are individually and collectively referred to as “you.”
            This Privacy Notice applies to personal information collected by
            Alyson.ai, a subsidiary of Alyson.ai, through the Alyson.ai family
            of websites, and mobile apps, mobile-optimized websites and other
            applications and/or electronic media (such as emails Alyson.ai
            sends) (collectively, the “Services”). This includes, but is not
            limited to https://www.alyson.ai.
          </Paragraph>
          <LegalContentTitle title={'INFORMATION WE COLLECT AND OBTAIN'} />
          <Paragraph>
            We obtain personal information about you from a variety of sources.
            This includes personal information you provide to us directly,
            information we obtain from other sources, and information we gather
            through automated means. Information you provide to us. When you
            register for or participate in certain services, seek access to
            certain content or features, or directly correspond with us, we may
            collect certain types of information from you:
          </Paragraph>
          <List
            className='content-list'
            dataSource={[
              {
                desc: 'Contact information (such as name, postal address, email address and telephone and/or mobile numbers);'
              },
              {
                desc: 'Username and password when you register through our Services;'
              },
              {
                desc: 'Data gathered through cookies, tracking tools, and usage analytics.'
              },
              {
                desc: 'Your social security number or payment information, when needed to facilitate certain transactions;'
              },
              {
                desc: 'Reviews, comments, and/or surveys; and'
              },
              {
                desc: 'Other information you may provide to us, such as through our “Submit a Request” or “Contact Us” feature.'
              }
            ]}
            renderItem={item => (
              <List.Item className='list-item'>
                <Typography.Text strong>{item.title}</Typography.Text>{' '}
                {item.desc}
              </List.Item>
            )}
          />
          <Paragraph>
            If you are a Professional, we may also ask for additional
            information, such as relevant professional licensing numbers, an MLS
            ID#, or NAR Member ID. Information obtained from other sources. We
            may obtain personal information about you in connection with the
            Services from publicly and commercially available sources and from
            our Alyson.ai affiliates and/or business partners (such as
            advertising networks or social networking services), including:
          </Paragraph>
          <List
            className='content-list'
            dataSource={[
              {
                desc: 'Demographic data (such as gender, age range, educational level, household income range, number of children in household, ethnicity to the extent permitted);'
              },
              {
                desc: 'Purchasing data, including information about advertisements you have seen or acted upon and information about your interaction with advertisers’ products and services;'
              },
              {
                desc: 'Occupational data (such as profession, position, title, industry; and business address);'
              },
              {
                desc: 'If you log in with a third-party account with the Services (e.g., Google), we may obtain information about you, such as your user ID and/or user name and other information you have permitted those services to share with us consistent with your privacy settings for that third-party account.'
              }
            ]}
            renderItem={item => (
              <List.Item className='list-item'>
                <Typography.Text strong>{item.title}</Typography.Text>{' '}
                {item.desc}
              </List.Item>
            )}
          />
          <Paragraph>
            Information Collected by Automated Means Through Our Services. We
            may gather by automated means (such as cookies, web beacons, web
            server logs, JavaScript and other similar technologies) certain
            information through our Services:
          </Paragraph>
          <List
            className='content-list'
            dataSource={[
              {
                desc: 'Your Internet Protocol (IP) address;'
              },
              {
                desc: 'Device information, including unique identifiers and connection information, including mobile device advertising IDs (e.g., Apple’s IDFA or Google’s AAID) and the means of internet connection (e.g., WiFi connection, ISP) that can identify the physical location of such devices, in accordance with applicable law;'
              },
              {
                desc: 'Your device type and settings, software used, browser type and operating system;'
              },
              {
                desc: 'Websites or other services you visited before and after visiting the Services (referring URL)'
              },
              {
                desc: 'Web pages and advertisements you view and links you click on within, and what search queries you may have run on, the Services (clickstream);'
              },
              {
                desc: 'Viewing behavior, including the content you view, how long you view content, the quality of the service you receive, and advertisements you have been shown or interacted with;'
              },
              {
                desc: 'Dates and times you access or use the Services'
              },
              {
                desc: 'Location information, including the city, state and zip code associated with your IP Address, information derived through WiFi triangulation, and precise location information from GPS-based functionality on your mobile apps, with your consent.'
              },
              {
                desc: 'Your phone number and mobile carrier details in connection with our websites and mobile apps.'
              }
            ]}
            renderItem={item => (
              <List.Item className='list-item'>
                <Typography.Text strong>{item.title}</Typography.Text>{' '}
                {item.desc}
              </List.Item>
            )}
          />
          <LegalContentTitle title={'COOKIES AND SIMILAR TECHNOLOGIES'} />
          <Paragraph>
            Cookies are small files that we or others send to and store on or
            with your computer so that your computer, browser, mobile app or
            other application can be recognized as unique the next time you
            access, visit, use or otherwise take advantage of the Services or
            other media. Cookies may also reflect demographic data pertaining to
            you or other data linked to information you submit. One use or
            consequence of cookies is to enable you to receive customized ads,
            alerts, content, services or information. You are always free to
            decline any cookies we use by adjusting the settings of your
            browser, as your browser may permit; however, some products,
            services or features might not be available or operate properly if
            cookies are not enabled. Some of our advertisers and third-party
            service providers may also utilize their own cookies.
          </Paragraph>
          <Paragraph>
            In addition, we, our service providers and others sometimes use
            data-gathering mechanisms on the Services, including without
            limitation “web beacons”, “clear GIFs”, “pixels” and/or “tags”.
            These perform statistical and administrative functions, such as
            measuring site and page traffic, verifying advertising paths, better
            understanding user interests and activity, gathering related
            information (such as information relating to a particular browser,
            device or IP address) and positioning images, and typically do so
            without detracting from your online experience. Such mechanisms are
            not necessarily designed to collect Personal Information. In
            addition, if you have provided your email address, we might use a
            non-human unreadable form (or “hash”) of your email address to
            deliver, or facilitate delivery of, relevant advertisements and
            information to you on or by way of the Services or on or by way of
            other websites or media, including, for example, popular social
            media sites and features.
          </Paragraph>
          <LegalContentTitle title={'HOW WE USE THE INFORMATION WE OBTAIN'} />
          <Paragraph>
            We, or service providers acting on our behalf, may use the
            information collected from and about you to:
          </Paragraph>
          <List
            className='content-list'
            dataSource={[
              {
                desc: 'Provide our products and services, including authorizing a purchase, or completing a transaction that you requested;'
              },
              {
                desc: 'Create and manage online accounts;'
              },
              {
                desc: 'Send promotional materials, alerts regarding available offers and other communications, including text/SMS messages if you provided your mobile number and opted in to receive such messages (for information on our text messaging program, please see our Text/SMS Messaging Program Terms);'
              },
              {
                desc: 'Communicate about, and administer participation in, special events, promotions, programs, offers, surveys, contests and market research;'
              },
              {
                desc: 'Respond to inquiries from you and other third-parties, including inquiries from law enforcement agencies;'
              },
              {
                desc: 'Anonymize or de-identify personal information to provide third parties with aggregated data reports showing anonymized information and other non-personal information;'
              },
              {
                desc: 'Provide technical support;'
              },
              {
                desc: 'Generate suggestions about the type of content you may enjoy;'
              },
              {
                desc: 'Supplement your personal information collected directly from you and/or from automated means with additional information from publicly and commercially available sources, and/or information from Alyson.ai affiliates and our business partners;'
              },
              {
                desc: 'Associate your browser and/or device with other browsers or devices you use for the purpose of providing relevant and easier access to content, advertising across browsers and devices, and other operational/business purposes;'
              },
              {
                desc: 'Operate, evaluate and improve our business (including developing, enhancing, analyzing and improving our Services; managing our communications; reviewing and processing employment applications, performing data and statistical analytics; and performing accounting, auditing and other internal functions);'
              },
              {
                desc: 'Protect against, identify and prevent fraud and other unlawful activity, claims and other liabilities;'
              },
              {
                desc: 'Comply with and enforce applicable legal requirements, relevant industry standards, contractual obligations and our terms of service and other policies; and'
              },
              {
                desc: 'In other ways for which we provide specific notice at the time of collection.'
              }
            ]}
            renderItem={item => (
              <List.Item className='list-item'>
                <Typography.Text strong>{item.title}</Typography.Text>{' '}
                {item.desc}
              </List.Item>
            )}
          />
          <LegalContentTitle title={'INTEREST-BASED ADVERTISING'} />
          <Paragraph>
            As described in this Privacy Notice, we, as well as our third-party
            service providers, may obtain information about your online
            activities to provide you with advertising about products and
            services tailored to your individual interests. We and our
            third-party service providers also may obtain information for this
            purpose from third-party websites and apps. We also use third
            parties (including third-party ad servers) to serve ads on our
            Services. We engage third-party advertising networks to help us
            target our messaging to visitors through interest-based and
            contextual means.
          </Paragraph>
          <Paragraph>
            Through these ad networks, we can track your online activities (such
            as your visits to websites and your use of apps that serve our
            advertisements, including the pages or ads your view and actions you
            take on those sites or apps) over time and across third-party
            websites and apps by obtaining information through automated means,
            as described above. This data collection takes place both on our
            sites, apps and emails and on third-party websites and apps that
            participate in these ad networks. Our third-party advertisers and/or
            ad networks may also gather data relating to you in connection with
            your interactions with the advertisements they place on our
            Services. The networks use this information to show you
            advertisements on our Services or other third-party websites and
            apps that may be tailored to your individual interests. This
            information also helps us track the effectiveness of our marketing
            efforts.
          </Paragraph>
          <Paragraph>
            The activities described in this section may be considered “sharing”
            data under the laws of certain states. Subject to certain
            limitations, some U.S. residents have the right to opt out of having
            their personal information shared for this purpose. The section
            below entitled Your Choices and Rights provides details on and
            explains how to exercise your choices regarding interest-based
            advertising.
          </Paragraph>
          <LegalContentTitle title={'INFORMATION WE SHARE'} />
          <Paragraph>We may share your personal information with:</Paragraph>
          <List
            className='content-list'
            dataSource={[
              {
                desc: "Our subsidiaries and affiliated businesses within the Alyson.ai family of companies and the Alyson.ai family of companies may use your personal information consistent with this Privacy Notice. Those businesses may also use your personal information for each of their own purposes, including marketing purposes. We also share certain data such as your clickstream data, browsing and content viewing history, with our affiliate NC Audience Exchange LLC, ('NewsIQ'), which collects information from you through automated means, as described above, when you are using the Services. To learn more about News IQ and if you wish to opt out of having your data shared with NC Audience Exchange, please click here."
              },
              {
                desc: 'With third parties who perform services on our behalf.'
              },
              {
                desc: 'With our third-party clients or business partners, such as realtors, landlords, and other Professionals to facilitate your transactions, and other third parties for their own commercial or marketing purposes, such as to serve targeted advertisements.'
              },
              {
                desc: 'We may disclose information to law enforcement authorities or other government officials if we are required to do so to comply with subpoenas, court orders, legal process or other law enforcement or other government measures, and to comply with other legal obligations. We may also disclose information if we believe disclosure is necessary or appropriate in connection with an investigation of suspected or actual fraudulent or illegal activity.'
              },
              {
                desc: 'We may disclose information to protect and defend the rights, interests and safety of the Services, our subsidiaries and affiliates, and their employees, contractors and agents; to protect the security and safety of our users of the Services, including when we believe disclosure is necessary or appropriate to prevent physical harm or financial loss.'
              },
              {
                desc: 'In the event of a proposed or completed sale or transfer of all or a portion of our business or assets (including in the event of a reorganization, dissolution or liquidation).'
              },
              {
                desc: 'We may share your information with select third-party partners with your consent or at your direction so they can send you promotions, ads or offers about their services or products that you may be interested in. We also may give you the option to receive communications from one of our advertising partners, such as when we offer a joint promotion with that third-party advertiser. If you choose to opt in to receiving communications from that third-party advertiser by providing your explicit consent, the third-party advertiser will manage your personal information pursuant to their own privacy policy.'
              },
              {
                desc: 'When the information collected from or about you is not defined as personal information under applicable law, we may share such non-personal, de-identified information or aggregated information with third parties at our discretion.'
              }
            ]}
            renderItem={item => (
              <List.Item className='list-item'>{item.desc}</List.Item>
            )}
          />
          <Paragraph>
            For information, features, products and services marketed or offered
            to you jointly or on a coordinated basis by us and a third party, we
            may share information about you with, or information may be gathered
            independently by, the third party. In these situations, we will be
            free to use such information to facilitate such features, products
            and services (or information about them) being made available to you
            and as otherwise outlined in this Privacy Notice, and you understand
            the third party may use the information in different ways. Although
            not always the case, you often can tell when information, features,
            products or services are marketed or offered jointly or in
            coordination with a third party because a portion of the Services
            often will be “co-branded” in such cases, will display the third
            party’s logo and/or name (whether or not along with our own), will
            describe or reference the relationship between us and the third
            party or will be set up so that you can contact or be linked to the
            third party or its website to initiate, complete or learn more about
            the transaction. Please be aware that each company we do business
            with (including Professionals) has its own policies regarding its
            use, sharing and protection of information about you and that such
            policies may differ from those outlined in this Privacy Notice.
          </Paragraph>
          <LegalContentTitle title={'YOUR CHOICES AND RIGHTS'} />
          <Paragraph>
            We offer you certain choices and you also may have certain rights in
            connection with the personal information we collect about you.
          </Paragraph>
          <LegalContentTitle title={'YOUR CHOICES'} />
          <Paragraph>
            You can choose to use Alyson.ai’s Services without providing any
            information about yourself to us directly, but some information may
            be collected automatically or be requested by us so that you can
            take advantage of certain features on our Services.
            <br />
            <br />
            To ask us to remove your information from our marketing mailing
            lists, please contact us as outlined in the HOW TO CONTACT US
            Section below. You also can unsubscribe from our marketing mailing
            lists by following the “Unsubscribe” link in our emails. Even if you
            unsubscribe from our marketing communications, we may still need to
            send you communications relating to your use of the Services, such
            as service announcements where you are using our Service.
            <br />
            <br />
            You also have choices about whether cookies and other similar
            technologies are placed on your computer or mobile device. For more
            information, see our section on Cookies and Other Technologies,
            above.
            <br />
            <br />
            We may use third-party analytics services on our Services, such as
            Google Analytics. The analytics providers that administer these
            services use technologies such as cookies, web beacons and similar
            technologies to help us analyze your use of the Services. To learn
            more about how to opt out of Google Analytics and similar services,
            please visit the links below:
          </Paragraph>

          <List
            className='content-list'
            dataSource={[
              {
                desc: 'Google Analytics: https://tools.google.com/dlpage/gaoptout'
              },
              {
                desc: 'Adobe Analytics: https://cross-device-privacy.adobe.com/'
              },
              { desc: 'FullStory: https://www.fullstory.com/optout/' }
            ]}
            renderItem={item => (
              <List.Item className='list-item'>{item.desc}</List.Item>
            )}
          />

          <Paragraph>
            You may also choose to opt out of use of data that we or our
            third-party service providers collect about your activities to
            provide you with tailored advertising about products and services of
            interest to you. We and our third-party service providers also may
            obtain information for this purpose from third-party websites or
            apps.
            <br />
            <br />
            To learn more about how to opt out of ad network interest-based
            advertising, please see the section on Cookies and Other
            Technologies section above or visit the customer opt-out pages at
            http://www.aboutads.info/choices/ and
            http://www.networkadvertising.org/choices/. To learn more about
            opting out on your mobile device, click here or, for users of our
            mobile apps, go to our Privacy & Data menu option and review your
            selections.
          </Paragraph>
          <LegalContentTitle
            title={
              'ACCESSING, CORRECTING, AND DELETING YOUR PERSONAL INFORMATION'
            }
          />

          <Paragraph>
            Consumers and Professionals may access, review, update, and/or
            correct inaccuracies in your personal information in our custody and
            control as described below. Please note that any change you request
            regarding personal information may affect or otherwise change the
            availability, deliverability, or quality for you of information,
            features, products, or services in which you are interested or your
            experience on or relating to the Services.
            <br />
            <br />
            Consumers may access and edit their personal information by
            following the instructions found in the “My Profile” or “Edit Your
            Profile” area of the Services where you registered or submitted
            personal information. If you would like us to no longer use
            information about you or share it with our affiliates, partners, or
            other service providers, for their marketing purposes, please send a
            request to
            <a href='mailto:privacy@alyson.ai'>privacy@alyson.ai</a>.
            <br />
            <br />
            Professionals may edit their personal information by returning to
            the area of the Services where they registered and modifying the
            information there, or by calling our Customer Care Center at{' '}
            <a href='tel:+12137259766'>(213) 725-9766</a>. By contacting
            Customer Care to make such changes, Professionals expressly
            authorize Customer Care to access personal information and any
            associated data or accounts for the purposes of completing your
            requested edits, modifications, and/or deletions. Note that these
            options may not apply to a Professional to the extent modified in a
            separate written agreement signed by an authorized officer of
            Alyson.ai, which agreements may be entered into by Alyson.ai in its
            sole discretion and without notice to others.
          </Paragraph>
          <LegalContentTitle title={'CAREERS'} />

          <Paragraph>
            If you submit an application for employment on our Careers page, we
            will use the information you provide about yourself to process your
            application. We may also use such information for our recruitment,
            management, and planning programs. Your provision of information to
            us is voluntary; however, if you fail to provide sufficient
            information, we may reject or decline to consider your application.
            <br />
            <br />
            We may also obtain information about you from your references, a
            background check (as permitted by applicable law), or through
            automated means based on your use of our Services. We may share
            information about you with our affiliates and with third-party
            service providers in connection with human resources functions
            (including technical support).
          </Paragraph>
          <LegalContentTitle title={'STATES PRIVACY RIGHTS'} />
          <LegalContentTitle title={'INFORMATION FOR VISITORS FROM CANADA'} />

          <Paragraph>
            The Canadian Personal Information Protection and Electronic
            Documents Act (PIPEDA) provides certain rights to Canadian
            residents. Under Canadian law, you have a right to access your
            personal information held by us, subject to applicable exceptions.
            You may contact us or write to us at the address below to ask us to
            access and/or correct your information. We may require you to send
            us proof of your identity before providing you with access to your
            personal information. If you send us a request to access or correct
            information, then we will contact you within 30 days (although it
            may take us longer to fully respond to your request).
            <br />
            <br />
            Our Privacy Notice clearly states how we collect, use, and share
            your personal information. We may share information with third
            parties, such as subsidiaries, affiliates, business partners, and
            authorized third parties. However, we will only share your
            information with such parties where we have your explicit consent to
            do so or, in some cases, where we may infer consent from your
            actions or behavior.
            <br />
            <br />
            Please contact us at any time to let us know (1) if you do not wish
            to receive marketing communications (such as emails) from us or our
            third-party partners, or you otherwise object to our sharing your
            information with those partners, (2) if you have any questions, or
            complaints, regarding the collection or use of your personal
            information or the content of this notice, or (3) if you wish to
            withdraw your consent to us using your data.
            <br />
            <br />
            If you are not satisfied with our response to your query or
            complaint, you may also contact the Office of the Information and
            Privacy Commissioner of Canada.
          </Paragraph>
          <LegalContentTitle title={'HOW WE PROTECT PERSONAL INFORMATION'} />

          <Paragraph>
            We maintain administrative, technical, and physical safeguards
            designed to protect the personal information we have about you
            against accidental, unlawful, or unauthorized destruction, loss,
            alteration, access, disclosure, or use. However, no data
            transmission or storage, or use of the Internet, can be guaranteed
            to be 100% secure.
          </Paragraph>
          <LegalContentTitle title={'TRANSFERS OF INFORMATION'} />

          <Paragraph>
            The Services are hosted in and managed from the United States. We
            may transfer the information we collect about you to another
            country, which may not be deemed to have the same data protection
            laws as the country in which you initially provided the information.
            Applicable laws in the United States and/or other countries may
            allow the courts, law enforcement, and national security authorities
            to access your personal information when in such country.
            <br />
            <br />
            If you are a user located outside the United States or the country
            to which your information may be transferred, you understand (and,
            as permitted under applicable law, consent to) having any personal
            information processed in the United States and/or such country. When
            we transfer your information, we will protect that information as
            described in this Privacy Notice.
          </Paragraph>
          <LegalContentTitle
            title={'LINKS TO THIRD-PARTY SITES, APPS AND SERVICES'}
          />

          <Paragraph>
            For your convenience and information, our Services may provide links
            to third-party sites, apps, and services that may be operated by
            companies not affiliated with Alyson.ai. These companies may have
            their own privacy notices or policies, which we strongly suggest you
            review. We are not responsible for the privacy practices of any
            non-Alyson.ai sites, apps, or services.
          </Paragraph>
          <LegalContentTitle title={'CHANGES TO OUR PRIVACY NOTICE'} />

          <Paragraph>
            From time to time, we may change our Privacy Notice to reflect
            changes to our privacy practices and Services. If we modify the
            Privacy Notice, we will update the “Last Modified Date” and the
            changes will be effective as of the date we post such Notice. For
            material changes, we will notify you by posting a prominent notice
            on our Services indicating at the top of the Privacy Notice when it
            was most recently updated or by other appropriate means, such as
            email through the email address you most recently provided to us.
          </Paragraph>

          <LegalContentTitle title={'HOW TO CONTACT US'} />

          <Paragraph>
            If you have any questions or comments about this Privacy Notice or
            the manner in which we or our service providers treat your personal
            information, would like to exercise your choices, or would like us
            to update information we have about you or your preferences, please
            contact us at
            <a href='mailto:privacy@alyson.ai'>privacy@alyson.ai</a>.
          </Paragraph>

          <LegalContentTitle title={'FOR CALIFORNIA RESIDENTS:'} />

          <LegalContentTitle title={'CALIFORNIA PRIVACY RIGHTS'} />

          <Paragraph>
            The California Consumer Privacy Act of 2018 (“CCPA”) and the
            California Privacy Rights Act of 2020 provide certain rights to
            residents of California. This section of the Privacy Notice applies
            if you are a natural person who is a resident of California
            (“California Consumer”) and use our Services. This notice
            supplements the information in the above Privacy Notice. Certain
            terms used below have the meanings given to them in the CCPA.
            <br />
            <br />
            The following sets forth the categories of information we collect
            and purposes for which we may use California Consumers’ personal
            information collected by Alyson.ai:
          </Paragraph>
          <LegalContentTitle
            title={'Categories of Personal Information We Collect About You'}
          />

          <Paragraph>
            The categories of personal information we may have collected about
            you or your use of our Services are:
          </Paragraph>

          <List
            className='content-list'
            dataSource={[
              {
                desc: 'Identifiers (such as your contact information (name, email address), government identifiers (social security numbers and MLS ID# or similar professional licensing numbers) or unique personal identifiers (device ID, cookies, IP address).'
              },
              {
                desc: 'Commercial information (such as transaction data or purchase history).'
              },
              {
                desc: 'Financial information (such as credit card information).'
              },
              {
                desc: 'Internet or other network or device activity (such as browsing history or app usage).'
              },
              { desc: 'Geo-location information.' },
              { desc: 'Professional or employment related information.' },
              { desc: 'Education information.' },
              {
                desc: 'Profile data about you and any inferences drawn from the profile data (such as characteristics, behaviors, attitudes).'
              },
              {
                desc: 'Information that identifies or can be reasonably associated with you.'
              }
            ]}
            renderItem={item => (
              <List.Item className='list-item'>{item.desc}</List.Item>
            )}
          />
          <LegalContentTitle
            title={
              'Categories of Sources from Which We Collected Personal Information'
            }
          />

          <Paragraph>
            The sources from which we may have collected personal information
            about you or your use of the Services are:
          </Paragraph>

          <List
            className='content-list'
            dataSource={[
              { desc: 'Directly from you.' },
              {
                desc: 'From other sources (such as Company affiliates and/or business partners; advertising providers; analytics providers; marketers; public databases; consumer data resellers; social media networks, in accordance with your privacy preferences on such services; researchers; payment processors; and surveys).'
              },
              { desc: 'Through your use of the Services.' }
            ]}
            renderItem={item => (
              <List.Item className='list-item'>{item.desc}</List.Item>
            )}
          />
          <LegalContentTitle
            title={
              'Business or Commercial Purposes for Which We Collected or Disclosed the Personal Information'
            }
          />

          <Paragraph>
            The business or commercial purposes, as defined under the CCPA, for
            which we collected or disclosed the personal information are:
          </Paragraph>

          <List
            className='content-list'
            dataSource={[
              {
                desc: 'Performing services, including maintaining or servicing accounts, providing customer service, processing or fulfilling orders and transactions, verifying customer information, processing payments, providing advertising or marketing services, providing analytics services, or providing similar services.'
              },
              {
                desc: 'Auditing related to a current interaction with you and concurrent transactions, including, but not limited to, counting ad impressions to unique visitors, verifying positioning and quality of ad impressions, and auditing compliance.'
              },
              {
                desc: 'Short-term, transient use, including, but not limited to, the contextual customization of ads shown as part of the same interaction.'
              },
              {
                desc: 'Detecting security incidents, protecting against malicious, deceptive, fraudulent, or illegal activity, and prosecuting those responsible for that activity.'
              },
              {
                desc: 'Debugging to identify and repair errors that impair existing intended functionality.'
              },
              {
                desc: 'Undertaking internal research for technological development and demonstration.'
              },
              {
                desc: 'Undertaking activities to verify or maintain the quality or safety of a service that is owned, produced, or controlled by us, and to improve, upgrade, or enhance the service that is owned, produced, or controlled by us.'
              },
              {
                desc: 'To advance the commercial or economic interests of the Company, such as by inducing another to buy, rent, lease, join, subscribe to, provide, or exchange products, goods, property, information, or services, or enabling or effecting, directly or indirectly, a commercial transaction.'
              }
            ]}
            renderItem={item => (
              <List.Item className='list-item'>{item.desc}</List.Item>
            )}
          />

          <Paragraph>
            We may disclose the categories of personal information identified in
            this California Privacy Notice about our California consumers for
            our operational purposes where the use of such personal information
            is reasonably necessary and proportionate to achieve the operational
            purpose for which the personal information was collected or
            processed or for another operational purpose that is compatible with
            the context in which the personal information was collected.
          </Paragraph>
          <LegalContentTitle
            title={
              'Categories of Third Parties with Whom We Shared the Personal Information'
            }
          />

          <Paragraph>
            The categories of third parties with whom we share personal
            information include our subsidiaries and affiliates, business
            partners, data analytics providers, and third-party marketers (who
            may combine your personal information with their own records and
            records available from other sources, for their own business or
            direct marketing purposes, and the direct marketing purposes of
            other third-party marketers).
          </Paragraph>

          <LegalContentTitle
            title={
              'Categories of Personal Information Sold, Shared or Disclosed for a Business Purpose'
            }
          />

          <Paragraph>
            We may sell or disclose for a business purpose any or all of the
            personal information collected from and about you as set forth in
            the Information We Collect and Obtain and Information We Share
            sections in our Privacy Notice above.
          </Paragraph>

          <LegalContentTitle title={'Sensitive Personal Information'} />

          <Paragraph>
            We do not use or disclose sensitive personal information other than
            geolocation data collected by our apps to provide you the Services
            and as permitted by California law. We do not sell or share
            sensitive personal information.
          </Paragraph>
          <LegalContentTitle title={'Retention of Personal Information'} />

          <Paragraph>
            We retain your information for as long as necessary to provide the
            Services to you and our other users. This means we keep your profile
            information for as long as you maintain an account. We retain
            transactional information for at least seven years to ensure we can
            perform legitimate business functions, such as accounting for tax
            obligations. We also retain your information as necessary to comply
            with our legal obligations, resolve disputes and enforce our terms
            and policies.
          </Paragraph>

          <LegalContentTitle title={'Your California Privacy Rights'} />

          <Paragraph>
            If you are a California resident, you may have certain rights.
            California law may permit you to request that we:
          </Paragraph>

          <List
            className='content-list'
            dataSource={[
              {
                desc: 'Provide you the categories of personal information we have collected or disclosed about you in the last twelve months; the categories of sources of such information; the business or commercial purpose for collecting or selling your personal information; and the categories of third parties with whom we shared personal information.'
              },
              {
                desc: 'Provide access to and/or a copy of certain information we hold about you.'
              },
              {
                desc: 'Delete certain information we have about you.'
              },
              {
                desc: 'Correct certain information that we have about you.'
              }
            ]}
            renderItem={item => (
              <List.Item className='list-item'>{item.desc}</List.Item>
            )}
          />

          <Paragraph>
            You may have the right to receive information about the financial
            incentives that we offer to you (if any). You also have the right to
            not be discriminated against (as provided for in applicable law) for
            exercising certain of your rights. Certain information may be exempt
            from such requests under applicable law. For example, we need
            certain types of information so that we can provide the Services to
            you and for compliance with applicable law. If you ask us to delete
            certain information, you may no longer be able to access or use the
            Services.
          </Paragraph>

          <Paragraph>
            California customers may request, once per year, that we disclose
            the identity of any third parties with whom we have shared personal
            information for the third-parties’ direct marketing purposes within
            the previous calendar year, along with the type of personal
            information disclosed.
          </Paragraph>

          <Paragraph>
            You also have the right to opt out of the sale or sharing of your
            personal information. California law broadly defines sale or sharing
            such that it may include allowing third parties to receive certain
            information, such as cookies, IP address and/or browsing behavior,
            to deliver targeted advertising.
          </Paragraph>

          <LegalContentTitle
            title={'FOR COLORADO, CONNECTICUT, VIRGINIA & UTAH RESIDENTS'}
          />

          <LegalContentTitle title={'CO, CT, VA & UT PRIVACY RIGHTS'} />

          <Paragraph>
            The Colorado Privacy Act (“CPA”), Connecticut Data Privacy Act
            (“CDPA”), Virginia Consumer Data Protection Act (“VCDPA”) and Utah
            Consumer Privacy Act (“UCPA”) each provide certain rights to
            residents of Colorado, Connecticut, Virginia and Utah, respectively.
            This Section of the Privacy Notice applies if you are a natural
            person who is a resident of the States of Colorado, Connecticut or
            Utah or Commonwealth of Virginia and use our Services (each and all
            of whom shall be referred to collectively, as “Consumer”). This
            notice supplements the information in the Privacy Notice. Certain
            terms used below have the meanings given to them in the respective
            laws.
          </Paragraph>

          <LegalContentTitle title={'SPECIFIC PROCESSING ACTIVITIES'} />

          <Paragraph>
            De-identified or pseudonymous data. In addition to the collection of
            personal data as described in the Privacy Notice, we process
            de-identified data. With regard to our processing of de-identified
            data, we take reasonable measures to ensure the de-identified data
            cannot be associated with a natural person and commit to maintain
            and use such de-identified data without attempting to re-identify
            the data, and we require all of our service providers and partners
            in receipt of such de-identified data from us treat the data in the
            same manner.
          </Paragraph>

          <LegalContentTitle title={'CONSUMER PRIVACY RIGHTS AND CHOICES'} />

          <Paragraph>
            In addition to your rights of access, correction, deletion and data
            portability, as described in the Privacy Notice, Consumers may have
            certain additional rights in connection with the personal data we
            collect about you, many of which are subject to exceptions under
            applicable law:
          </Paragraph>

          <List
            className='content-list'
            dataSource={[
              {
                desc: 'The right to nondiscrimination. We will not deny, charge different prices for, or provide a different level of quality of goods or services if you choose to exercise your rights.'
              },
              {
                desc: 'The right to opt out of the sale and/or processing of your personal data. You have the right to opt out of the sale of your personal data to a third party and/or the processing of your personal data for the following purposes: (1) targeted advertising and (2) profiling.'
              }
            ]}
            renderItem={item => (
              <List.Item className='list-item'>{item.desc}</List.Item>
            )}
          />

          <LegalContentTitle title={'HOW TO CONTACT US'} />

          <Paragraph>
            To submit a request, please contact us at privacy@alyson.ai. To
            protect your privacy and maintain security, we take steps to verify
            your identity before granting you access to your personal
            information or complying with your request. To the extent permitted
            by applicable law, we may charge a reasonable fee to comply with
            your request.
          </Paragraph>
        </div>
      </div>
      <LegalLinks />
    </div>
  )
}

export default Privacy
