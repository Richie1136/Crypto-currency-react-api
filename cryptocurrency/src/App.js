import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import NavBar from './components/navbar/NavBar';
import Homepage from './components/homepage/Homepage'
import Exchanges from './components/exchanges/Exchanges'
import News from './components/news/News'
import Cryptos from './components/cryptos/Cryptos'

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
              <Route path='/cryptos' element={<Cryptos />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className='footer'>
      </div>
      <h2>Crypto App</h2>
    </div>
  );
}

export default App;
