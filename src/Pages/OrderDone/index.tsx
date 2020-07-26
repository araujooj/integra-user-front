import React from "react";
import { uuid } from "uuidv4";
import Thanks from "../../Assets/thanks.svg";
import { Container, StartShopping } from "./styles";

const OrderDone: React.FC = () => {
  const id = uuid();
  return (
    <Container>
      <div>
        <img src={Thanks} alt="Obrigado" />
        <h2>Obrigado!</h2>
        <p>Acompanhe seu pedido em</p>
        <StartShopping to="/markets">www.integra.app.br/{id}</StartShopping>
      </div>
    </Container>
  );
};

export default OrderDone;
