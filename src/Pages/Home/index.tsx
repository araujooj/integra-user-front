import React from "react";
import DeliveryIllustration from "../../Assets/delivery.svg";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import { Container, Content, ProfileImage } from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <h2> Faça suas compras de qualquer lugar! </h2>
          <span>
            Valorize seu tempo agora, comprando através de um delivery ou
            retirada no supermercado, de forma fácil e rápida.
          </span>
          <Link to="/markets">
            <Button> Quero ir as compras! </Button>
          </Link>
        </Content>
        <ProfileImage>
          <img src={DeliveryIllustration} alt="Imagem de perfil"></img>
        </ProfileImage>
      </Container>
    </>
  );
};

export default Home;
