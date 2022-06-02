import { Select, Typography, Row, Col, Avatar, Card } from "antd"
import moment from "moment"
import { useGetCryptosNewsQuery } from "../../api/cryptoNews"
import Loading from "../loading/Loading"
import { useState } from 'react'
import { useGetCryptosQuery } from "../../api"



const News = ({ simplified }) => {

  const [newsCategory, setNewsCategory] = useState("Cryptocurrency")

  const { data } = useGetCryptosQuery(100)


  const { data: cryptoNews } = useGetCryptosNewsQuery({ newsCategory, count: simplified ? 6 : 12 })


  const defaultImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

  if (!cryptoNews?.value) return <Loading />


  const handleChange = (value) => {
    setNewsCategory(value)
  }


  return (
    <>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={handleChange}
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Select.Option value="Cryptocurrency">Cryptocurrency</Select.Option>
              {data?.data?.coins.map((coin) => {
                return <Select.Option key={coin.uuid} value={coin.name}>{coin.name}</Select.Option>
              })}
            </Select>
          </Col>
        )}
        {cryptoNews?.value.map((news, i) => (
          <Col key={i} xs={24} sm={12} lg={6}>
            <Card
              className="news-card"
              hoverable
            >
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Typography.Title className="news-title" level={4}>
                    {news.name}
                  </Typography.Title>
                  <img style={{ maxHeight: "100px", maxWidth: "200px" }} src={news?.image?.thumbnail.contentUrl || defaultImage} alt="crypto-img" />
                </div>
                <p>{news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                <div className="container">
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || defaultImage} />
                    <Typography.Text className="name" style={{ 'marginLeft': '10px' }}>
                      {news.provider[0]?.name}
                    </Typography.Text>
                  </div>
                  <Typography.Text>
                    {moment(news.datePublished).startOf('ss').fromNow()}
                  </Typography.Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default News