import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  priceFormatted: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, "quantity">): void;
  increment(id: string): void;
  decrement(id: string): void;
  removeFromCart(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = localStorage.getItem("@Integra:cart");

      if (response) {
        setProducts([...JSON.parse(response)]);
      }
    }

    loadProducts();
  }, []);

  const increment = useCallback(
    async (id) => {
      const filterProducts = products.filter((product) => product.id !== id);

      const newProduct = products.find((product) => product.id === id);

      if (newProduct) {
        newProduct.quantity += 1;

        setProducts([...filterProducts, newProduct]);
      }

      localStorage.setItem("@Integra:cart", JSON.stringify(products));
    },
    [products]
  );

  const addToCart = useCallback(
    async (product) => {
      const productIndex = products.findIndex((p) => p.id === product.id);

      if (productIndex < 0) {
        setProducts((oldState) => [...oldState, { ...product, quantity: 1 }]);
        localStorage.setItem(
          "@GoMarkeplace:cart",
          JSON.stringify([...products, { ...product, quantity: 1 }])
        );
      } else {
        increment(product.id);
      }
    },
    [products, increment]
  );

  const decrement = useCallback(
    async (id) => {
      const filterProducts = products.filter((product) => product.id !== id);

      const newProduct = products.find((product) => product.id === id);

      if (newProduct) {
        if (newProduct.quantity <= 1) {
          setProducts([...filterProducts]);
        } else {
          newProduct.quantity -= 1;

          setProducts([...filterProducts, newProduct]);
        }
      }

      localStorage.setItem("@Integra:cart", JSON.stringify(products));
    },
    [products]
  );

  const removeFromCart = useCallback(
    async (id) => {
      const filterProducts = products.filter((product) => product.id !== id);

      const product = products.find((product) => product.id === id);

      if (product) {
        if (product.quantity <= 1) {
          setProducts([...filterProducts]);
        } else {
          product.quantity -= product.quantity;

          setProducts([...filterProducts, product]);
        }
      }

      localStorage.setItem("@Integra:cart", JSON.stringify(products));
    },
    [products]
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products, removeFromCart }),
    [products, addToCart, increment, decrement, removeFromCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
