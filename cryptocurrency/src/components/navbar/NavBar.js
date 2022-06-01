import { Button, Menu, Typography, Avatar } from 'antd'
import { NavLink } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../../images/cryptocurrency.png'
import { useState, useEffect } from 'react'

const NavBar = () => {

  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(null)

  const handleResize = () => {
    setScreenSize(window.innerWidth)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size="large" />
        <Typography.Title className='logo' level={2}>
          <NavLink to="/">Crypto</NavLink>
        </Typography.Title>
      </div>
      {activeMenu && (
        <Menu theme='dark'>
          <Menu.Item icon={<HomeOutlined />}>
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <NavLink to="/exchanges">Exchanges</NavLink>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <NavLink to="/news">News</NavLink>
          </Menu.Item>
        </Menu>
      )}
    </div>
  )
}

export default NavBar