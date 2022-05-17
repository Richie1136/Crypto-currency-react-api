import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../../images/cryptocurrency.png'

const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size="large" />
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