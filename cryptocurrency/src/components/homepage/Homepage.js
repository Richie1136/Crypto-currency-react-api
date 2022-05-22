import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { useGetCryptosQuery } from '../../api';
import Loading from '../loading/Loading'
import { NavLink } from 'react-router-dom';

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery()
  const globalStats = data?.data?.stats;

  console.log(data)

  if (isFetching) return <Loading />


  return (
    <>
      <Typography.Title className='heading' level={2}>
        Global Crytpo Stats
      </Typography.Title>
      <Row>
        <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.total} /></Col>
        <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className='home-heading-container'>
        <Typography.Title className="home-title" level={2}>Top 10 Cryptocurrencies in the World</Typography.Title>
        <Typography.Title className="show-more" level={3}><NavLink to='/cyptocurrencies'>Show More</NavLink></Typography.Title>

      </div>
    </>
  )
}

export default Homepage