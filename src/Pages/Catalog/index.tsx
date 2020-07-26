import React, { useState, useCallback, useEffect } from "react";
import Loader from "react-loader-spinner";
import { useRouteMatch, Link } from "react-router-dom";
import { MarketApi, DEVELOPMENT_URL } from "../../Services/api";
import { FiChevronRight, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../Hooks/CartContext";
import formatValue from "../../Utils/formatValue";
import GridPlaceholder from "../../Components/GridPlaceholder";
import {
  Container,
  Form,
  CategoryBtn,
  CategoryContainer,
  ProductList,
} from "./styles";

interface Category {
  id: string;
  title: string;
}

interface CategoryParams {
  marketid: string;
}

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  priceFormatted: number;
}

const Catalog: React.FC = () => {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);
  const { params } = useRouteMatch<CategoryParams>();
  const [category, setCategory] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  function handleAddToCart(item: Product): void {
    addToCart(item);
  }

  useEffect(() => {
    async function loadProducts() {
      MarketApi.get(`category/public/${params.marketid}`).then((response) =>
        setCategory(response.data)
      );
      const response = await MarketApi.get(
        `products/public/${params.marketid}`
      );

      const data = response.data.map((product: Product) => ({
        ...product,
        priceFormatted: formatValue(product.price),
      }));

      setLoading(false);
      setProducts(data);
    }
    loadProducts();
  }, []);
  return (
    <>
      <Container>
        <Form onSubmit={() => {}}>
          <input
            name="product"
            value=""
            onChange={() => {}}
            placeholder="Digite o nome de algum produto..."
          />
        </Form>
      </Container>
      <CategoryContainer>
        {category.map((category) => (
          <CategoryBtn key={category.id}>
            <Link to="/category">
              <div>
                <span> {category.title} </span>
              </div>
              <FiChevronRight size={20} />
            </Link>
          </CategoryBtn>
        ))}
      </CategoryContainer>
      <ProductList>
        {loading ? (
          <GridPlaceholder repeatCount={6} />
        ) : (
          products.map((product) => (
            <li key={product.id}>
              <figure>
                <img
                  src={`${DEVELOPMENT_URL}/files/${product.image}`}
                  alt={product.name}
                />
              </figure>
              <strong>{product.name}</strong>

              <div>
                <span>{product.priceFormatted}</span>

                <button type="button" onClick={() => addToCart(product)}>
                  {loading ? (
                    <Loader type="Oval" color="#FFF" height={16} width={24} />
                  ) : (
                    <div>
                      <FiShoppingCart size={16} color="#FFF" />
                    </div>
                  )}

                  <span>Adicionar ao carrinho</span>
                </button>
              </div>
            </li>
          ))
        )}
      </ProductList>
    </>
  );
};

export default Catalog;
