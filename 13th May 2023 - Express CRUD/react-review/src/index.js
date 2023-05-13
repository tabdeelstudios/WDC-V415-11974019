import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllReviews from "./components/AllReviews";
import IndividualReview from "./components/IndividualReview";
import UpdateReview from "./components/UpdateReview";
import AddReview from "./components/AddReview";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllReviews />} />
        <Route path="/add" element={<AddReview />} />
        <Route path="/update/:id" element={<UpdateReview />} />
        <Route path="/:id" element={<IndividualReview />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
