import millify from "millify"
import { NavLink } from "react-router-dom"
import { Card, Row, Col, Input } from "antd"
import { useGetCryptosQuery } from "../../api"
import { useState, useEffect } from "react"
import Loading from "../loading/Loading"

// Millify converts really long numbers to human readable numbers

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const filteredData = cryptosList?.data.coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

    setCryptos(filteredData)
  }, [search, cryptosList])

  if (isFetching) return <Loading />

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input placeholder="Search Cryptocurrencies" onChange={handleChange} value={search} />
        </div>
      )}
      <Row className="crypto-card-container" gutter={[32, 32]}>
        {cryptos?.map((crypto) => (
          <Col key={crypto.uuid} className="crypto-card" xs={24} sm={12} lg={6}>
            <NavLink to={`/crypto/${crypto.uuid}`}>
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