import { useEffect, useState } from 'react';
import {
  Menu,
  Drawer,
  Collapse,
  Row,
  Col,
  Typography,
  Image,
  Button,
} from 'antd';
import {
  AppstoreOutlined,
  EditOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  TeamOutlined,
  MailOutlined,
  IdcardOutlined,
} from '@ant-design/icons';
import DarkButton from './DarkButton';
import { Link } from 'react-router-dom';
import ContactUsModal from './ContactUsModal';

const { Panel } = Collapse;
const { Title } = Typography;

const Navbar = () => {
  const features = [
    {
      logo: '/media/images/acquire mini.svg',
      title: 'Acquire',
      description:
        'Let Alyon’s AI help you acquire customers from Google, Facebook, Meta, Affiliate marketing, and Direct Mail.',
      link: '/acquire-page'
    },
    {
      logo: '/media/images/Create mini.svg',
      title: 'Create',
      description:
        'Use generative AI to create ads, build a website or create a landing page.',
      link: '/create-page'
    },
    {
      logo: '/media/images/acquire mini.svg',
      title: 'Checkout',
      description:
        'Boost sales with Alyon’s Accelerated checkout boosting conversions by 50% with seamless one-tap payments.',
      link: '/checkout-page'
    },
    {
      logo: '/media/images/acquire mini.svg',
      title: 'Assistant',
      description:
        'AI assistant handles calls, emails, texts, and data to boost efficiency and grow your business.',
      link: '/agent-page'
    },
    {
      logo: '/media/images/acquire mini.svg',
      title: 'Audience',
      description:
        'Unify CRM data with insights from 170M+ homeowners to build profiles and predict behavior.',
      link: '/auidience-page'
    },
    {
      logo: '/media/images/acquire mini.svg',
      title: 'Activate',
      description:
        'Re-engage old leads with personalized emails, texts, and ads. Identify engagement opportunities to turn inactive leads into new ones.',
      link: '/activate-page'
    },
    {
      logo: '/media/images/acquire mini.svg',
      title: 'Identity',
      description:
        'Build profiles and manage identity graphs for accurate data in personalized communications and campaigns.',
      link: '/identity-page'
    }
  ]

  const IndustriesItems = [
    {
      logo: '/media/images/acquire mini.svg',
      title: 'Home Services & Trades',
      link: '/industries'
    },
    {
      logo: '/media/images/acquire mini.svg',
      title: 'Real Estate',
      link: '/industries'
    },
    {
      logo: '/media/images/acquire mini.svg',
      title: 'Utility & Tech Services',
      link: '/industries'
    },
    {
      logo: '/media/images/acquire mini.svg',
      title: 'Emerging & Specialized Services',
      link: '/industries'
    }
  ]

  const ResourcesItems = [
    {
      logo: '/media/images/about Alyson mini.svg',
      title: 'About Alyson.ai',
      link: '#'
    },
    {
      logo: '/media/images/blog mini.svg',
      title: 'Blog',
      link: '#'
    },
    {
      logo: '/media/images/connect mini.svg',
      title: 'Connect',
      link: '/lets-connect'
    },
    {
      logo: '/media/images/Faqs reviews mini.svg',
      title: 'FAQs + Reviews',
      link: '#'
    }
  ]
  const [visible, setVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
          <div className='container mega-menu'>
            <Row gutter={[24, 24]}>
              <Col className='middle-nav' span={24} md={24}>
                {features.map((feature, index) => (
                  <Link to={feature.link} key={index}>
                    <div key={index} className='feature-item'>
                      <div>
                        <Image
                          src={feature.logo}
                          alt={feature.title}
                          width={20}
                          height={20}
                          preview={false}
                        />
                      </div>
                      <div>
                        <Title level={5}>{feature.title}</Title>
                      </div>
                    </div>
                  </Link>
                ))}
              </Col>
            </Row>
          </div>
        </Menu.SubMenu>
        <Menu.SubMenu className='nav-item' key='Industries' title='Industries'>
          <div className='container mega-menu'>
            <Row gutter={[24, 24]}>
              <Col className='middle-nav' span={24} md={24}>
                {IndustriesItems.map((feature, index) => (
                  <Link to={feature.link} key={index}>
                    <div key={index} className='feature-item'>
                      <div>
                        <Image
                          src={feature.logo}
                          alt={feature.title}
                          width={20}
                          height={20}
                          preview={false}
                        />
                      </div>
                      <div>
                        <Title level={5}>{feature.title}</Title>
                      </div>
                    </div>
                  </Link>
                ))}
              </Col>
            </Row>
          </div>
        </Menu.SubMenu>
        <Menu.SubMenu className='nav-item' key='Resources' title='Resources'>
          <div className='container mega-menu'>
            <Row gutter={[24, 24]}>
              <Col className='middle-nav' span={24} md={24}>
                {ResourcesItems.map((feature, index) => (
                  <Link to={feature.link} key={index}>
                    <div key={index} className='feature-item'>
                      <div>
                        <Image
                          src={feature.logo}
                          alt={feature.title}
                          width={20}
                          height={20}
                          preview={false}
                        />
                      </div>
                      <div>
                        <Title level={5}>{feature.title}</Title>
                      </div>
                    </div>
                  </Link>
                ))}
              </Col>
            </Row>
          </div>
        </Menu.SubMenu>
        <Menu.Item className='nav-item' key='about'>
          <Link to='/about'>About</Link>
        </Menu.Item>
        <Menu.Item className='nav-item' key='connect'>
          <Button className='contact-us-modal-btn' onClick={handleOpenModal}>
            Contact Us
          </Button>
        </Menu.Item>
        <Menu.Item className='nav-item btn-nav' key='talk'>
          <DarkButton
            buttonText='Get a Demo'
            onClick={handleOpenModal} // Pass the onClick handler
          />
        </Menu.Item>
      </Menu>

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
        <DarkButton buttonText='Let’s Talk' onClick={handleOpenModal} />
      </Drawer>

      {/* Render the ContactUsModal component */}
      <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Navbar;