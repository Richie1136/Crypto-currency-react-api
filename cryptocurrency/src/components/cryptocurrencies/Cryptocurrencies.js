import millify from "millify"
import { NavLink } from "react-router-dom"
import { Card, Row, Col, Input } from "antd"
import { useGetCryptosQuery } from "../../api"
import { useState } from "react"

const Cryptocurrencies = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery()
  const [cryptos, setCryptos] = useState(cryptosList?.data.coins)

  return (
    <div>Cryptos</div>
  )
}

export default Cryptocurrencies