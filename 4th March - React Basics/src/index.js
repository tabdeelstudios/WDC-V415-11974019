import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <Header />
  </>
);
