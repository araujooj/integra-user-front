import React, { createContext, useCallback, useContext, useState } from "react";
import { CustomerApi } from "../Services/api";

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: {
    id: string;
    avatar: string;
    city: string;
    email: string;
    name: string;
  };
}

interface AuthContextData {
  user: {
    id: string;
    avatar: string;
    city: string;
    email: string;
    name: string;
  };
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@IntegraMarket:token");
    const user = localStorage.getItem("@IntegraMarket:user");
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await CustomerApi.post("/sessions", {
      email,
      password,
    });
    const { token, user } = response.data;
    localStorage.setItem("@IntegraMarket:token", token);
    localStorage.setItem("@IntegraMarket:user", JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@IntegraMarket:token");
    localStorage.removeItem("@IntegraMarket:user");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
