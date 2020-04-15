import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from "styled-components";

import Dashboard from "./pages/Doashboard";

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Dashboard />
  </>
);
ReactDOM.render(<App />, document.getElementById('app'));
