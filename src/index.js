import React from 'react';
import ReactDOM from 'react-dom';

import Chat from "./pages/Chat";
import Dashboard from "./pages/Doashboard";

const App = () => <Dashboard />;
ReactDOM.render(<App />, document.getElementById('app'));
