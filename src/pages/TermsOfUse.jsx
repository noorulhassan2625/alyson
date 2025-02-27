import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Typography, List } from 'antd'
import LegelHero from '../components/LegelHero'
import '../css/legalPagesStyle.css'
import LegalLinks from '../components/LegalLinks'
import LegalContentTitle from '../components/LegalContentTitle'

const { Paragraph, Text } = Typography

function TermsOfUse () {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes('/terms-of-use')) {
      document.body.style.backgroundColor = '#FAFAFA'
    } else {
      document.body.style.backgroundColor = ''
    }
  }, [location.pathname])

  return (
    <div className='legal-page '>
      <LegelHero title={'Terms of Use'} />
      <div className='legal-content'>
        <Text
          style={{
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: '700',
            color: '#07074b'
          }}
        >
          Alyson.ai 2025
        </Text>
        <br></br>
        <div className='term-of-use-header'>
          <Text
            style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#07074b'
            }}
          >
            These Terms of Service contain an arbitration provision. Please
            review the Arbitration section for details.
          </Text>
          <Paragraph>
            These Terms of Service (“<b>Terms</b>”), the Master Services
            Agreement (“<b>MSA</b>”) and any applicable Statement of Work (“
            <b>SOW</b>” and collectively, the “<b>Agreement</b>”) govern your
            use of the Revcloud, Inc. (“<b>Revcloud</b>”) Website (“
            <b>Website</b>”) and any other services offered by Revcloud
            (together, the “<b>Services</b>”). Revcloud (“<b>we</b>” or “
            <b>us</b>”) provides the Website and Services. “<b>You</b>” refers
            to you as a user of the Website or Services. In the event of a
            conflict between these Terms and the Agreement, the Agreement will
            govern.
          </Paragraph>
          <Paragraph>
            BY USING THE WEBSITE OR SERVICES, YOU ARE AGREEING TO THESE TERMS.
            PLEASE READ THEM CAREFULLY.
          </Paragraph>
        </div>
        <LegalContentTitle title={'Eligibility'} />
        <div className='privacy-policy-content'>
          <Paragraph>
            You must be at least 18 years old to use the Website or the
            Services. If You are under the age of majority in your state of
            residence, a minor, your parent or legal guardian must agree to
            these Terms on your behalf and you may only access and use the
            Website and Services with permission from your parent or legal
            guardian.
          </Paragraph>
          <LegalContentTitle title={'Ownership and Licenses'} />
          <div style={{ textAlign: 'left' }}>
            <Text
              className='legal-sub-title'
              style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#07074b'
              }}
            >
              Ownership
            </Text>
          </div>
          <Paragraph>
            We own or license all right, title, and interest in and to (a) the
            Website, including all software, text, media, and other content
            available on the Website, (“<b>Content</b>”); and (b) our
            trademarks, logos, and brand elements (“<b>Marks</b>”). The Website
            and Services, Content, and Marks are all protected under U.S. and
            international laws. The look and feel of the Website and Services
            are copyright protected, all rights reserved.
          </Paragraph>
          <div style={{ textAlign: 'left' }}>
            <Text
              className='legal-sub-title'
              style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#07074b'
              }}
            >
              Licenses
            </Text>
          </div>
          <Paragraph>
            Except as stated expressly herein or on the Website, none of the
            material may be copied, reproduced, distributed, republished,
            downloaded, displayed, posted or transmitted in any form or by any
            means, including, but not limited to, electronic, mechanical,
            photocopying, recording, or otherwise, without the prior written
            permission of Revcloud. Any copying, reproduction or distribution of
            any Content is expressly prohibited unless Revcloud expressly grants
            You its prior written consent to do so. We grant to You, subject to
            these Terms, a non-transferable and non-exclusive license to use for
            your internal business purposes only any software and documentation,
            together with all updates, enhancements, modifications, and fixes
            thereto, which are owned by us and/or our licensors.
          </Paragraph>
          <Paragraph>
            You hereby grant and agree to grant us a royalty-free, worldwide,
            transferable, sub-licensable, irrevocable, perpetual license to use
            your data to provide the Services and for purposes of analytics,
            product development and enhancement, and training of artificial
            intelligence and machine learning models and algorithms. You
            acknowledge that all Documentation and Deliverables (as defined in
            the MSA or applicable SOW) generated by the use of generative AI in
            connection with the Services are a product of machine learning
            technologies, are not owned by You, and may bear similarities to or
            may be identical to Documentation or Deliverables provided to other
            our customers.
          </Paragraph>

          <LegalContentTitle title={'Your Responsibilities'} />
          <Paragraph>
            You will (a) be responsible for your compliance with these Terms,
            (b) use commercially reasonable efforts to prevent unauthorized
            access to or use of the Services and notify us promptly of any such
            unauthorized access or use, and (c) use the Services only in
            accordance with the Documentation and all applicable laws and
            regulations, including, without limitation, applicable export
            control laws and regulations of the United States and other
            jurisdictions.
          </Paragraph>
          <LegalContentTitle title={'Acceptable Use of the Website'} />
          <Paragraph>
            You are responsible for your use of the Website, and for any use of
            the Website made using your account. Our goal is to create a
            positive, useful, and safe user experience. To promote this goal, we
            prohibit certain kinds of conduct that may be harmful to other users
            or to us. When You use the Website, You may not:
          </Paragraph>
          <List
            className='content-list'
            dataSource={[
              {
                desc: 'make the Services available to, or use the Services for the benefit of, anyone other than you;'
              },
              {
                desc: 'sell, resell, license, sublicense, distribute, rent, or lease the Services, or include the Services in a service bureau or outsourcing offering;'
              },
              {
                desc: 'use the Services to store or transmit infringing, libelous, or otherwise unlawful or tortious material, or to store or transmit material in violation of third-party privacy rights;'
              },
              { desc: 'use the Services to store or transmit malicious code;' },
              {
                desc: 'interfere with or disrupt the integrity or performance of the Services or any third-party data contained therein;'
              },
              {
                desc: 'copy the Services or any part, feature, function, or user interface thereof;'
              },
              {
                desc: 'frame or mirror any part of the Services, other than framing on Customer’s own intranets or otherwise for Customer’s own internal business purposes or as permitted in the Documentation;'
              },
              {
                desc: 'access the Services in order to build a competitive product or service;'
              },
              { desc: 'violate any law or regulation;' },
              {
                desc: 'violate, infringe, or misappropriate other people’s intellectual property, privacy, publicity, or other legal rights;'
              },
              {
                desc: 'post or share anything that is illegal, abusive, harassing, harmful to reputation, pornographic, indecent, profane, obscene, hateful, racist, or otherwise objectionable;'
              },
              {
                desc: 'send unsolicited or unauthorized advertising or commercial communications, such as spam;'
              },
              {
                desc: 'engage in probing, “deep-linking,” “roboting,” spidering or harvesting, or participate in the use of software, including spyware, designed to collect data from or monitor the Website or circumvent the navigational structure or presentation of the Website or the Content, or obtain or attempt to obtain any materials or information through any means not purposely made available by us through the Website. We reserve the right to take measures to prevent any such activity;'
              },
              {
                desc: 'gain or attempt to gain unauthorized access to any portion or feature of the Website, or any other system or network connected to the Website or to any of our business partners’ servers, systems or networks, by hacking, “password-mining” or using any other illegitimate method of accessing data;'
              },
              {
                desc: 'reverse look-up, trace or seek to trace any information on any other visitor to the Website, or any other customer of ours, including any account that is not held by you, in any way where the purpose is to discover materials or information, including but not limited to personal information or other information that reasonably could be used to connect non-personal Information to personal information;'
              },
              {
                desc: 'transmit any viruses or other computer instructions or technological means whose purpose is to disrupt, damage, or interfere with the use of computers or related systems;'
              },
              { desc: 'stalk, harass, or harm another individual;' },
              {
                desc: 'impersonate any person or entity or perform any other similar fraudulent activity, such as phishing;'
              },
              {
                desc: 'use any means to scrape or crawl any Web pages contained in the Website;'
              },
              {
                desc: 'attempt to circumvent any technological measure implemented by us or any of our providers or any other third party (including another user) to protect the Website;'
              },
              {
                desc: 'attempt to decipher, decompile, disassemble, or reverse engineer any of the software or other underlying code used to provide the Website;'
              },
              {
                desc: 'advocate, encourage, or assist any third party in doing any of the foregoing.'
              }
            ]}
            renderItem={item => (
              <List.Item className='list-item'>{item.desc}</List.Item>
            )}
          />
          <LegalContentTitle title={'Privacy'} />
          <Paragraph>
            Our Privacy Policy explains how we collect, use, protect, and when
            we share personal information and other data with others. You are
            responsible for maintaining the confidentiality of your account
            information, including your username and password. You are
            responsible for all activities that occur under your account and you
            agree to notify us immediately of any unauthorized access or use of
            your account. We are not responsible or liable for any damage or
            loss related to any unauthorized access or use of your account.
          </Paragraph>
          <LegalContentTitle title={'Links'} />
          <Paragraph>
            The Website may contain links to other Websites and online
            resources. A link to a third party’s Website does not mean that we
            endorse it or that we are affiliated with it. We are not responsible
            or liable for any damage or loss related to the use of any
            third-party Website. You should always read the terms and conditions
            and privacy policy of a third-party Website before using it.
          </Paragraph>
          <LegalContentTitle title={'Changes to the Website'} />
          <Paragraph>
            We enhance and update the Website often. We may change or
            discontinue the Website at any time, with or without notice to You.
          </Paragraph>
          <LegalContentTitle title={'Termination'} />
          <Paragraph>
            We reserve the right to not provide the Website to any person. We
            also reserve the right to terminate any user’s right to access the
            Website at any time, in our discretion. If you violate any of these
            Terms, your permission to use the Website automatically terminates.
          </Paragraph>
          <LegalContentTitle
            title={'Disclaimer and Limitations on Our Liability'}
          />
          <Paragraph>
            YOU USE THE WEBSITE AT YOUR OWN RISK. THE WEBSITE AND SERVICES ARE
            PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. TO THE MAXIMUM
            EXTENT PERMITTED BY APPLICABLE LAW, OUR COMPANY AND ITS OFFICERS,
            EMPLOYEES, DIRECTORS, SHAREHOLDERS, PARENTS, SUBSIDIARIES,
            AFFILIATES, AGENTS, AND LICENSORS (“AFFILIATES”) DISCLAIM ALL
            WARRANTIES, CONDITIONS, AND REPRESENTATIONS OF ANY KIND, WHETHER
            EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING THOSE RELATED
            TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT AND THOSE ARISING OUT OF COURSE OF DEALING OR USAGE
            OF TRADE.
          </Paragraph>
          <Paragraph>
            IN PARTICULAR, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW,
            OUR COMPANY AND ITS AFFILIATES MAKE NO REPRESENTATIONS OR WARRANTIES
            ABOUT THE ACCURACY OR COMPLETENESS OF CONTENT AVAILABLE ON OR
            THROUGH THE WEBSITE OR THE CONTENT OF ANY WEBSITES OR ONLINE APP
            LINKED TO OR INTEGRATED WITH THE WEBSITE OR SERVICES. OUR COMPANY
            AND ITS AFFILIATES WILL HAVE NO LIABILITY FOR ANY: (a) ERRORS,
            MISTAKES, OR INACCURACIES OF CONTENT; (b) PERSONAL INJURY OR
            PROPERTY DAMAGE RESULTING FROM YOUR ACCESS TO OR USE OF THE WEBSITE,
            APP, OR PRODUCTS; (c) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR
            SERVERS OR OF ANY PERSONAL INFORMATION OR USER DATA; (d) ANY
            INTERRUPTION OF TRANSMISSION TO OR FROM THE WEBSITE OR APP; (e) ANY
            BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED
            ON OR THROUGH THE WEBSITE OR APP BY ANY THIRD PARTY; OR (f) ANY LOSS
            OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT
            POSTED OR SHARED THROUGH THE WEBSITE.
          </Paragraph>
          <Paragraph>
            YOU UNDERSTAND AND AGREE THAT, TO THE MAXIMUM EXTENT PERMITTED BY
            APPLICABLE LAW, ANY MATERIAL OR INFORMATION DOWNLOADED OR OTHERWISE
            OBTAINED THROUGH THE USE OF THE WEBSITE IS DONE AT YOUR OWN RISK AND
            THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE ARISING FROM
            DOING SO. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN,
            OBTAINED BY YOU FROM US OR THROUGH THE WEBSITE WILL CREATE ANY
            WARRANTY NOT EXPRESSLY MADE.
          </Paragraph>
          <Paragraph>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL
            WE BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY INDIRECT, SPECIAL,
            INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES (INCLUDING FOR LOSS
            OF PROFITS, REVENUE, OR DATA) OR FOR THE COST OF OBTAINING
            SUBSTITUTE PRODUCTS ARISING OUT OF OR IN CONNECTION WITH THESE
            TERMS, HOWEVER CAUSED, WHETHER SUCH LIABILITY ARISES FROM ANY CLAIM
            BASED UPON CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE), STRICT
            LIABILITY OR OTHERWISE, AND WHETHER OR NOT WE’VE BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES.
          </Paragraph>
          <Paragraph>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL
            CUMULATIVE LIABILITY TO YOU OR ANY THIRD PARTY UNDER THESE TERMS,
            FROM ALL CAUSES OF ACTION AND ALL THEORIES OF LIABILITY, WILL BE
            LIMITED TO AND WILL NOT EXCEED THE FEES YOU HAVE ACTUALLY PAID US
            DURING THE SIX (6) MONTHS PRECEDING THE CLAIM GIVING RISE TO SUCH
            LIABILITY.
          </Paragraph>
          <Paragraph>
            You understand and agree that we have set our prices and entered
            into these Terms with you in reliance upon the limitations of
            liability set forth in these Terms, which allocate risk between us
            and form the basis of a bargain between the parties.
          </Paragraph>
          <LegalContentTitle title={'Indemnification'} />
          <Paragraph>
            To the maximum extent permitted by applicable law, You agree to
            indemnify and hold harmless our company and its Affiliates from and
            against any and all claims, costs, proceedings, demands, losses,
            damages, and expenses (including, without limitation, reasonable
            attorney’s fees and legal costs) of any kind or nature, relating to,
            any actual or alleged breach of these Terms by You or anyone using
            your account. If we assume the defense of such a matter, You will
            reasonably cooperate with us in such defense.
          </Paragraph>
          <LegalContentTitle title={'Informal Dispute Resolution'} />
          <Paragraph>
            Any dispute, claim or demand arising out of or in connection with
            these Terms, the Website or the Services provided under any SOW will
            first be negotiated in good faith by the parties’ representatives.
            If a dispute is not resolved after thirty (30) calendar days of such
            negotiations, the parties agree to elevate the dispute to
            individuals who are officers and decision makers for each party. The
            parties agree to allow the officers another thirty (30) calendar
            days to negotiate in good faith a final resolution and settlement of
            the dispute. A party may not pursue any proceeding, action, lawsuit
            or other equitable or legal remedy in connection with disputes until
            the parties have exhausted efforts to resolve disputes in accordance
            with this provision. Unless otherwise stated, each of a party’s
            rights and remedies set out in these Terms are cumulative and
            additional to remedies provided at law or in equity.
          </Paragraph>
          <LegalContentTitle title={'Arbitration Agreement'} />
          <Paragraph>
            Once the above dispute resolution process has been exhausted under
            Section 11, any dispute, claim, or controversy arising out of or
            relating to these Terms, including the determination of the scope or
            applicability of this agreement to arbitrate, shall be determined by
            binding arbitration in Orange County, California before one
            arbitrator. The arbitration shall be administered by JAMS pursuant
            to its Comprehensive Arbitration Rules and Procedures. Judgment on
            the award may be entered in any court having jurisdiction. This
            clause shall not preclude parties from seeking provisional remedies
            in aid of arbitration from a court of appropriate jurisdiction in
            California
          </Paragraph>
          <LegalContentTitle title={'Other Provisions'} />
          <Paragraph>
            Under no circumstances will we be held liable for any delay or
            failure in performance due in whole or in part to any acts of nature
            or other causes beyond our reasonable control.
          </Paragraph>
          <Paragraph>
            These Terms will be governed by and construed in accordance with the
            laws of the State of California, without giving effect to any
            conflict of laws rules or provisions.
          </Paragraph>
          <Paragraph>
            You agree that any action of whatever nature relating to these Terms
            or the Website will be filed only in the state or federal courts
            located in Orange County, California. You consent and submit to the
            personal jurisdiction of such courts for the purposes of any such
            action.
          </Paragraph>
          <Paragraph>
            If any provision of these Terms is found to be unlawful or
            unenforceable, then that provision will be deemed severable from
            these Terms and will not affect the enforceability of any other
            provisions.
          </Paragraph>
          <Paragraph>
            The failure by us to enforce any right or provision of these Terms
            will not prevent us from enforcing such right or provision in the
            future.
          </Paragraph>
          <Paragraph>
            We may assign our rights and obligations under these Terms,
            including in connection with a merger, acquisition, sale of assets
            or equity, or by operation of law.
          </Paragraph>
          <LegalContentTitle title={'Additional Terms'} />
          <Paragraph>
            Some of our Services have additional terms and conditions (“
            <b>Additional Terms</b>”). Where Additional Terms apply to a
            Service, we will make them available for You to read through your
            use of that Service. By using that Service, you agree to the
            Additional Terms.
          </Paragraph>
          <LegalContentTitle title={'Changes to these Terms'} />
          <Paragraph>
            From time to time, we may change these Terms. If we change these
            Terms, we will give You notice by posting the revised Terms on the
            Website. Those changes will go into effect on the Revision Date
            shown in the revised Terms. By continuing to use the Website or
            Services, you are agreeing to the revised Terms.
          </Paragraph>

          <div className='term-of-use-header'>
            <Text
              style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#07074b'
              }}
            >
              PLEASE KEEP A COPY OF THESE TERMS FOR YOUR RECORDS AND PLEASE
              CHECK THE WEBSITE FREQUENTLY FOR ANY CHANGES TO THESE TERMS.
            </Text>
          </div>
        </div>
      </div>
      <LegalLinks />
    </div>
  )
}

export default TermsOfUse
