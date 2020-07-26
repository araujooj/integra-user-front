/**  "no-unused-expressions": "off" */
import React, { useEffect, useState } from "react";
import { MarketApi, DEVELOPMENT_URL } from "../../Services/api";
import { Container, Content } from "./styles";

interface Market {
  id: string;
  name: string;
  avatar: string;
  city: string;
}

const Markets: React.FC = () => {
  const [markets, setMarkets] = useState<Market[]>([]);
  useEffect(() => {
    getMarkets();
  }, []);

  async function getMarkets(): Promise<void> {
    try {
      const response = await MarketApi.get(`/market`);
      setMarkets(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <Container>
      {markets.map((market) => (
        <Content to={`/markets/${market.id}`} key={market.id}>
          <img
            src={`${DEVELOPMENT_URL}/files/${market.avatar}`}
            alt="Supermercado"
          />
          <h2>{market.name}</h2>
        </Content>
      ))}
    </Container>
  );
};

export default Markets;
