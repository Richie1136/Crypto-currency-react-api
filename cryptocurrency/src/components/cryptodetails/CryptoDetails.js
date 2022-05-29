import { useState } from 'react'
import HTMLReactParser from "html-react-parser"
import { useParams } from "react-router-dom"
import millify from "millify"
import { Col, Row, Select, Typography } from "antd"
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useGetCryptoDetailsQuery } from '../../api'



const CryptoDetails = () => {
  const { coinId } = useParams()
  const [timePeriod, setTimePeriod] = useState('7d')
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)

  const cryptoDetails = data?.data.coin

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  const handleChange = (value) => {
    setTimePeriod(value)
  }

  console.log(data?.data.coin)
  return (
    <Col className='coin-detail-container' span={24}>
      <Col className='coin-heading-container'>
        <Typography.Title className="coin-name" level={2}>
          {cryptoDetails?.name} Price
        </Typography.Title>
        <p>
          {cryptoDetails?.name} live price in US dollars
          View value statistics, market cap and supply
        </p>
      </Col>
      <Select className='select-timeperiod' defaultValue='7d' placeholder="Select Time Period" onChange={handleChange} >
        {time.map((date) => {
          return <Select.Option key={date}>{date}</Select.Option>
        })}
      </Select>
      <Col className='stats-container'>
        <Col className='coin-value-statistics'>
          <Col className='coin-value-statistics-heading'>
            <Typography.Title className='coin-details-heading' level={3}>
              {cryptoDetails?.name} Value Statistics
            </Typography.Title>
            <p>An overview showing the stats of {cryptoDetails?.name}</p>
          </Col>
          {stats?.map(({ icon, title, value }) => (
            <Col className='coin-stats'>
              <Col className='coin-stats-name'>
                <Typography.Text>{icon}</Typography.Text>
                <Typography.Text>{title}</Typography.Text>
              </Col>
              <Typography.Text className='stats'>{value}</Typography.Text>
            </Col>
          ))}
        </Col>
        <Col className='other-stats-info'>
          <Col className='coin-value-statistics-heading'>
            <Typography.Title className='coin-details-heading' level={3}>
              Other Statistics
            </Typography.Title>
            <p>An overview showing the stats of {cryptoDetails?.name}</p>
          </Col>
          {genericStats?.map(({ icon, title, value }) => (
            <Col className='coin-stats'>
              <Col className='coin-stats-name'>
                <Typography.Text>{icon}</Typography.Text>
                <Typography.Text>{title}</Typography.Text>
              </Col>
              <Typography.Text className='stats'>{value}</Typography.Text>
            </Col>
          ))}
        </Col>
      </Col>
    </Col>
  )
}

export default CryptoDetails