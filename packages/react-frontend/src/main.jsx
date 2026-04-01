// src/main.jsx
import React from "react";
import ReactDOMClient from "react-dom/client";
import MyApp from "./App";
import "./index.css";

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

// Initial render:
root.render(<MyApp />);