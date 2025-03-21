import { Divider, Typography } from 'antd'
const { Title, Paragraph } = Typography

const CreateSection = () => {
  return (
    <div className='create-section'>
      <div className='section-divider'>
        <Divider style={{ color: '#FFBB2A' }} />
      </div>
      <div className='create-content'>
        <div className={'section-title-header'}>
          <img src='/media/images/Create.svg' alt='Alyson Logo' width='13%' />
          <Title level={2}>Create</Title>
        </div>
        <Paragraph>
          Alyson generative AI creates ads, landing pages, and websites proven
          to generate more revenue, then matches each user with the best page
          for them to create revenue.
        </Paragraph>
      </div>
    </div>
  )
}

export default CreateSection
