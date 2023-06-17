import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Team from "./components/home/Team";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Team />} />
      <Route path="/login" element={<h2>Login form</h2>} />
    </Routes>
  </BrowserRouter>
);
