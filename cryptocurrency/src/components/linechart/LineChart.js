import { Line } from "react-chartjs-2"
import { Row, Col, Typography } from "antd"
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

const LineChart = ({ coinHistory, currentPrice, coinName }) => {

  const coinPrice = []
  const coinTimeStamp = []

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory.data.history[i].price)
    coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString())
  }


  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: `Price in USD`,
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd'
      }
    ]
  }

  // const options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true
  //         }
  //       }
  //     ]
  //   }
  // }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

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
      <Line data={data} options={options} />
    </>
  )
}

export default LineChart