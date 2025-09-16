import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from "styled-components";
import { createRoot } from 'react-dom/client';

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

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
