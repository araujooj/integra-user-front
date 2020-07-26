import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./Hooks";
import Routes from "./Routes/";
import GlobalStyle from "./Styles/global";
import Header from "./Components/Header";

const App: React.FC = () => (
  <>
    <AppProvider>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
