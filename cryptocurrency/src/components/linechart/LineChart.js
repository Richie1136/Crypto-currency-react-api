import { Row, Col, Typography } from "antd"
const LineChart = ({ coinHistory, currentPrice, coinName }) => {

  console.log(currentPrice)

  return (
    <>
      <Row className="chart-header">
        <Col className="price-container">
          <Typography.Title className="price-change" level={5}>
            {coinHistory?.data?.change}%
          </Typography.Title>
          <Typography.Title className="current-price" level={5}>
            Current {coinName} Price: ${currentPrice}
          </Typography.Title>
        </Col>
      </Row>
    </>
  )
}

export default LineChart