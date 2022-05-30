// import { Line } from "react-chartjs-2"
// import { Row, Col, Typography } from "antd"

// const LineChart = ({ coinHistory, currentPrice, coinName }) => {
//   console.log(coinHistory)
//   return (
//     <>
//       <Row className="chart-header">
//         <Typography.Title className="chart-title" level={2}>
//           {coinName} Price Chart
//         </Typography.Title>
//         <Col className="price-container">
//           <Typography.Title className="price-change" level={5}>
//             {coinHistory?.data?.change}%
//           </Typography.Title>
//           <Typography.Title className="current-price" level={5}>
//             Current {coinName} Price: ${currentPrice}
//           </Typography.Title>
//         </Col>
//       </Row>
//     </>
//   )
// }

// export default LineChart





import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];



  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
    </>
  );
};

export default LineChart;