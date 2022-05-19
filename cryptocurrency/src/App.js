import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import NavBar from './components/navbar/NavBar';
import Homepage from './components/homepage/Homepage'
import Exchanges from './components/exchanges/Exchanges'
import News from './components/news/News'
import Cryptocurrencies from './components/cryptocurrencies/Cryptocurrencies'
import CryptoDetails from './components/cryptodetails/CryptoDetails'
import { NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <NavBar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/exchanges' element={<Exchanges />} />
              <Route path='/news' element={<News />} />
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route path='/crypto/:coinId' element={<CryptoDetails />} />
            </Routes>
          </div>
        </Layout>
        <div className='footer' level={5}>
          <Typography.Title level={5} style={{ 'color': 'white', 'textAlign': 'center' }}>
            Crypto <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <NavLink to='/'>Home</NavLink>
            <NavLink to="/exchanges">Exchanges</NavLink>
            <NavLink to="/news">News</NavLink>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
