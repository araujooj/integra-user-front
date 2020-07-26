import React, { useMemo } from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import Button from "../Button";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import { Container } from "./styles";
import { useCart } from "../../Hooks/CartContext";

const Header: React.FC = () => {
  const { products } = useCart();

  const totalItensInCart = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      accumulator += product.quantity;
      return accumulator;
    }, 0);

    return total;
  }, [products]);
  return (
    <Container>
      <header>
        <Link to="/">
          <img src={Logo} alt="Integra" />
        </Link>
        <nav>
          <Link to="/signin">
            <FiUser /> Gabriel Araújo
          </Link>
          <Link to="/cart">
            <FiShoppingCart />
            Carrinho ({totalItensInCart})
          </Link>
          {/* <Link to="/signin">Entrar</Link>
        <Link to="/signup">
          <Button>Criar minha conta </Button>
        </Link> */}
        </nav>
      </header>
    </Container>
  );
};

export default Header;
