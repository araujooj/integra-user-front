import React from "react";
import { FaFileImport, FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import { Container } from "./styles";

const Header: React.FC = () => (
  <Container>
    <header>
      <img src={Logo} alt="Integra" />
      <nav>
        <Link to="/">Entrar</Link>
        <Link to="/import">Criar minha conta</Link>
      </nav>
    </header>
  </Container>
);

export default Header;
