import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <NavBar />
      </div>
      <div className='main'>
      </div>
      <div className='footer'>
      </div>
      <h2>Crypto App</h2>
    </div>
  );
}

export default App;
