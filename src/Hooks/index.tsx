import React from "react";
import { AuthProvider } from "./AuthContext";
import { ToastProvider } from "./ToastContext";
import { CartProvider } from "./CartContext";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <CartProvider>
      <ToastProvider>{children}</ToastProvider>
    </CartProvider>
  </AuthProvider>
);

export default AppProvider;
