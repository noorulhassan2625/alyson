import { useEffect, useState } from 'react'
import { Menu, Drawer, Collapse, Row, Col, Card, Typography } from 'antd'
import { CheckCircleOutlined, MenuOutlined } from '@ant-design/icons'
import {
  AppstoreOutlined,
  EditOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  TeamOutlined,
  MailOutlined,
  IdcardOutlined
} from '@ant-design/icons'
import DarkButton from './DarkButton'
import { Link } from 'react-router-dom'

const { Panel } = Collapse

const { Title, Text } = Typography

const Navbar = () => {
  const features = [
    {
      title: 'Acquire',
      description:
        'Let Alyon’s AI help you acquire customers from Google, Facebook, Meta, Affiliate marketing, and Direct Mail.',
      link: '/acquire-page'
    },
    {
      title: 'Create',
      description:
        'Use generative AI to create ads, build a website or create a landing page.',
      link: '/create-page'
    },
    {
      title: 'Checkout',
      description:
        'Boost sales with Alyon’s Accelerated checkout boosting conversions by 50% with seamless one-tap payments.',
      link: '/checkout-page'
    },
    {
      title: 'Assistant',
      description:
        'AI assistant handles calls, emails, texts, and data to boost efficiency and grow your business.',
      link: '/agent-page'
    },
    {
      title: 'Audience',
      description:
        'Unify CRM data with insights from 170M+ homeowners to build profiles and predict behavior.',
      link: '/auidience-page'
    }
  ]
  const featuresbox2 = [
    {
      title: 'Activate',
      description:
        'Re-engage old leads with personalized emails, texts, and ads. Identify engagement opportunities to turn inactive leads into new ones.',
      link: '/activate-page'
    },
    {
      title: 'Identity',
      description:
        'Build profiles and manage identity graphs for accurate data in personalized communications and campaigns.',
      link: '/identity-page'
    }
  ]
  const [visible, setVisible] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      {/* Logo */}
      <div className='logo'>
        <a href='/'>
          <img
            src='/media/images/alysonlogo.svg'
            alt='Alyson Logo'
            width='100%'
          />
        </a>
      </div>

      {/* Desktop Menu */}
      <Menu mode='horizontal' className='menu'>
        <Menu.SubMenu className='nav-item' key='product' title='Product'>
          {/* <Menu.Item key='acquire' icon={<AppstoreOutlined />}>
            Acquire
          </Menu.Item>
          <Menu.Item key='create' icon={<EditOutlined />}>
            Create
          </Menu.Item>
          <Menu.Item key='checkout' icon={<ShoppingCartOutlined />}>
            Checkout
          </Menu.Item>
          <Menu.Item key='agent' icon={<UserOutlined />}>
            Agent
          </Menu.Item>
          <Menu.Item key='audience' icon={<TeamOutlined />}>
            Audience
          </Menu.Item>
          <Menu.Item key='activate' icon={<MailOutlined />}>
            Activate
          </Menu.Item>
          <Menu.Item key='identity' icon={<IdcardOutlined />}>
            Identity
          </Menu.Item> */}
          <div className='container mega-menu'>
            <Row gutter={[24, 24]}>
              <Col className='platform-cards' span={24} md={6}>
                <Title level={4}>PLATFORM</Title>
                <Card className='custom-card'>
                  <img
                    src='https://picsum.photos/seed/picsum/200/300'
                    width={'100%'}
                    height={'200px'}
                    alt='Acquire'
                    className='card-image'
                  />
                  <Title level={5}>Acquire</Title>
                  <Text>
                    Let Alyon’s AI help you acquire customers from Google,
                    Facebook, Meta, Affiliate Marketing, and Direct Mail.
                  </Text>
                </Card>
                <Card className='custom-card'>
                  <img
                    src='https://picsum.photos/seed/picsum/200/300'
                    width={'100%'}
                    height={'200px'}
                    alt='Create'
                    className='card-image'
                  />
                  <Title level={5}>Create</Title>
                  <Text>
                    Alyon generative AI creates ads, landing pages, and websites
                    proven to generate more revenue.
                  </Text>
                </Card>
              </Col>
              <Col className='middle-nav' span={24} md={6}>
                <Title level={4}>FEATURES</Title>
                {features.map((feature, index) => (
                  <Link to={feature.link} key={index}>
                    <div key={index} className='feature-item'>
                      <div>
                        <Title level={5}>{feature.title}</Title>
                        <Text>{feature.description}</Text>
                      </div>
                    </div>
                  </Link>
                ))}
              </Col>
              <Col span={24} md={6}>
                <Title level={4} style={{ visibility: 'hidden' }}>
                  FEATURES
                </Title>
                {featuresbox2.map((feature, index) => (
                  <Link to={feature.link} key={index}>
                    <div key={index} className='feature-item'>
                      <div>
                        <Title level={5}>{feature.title}</Title>
                        <Text>{feature.description}</Text>
                      </div>
                    </div>
                  </Link>
                ))}
              </Col>
            </Row>
            <style jsx>{`
              .custom-card {
                background: white;
                border-radius: 10px;
                padding: 20px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
              .card-image {
                width: 100%;
                margin-bottom: 10px;
              }
              .feature-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 10px 0;
              }
              .feature-icon {
                font-size: 20px;
                color: #f4a261;
              }
            `}</style>
          </div>
        </Menu.SubMenu>
        <Menu.Item className='nav-item' key='pricing'>
          Pricing
        </Menu.Item>
        <Menu.Item className='nav-item' key='about'>
          <Link to='/about'>About</Link>
        </Menu.Item>
        <Menu.Item className='nav-item' key='connect'>
          <Link to='/contact'>Contact</Link>
        </Menu.Item>
        <Menu.Item className='nav-item btn-nav' key='talk'>
          {' '}
          <DarkButton buttonText='Let’s Talk' />
        </Menu.Item>
      </Menu>

      {/* Mobile Menu Icon */}
      {/* <MenuOutlined className='menu-icon' onClick={() => setVisible(false)} /> */}

      {/* Mobile Drawer */}
      <Drawer
        title={
          <>
            <img
              src='/media/images/alysonlogo.svg'
              alt='Alyson Logo'
              width='30%'
            />
          </>
        }
        placement='left'
        onClose={() => setVisible(false)}
        open={visible}
        className={'mobile-nav'}
      >
        <Collapse accordion className={'collapse-menu'}>
          <Panel header='Product' key='1'>
            <div className='product-item'>
              <p className={'item-title'}>
                <AppstoreOutlined /> Acquire
              </p>
              <p>
                Let Alyson’s AI help you acquire customers from Google,
                Facebook, Meta, Affiliate marketing and Direct Mail
              </p>
            </div>

            <div className='product-item'>
              <p className={'item-title'}>
                <EditOutlined /> Create
              </p>
              <p>
                Use generative AI to create ads, build a website or create a
                landing page
              </p>
            </div>

            <div className='product-item'>
              <p className={'item-title'}>
                <ShoppingCartOutlined /> Checkout
              </p>
              <p>
                Boost sales with Alyson: Accelerated checkout boosting
                conversions by 50% with seamless one-tap payments.
              </p>
            </div>

            <div className='product-item'>
              <p className={'item-title'}>
                <UserOutlined /> Agent
              </p>
              <p>
                AI assistant handles calls, emails, texts, and data to boost
                efficiency and grow your business.
              </p>
            </div>

            <div className='product-item'>
              <p className={'item-title'}>
                <TeamOutlined /> Audience
              </p>
              <p>
                Unify CRM data with insights from 170M+ homeowners to build
                profiles and predict behavior.
              </p>
            </div>

            <div className='product-item'>
              <p className={'item-title'}>
                <MailOutlined /> Activate
              </p>
              <p>
                Re-engage old leads with personalized emails, texts, and ads.
                Identify engagement opportunities to turn inactive leads into
                new ones.
              </p>
            </div>

            <div className='product-item'>
              <p className={'item-title'}>
                <IdcardOutlined /> Identity
              </p>
              <p>
                Build identity and manage identity graphs for accurate insights.
              </p>
            </div>
          </Panel>
          <Panel header='Pricing' key='2'>
            <div className='product-item'>
              <p className={'item-title'}>Basic</p>
              <p>Details about the Basic plan.</p>
            </div>
            <div className='product-item'>
              <p className={'item-title'}>Premium</p>
              <p>Details about the Premium plan.</p>
            </div>
          </Panel>
          <Panel header='About' key='3'>
            <div className='product-item'>
              <p className={'item-title'}>Company</p>
              <p>Information about the company.</p>
            </div>
            <div className='product-item'>
              <p className={'item-title'}>Team</p>
              <p>Information about the team.</p>
            </div>
          </Panel>
          <Panel header='Connect' key='4'>
            <div className='product-item'>
              <p className={'item-title'}>Contact Us</p>
              <p>Details on how to contact us.</p>
            </div>
            <div className='product-item'>
              <p className={'item-title'}>Support</p>
              <p>Details on how to get support.</p>
            </div>
          </Panel>
        </Collapse>
        <DarkButton buttonText='Let’s Talk' />
      </Drawer>
    </div>
  )
}

export default Navbar
