import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <Router>
      <Layout>
        <App />
      </Layout>
    </Router>
  </AppProvider>
);
