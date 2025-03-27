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
  MenuOutlined,
} from '@ant-design/icons';
import DarkButton from './DarkButton';
import { Link, useLocation } from 'react-router-dom';
import ContactUsModal from './ContactUsModal';

const { Panel } = Collapse;
const { Title } = Typography;

const Navbar = () => {
  const location = useLocation();
  const features = [
    {
      logo: '/media/images/acquire mini.svg',
      title: 'Acquire',
      description:
        'Let Alyon`s AI help you acquire customers from Google, Facebook, Meta, Affiliate marketing, and Direct Mail.',
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
      logo: '/media/images/shopping bag mini icon.svg',
      title: 'Checkout',
      description:
        'Boost sales with Alyon`s Accelerated checkout boosting conversions by 50% with seamless one-tap payments.',
      link: '/checkout-page'
    },
    {
      logo: '/media/images/real state mini icon.svg',
      title: 'Assistant',
      description:
        'AI assistant handles calls, emails, texts, and data to boost efficiency and grow your business.',
      link: '/agent-page'
    },
    {
      logo: '/media/images/Audiences mini icon.svg',
      title: 'Audience',
      description:
        'Unify CRM data with insights from 170M+ homeowners to build profiles and predict behavior.',
      link: '/auidience-page'
    },
    {
      logo: '/media/images/Activate mini icon.svg',
      title: 'Activate',
      description:
        'Re-engage old leads with personalized emails, texts, and ads. Identify engagement opportunities to turn inactive leads into new ones.',
      link: '/activate-page'
    },
    {
      logo: '/media/images/Mini Person Identity Icon.svg',
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
      logo: '/media/images/Create mini.svg',
      title: 'Real Estate',
      link: '/industries'
    },
    {
      logo: '/media/images/shopping bag mini icon.svg',
      title: 'Utility & Tech Services',
      link: '/industries'
    },
    {
      logo: '/media/images/emerging mini icon.svg',
      title: 'Emerging & Specialized Services',
      link: '/industries'
    }
  ]

  const ResourcesItems = [
    {
      logo: '/media/images/about Alyson mini.svg',
      title: 'About Alyson.ai',
      link: '/about'
    },
    {
      logo: '/media/images/blog mini.svg',
      title: 'Blog',
      link: '/blog'
    },
    {
      logo: '/media/images/connect mini.svg',
      title: 'Connect',
      link: '/lets-connect'
    },
    {
      logo: '/media/images/Faqs reviews mini.svg',
      title: 'FAQs + Reviews',
      link: '/faqs'
    }
  ]

  const menuItems = [
    {
      key: 'product',
      title: 'Product',
      items: [
        { logo: '/media/images/acquire mini.svg', title: 'Acquire', link: '/acquire-page' },
        { logo: '/media/images/Create mini.svg', title: 'Create', link: '/create-page' },
        { logo: '/media/images/shopping bag mini icon.svg', title: 'Checkout', link: '/checkout-page' },
        { logo: '/media/images/real state mini icon.svg', title: 'Assistant', link: '/agent-page' },
        { logo: '/media/images/Audiences mini icon.svg', title: 'Audience', link: '/auidience-page' },
        { logo: '/media/images/Activate mini icon.svg', title: 'Activate', link: '/activate-page' },
        { logo: '/media/images/Mini Person Identity Icon.svg', title: 'Identity', link: '/identity-page' }
      ]
    },
    {
      key: 'industries',
      title: 'Industries',
      items: [
        { logo: '/media/images/acquire mini.svg', title: 'Home Services & Trades', link: '/industries' },
        { logo: '/media/images/Create mini.svg', title: 'Real Estate', link: '/industries' },
        { logo: '/media/images/shopping bag mini icon.svg', title: 'Utility & Tech Services', link: '/industries' },
        { logo: '/media/images/emerging mini icon.svg', title: 'Emerging & Specialized Services', link: '/industries' }
      ]
    },
    {
      key: 'resources',
      title: 'Resources',
      items: [
        { logo: '/media/images/about Alyson mini.svg', title: 'About Alyson.ai', link: '/about' },
        { logo: '/media/images/blog mini.svg', title: 'Blog', link: '/blog' },
        { logo: '/media/images/connect mini.svg', title: 'Connect', link: '/lets-connect' },
        { logo: '/media/images/Faqs reviews mini.svg', title: 'FAQs + Reviews', link: '/faqs' }
      ]
    }
  ];


  const [visible, setVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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

  useEffect(() => {
    // Set selected keys based on current path
    const path = location.pathname;
    const keys = [];
    
    // Check if current path matches any feature link
    if (features.some(f => path.startsWith(f.link))) {
      keys.push('product');
    }
    // Check if current path matches any industries link
    else if (IndustriesItems.some(i => path.startsWith(i.link))) {
      keys.push('Industries');
    }
    // Check if current path matches any resources link
    else if (ResourcesItems.some(r => path.startsWith(r.link))) {
      keys.push('Resources');
    }
    // Check if current path is about page
    else if (path === '/about') {
      keys.push('about');
    }
    
    setSelectedKeys(keys);
  }, [location.pathname]);

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
      <Menu 
        mode='horizontal' 
        className='menu'
        selectedKeys={selectedKeys}
        onSelect={({ key }) => setSelectedKeys([key])}
      >
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
        {/* <Menu.Item className='nav-item' key='ContactUs'>
        Contact Us
        </Menu.Item> */}
        {/* <Menu.Item className='nav-item' key='connect'>
          <Button className='contact-us-modal-btn' onClick={handleOpenModal}>
            Contact Us
          </Button>
        </Menu.Item> */}
        <Menu.Item className='nav-item btn-nav' key='talk'>
          <DarkButton
            buttonText='Get a Demo'
            onClick={handleOpenModal}
          />
        </Menu.Item>
      </Menu>

      {/* Mobile Drawer */}

        {/* Mobile Menu Icon */}
        <MenuOutlined className='menu-icon' onClick={() => setVisible(true)} />
         {/* Mobile Drawer */}
         <Drawer
        title={<Image src='/media/images/alysonlogo.svg' alt='Alyson Logo' width='30%' preview={false} />}
        placement='left'
        onClose={() => setVisible(false)}
        open={visible}
        className='mobile-nav'
      >
        <Collapse accordion className='collapse-menu'>
          {menuItems.map(({ key, title, items }) => (
            <Panel header={title} key={key}>
              {items.map(({ logo, title, link }, index) => (
                <Link className='accordion-item' to={link} key={index} onClick={() => setVisible(false)}>
                  <div className='menu-item'>
                    <Image src={logo} alt={title} width={20} height={20} preview={false} />
                    <Title level={5}>{title}</Title>
                  </div>
                </Link>
              ))}
            </Panel>
          ))}
        </Collapse>
        
        <DarkButton buttonText='Get a Demo' onClick={() => setIsModalOpen(true)} />
      </Drawer>

      {/* Render the ContactUsModal component */}
      <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Navbar;