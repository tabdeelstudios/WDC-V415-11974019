import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Team from "./components/home/Team";
import { store } from "./redux/store";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Team />} />
        <Route path="/login" element={<h2>Login form</h2>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
