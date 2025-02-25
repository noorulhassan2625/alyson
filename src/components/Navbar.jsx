import { useState } from 'react'
import { Menu, Drawer, Collapse } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
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

const { Panel } = Collapse

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className='navbar'>
      {/* Logo */}
      <div className='logo'>
        <img
          src='/media/images/alysonlogo.svg'
          alt='Alyson Logo'
          width='100%'
        />
      </div>

      {/* Desktop Menu */}
      <Menu mode='horizontal' className='menu'>
        {/* <Menu.SubMenu className='nav-item' key='product' title='Product'>
          <Menu.Item key='acquire' icon={<AppstoreOutlined />}>
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
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item className='nav-item' key='pricing'>
          Pricing
        </Menu.Item> */}
        <Menu.Item className='nav-item' key='about'>
          About
        </Menu.Item>
        <Menu.Item className='nav-item' key='connect'>
          Connect
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
