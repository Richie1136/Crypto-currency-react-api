import { Col, Row, Avatar, Typography, Collapse } from "antd"
import HTMLReactParser from "html-react-parser"
import { useGetCryptoExchangesQuery } from "../../api"
import Loading from "../loading/Loading"


const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangesQuery()
  return (
    <div>Exchanges</div>
  )
}

export default Exchanges