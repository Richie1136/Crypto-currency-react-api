import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar />
        <Typography.Title className='logo' level={2}>
          <Link to="/">Crypto</Link>
        </Typography.Title>
        <Button className='menu-control-container'>

        </Button>
      </div>
    </div>
  )
}

export default NavBar