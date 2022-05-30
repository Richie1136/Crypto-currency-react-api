import { Line } from "react-chartjs-2"
import { Row, Col, Typography } from "antd"

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  console.log(coinHistory)
  return (
    <>
      <Row className="chart-header">
        <Typography.Title className="chart-title" level={2}>
          {coinName} Price Chart
        </Typography.Title>
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