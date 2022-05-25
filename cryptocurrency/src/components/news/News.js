import { Select, Typography, Row, Col, Avatar, Card } from "antd"
import moment from "moment"
import { useGetCryptosNewsQuery } from "../../api/cryptoNews"
import Loading from "../loading/Loading"


const News = ({ simplified }) => {

  const { data: cryptoNews } = useGetCryptosNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12 })

  console.log(cryptoNews)

  const defaultImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

  if (!cryptoNews?.value) return <Loading />


  return (
    <>
      <Row gutter={[24, 24]}>
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
                  <img src={news?.image?.thumbnail.contentUrl || defaultImage} height="100" width="100" alt="crypto-img" />
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