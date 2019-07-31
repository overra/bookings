import React from "react";
import { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout";
import Bookings from "./components/Bookings";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #d8d8d8;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Bookings />
      </Layout>
    </>
  );
}

export default App;
