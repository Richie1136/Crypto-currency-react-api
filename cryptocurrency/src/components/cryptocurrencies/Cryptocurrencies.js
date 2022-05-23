import millify from "millify"
import { NavLink } from "react-router-dom"
import { Card, Row, Col, Input } from "antd"
import { useGetCryptosQuery } from "../../api"
import { useState } from "react"
import Loading from "../loading/Loading"

// Millify converts really long numbers to human readable numbers

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState(cryptosList?.data.coins)


  if (isFetching) return <Loading />


  return (
    <>
      <Row className="crypto-card-container" gutter={[32, 32]}>
        {cryptos?.map((crypto) => (
          <Col key={crypto.id} className="crypto-card" xs={24} sm={12} lg={6}>
            <NavLink to={`/crypto/${crypto.id}`}>
              <Card
                title={`${crypto.rank}.${crypto.name}`}
                extra={<img className="crypto-image" src={crypto.iconUrl} alt="crypto-img" />}
                hoverable
              >
                <p>Price: ${millify(crypto.price)}</p>
                <p>Market Cap: ${millify(crypto.marketCap)}</p>
                <p>Daily Change: ${millify(crypto.change)}%</p>
              </Card>
            </NavLink>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies