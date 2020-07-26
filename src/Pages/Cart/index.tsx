import React, { useMemo, useCallback } from "react";
import formatValue from "../../Utils/formatValue";
import { useCart } from "../../Hooks/CartContext";
import { useToast } from "../../Hooks/ToastContext";
import Sad from "../../Assets/sad.svg";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdRemoveShoppingCart,
} from "react-icons/md";

import {
  Container,
  ProductTable,
  Total,
  EmptyCart,
  StartShopping,
} from "./styles";
import { DEVELOPMENT_URL, CustomerApi } from "../../Services/api";
import { useHistory } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  priceFormatted: number;
}

const Cart: React.FC = () => {
  const { increment, decrement, products, removeFromCart } = useCart();
  const { addToast } = useToast();
  const history = useHistory();

  const cartTotal = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      accumulator += product.price * product.quantity;
      return accumulator;
    }, 0);

    return formatValue(total);
  }, [products]);

  const totalItensInCart = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      accumulator += product.quantity;
      return accumulator;
    }, 0);

    return total;
  }, [products]);

  const sendOrder = useCallback(async () => {
    try {
      await CustomerApi.post("/orders", {
        username: "Gabriel Araújo",
        address: "Rua Jacarezinho 2620",
        products,
        totalItens: totalItensInCart,
        subtotal: cartTotal,
        withdrawl: false,
      });
      addToast({
        type: "success",
        title: "Pedido feito com sucesso",
        description:
          "Pedido realizado com sucesso! Cheque as atualizações em sua página pessoal",
      });

      history.push("/order-done");
    } catch {
      addToast({
        type: "error",
        title: "Erro ao fazer pedido",
        description: "Ocorreu um erro ao fazer o pedido, tente novamente",
      });
    }
  }, [products]);
  return (
    <Container>
      {totalItensInCart === 0 ? (
        <EmptyCart>
          <MdRemoveShoppingCart />

          <div>
            <img src={Sad} alt="Sad face" />
            <h2>Oops...</h2>
            <p>Parece que seu carrinho esta vazio!</p>
            <StartShopping to="/markets">Ir as compras</StartShopping>
          </div>
        </EmptyCart>
      ) : (
        <>
          <ProductTable>
            <thead>
              <tr>
                <th />
                <th>PRODUTOS</th>
                <th>QUANTIDADE</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: Product) => (
                <tr key={product.id}>
                  <td>
                    <figure>
                      <img
                        src={`${DEVELOPMENT_URL}/files/${product.image}`}
                        alt={product.name}
                      />
                    </figure>
                  </td>
                  <td>
                    <strong>{product.name}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>
                  <td>
                    <div>
                      <button
                        type="button"
                        onClick={() => decrement(product.id)}
                      >
                        <MdRemoveCircleOutline size={20} color="#ff4d29" />
                      </button>
                      <input type="text" readOnly value={product.quantity} />
                      <button
                        type="button"
                        onClick={() => increment(product.id)}
                      >
                        <MdAddCircleOutline size={20} color="#ff4d29" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>
                      {formatValue(product.price * product.quantity)}
                    </strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        removeFromCart(product.id);
                      }}
                    >
                      <MdDelete size={20} color="#ff4d29" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>

          <footer>
            <button type="submit" onClick={() => sendOrder()}>
              Confirmar o pedido
            </button>

            <span>
              Forma de pagamento - Dinheiro<FiChevronDown></FiChevronDown>
            </span>

            <Total>
              <span>TOTAL:</span>
              <strong>{cartTotal}</strong>
            </Total>
          </footer>
        </>
      )}
    </Container>
  );
};

export default Cart;
