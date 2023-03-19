import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import PostPage from "./pages/PostPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="/blog" element={<BlogPage currentUser="dummyuser" />} />
    </Routes>
  </BrowserRouter>
);

/* <Link to="/">
     <img src={Logo} />
   </Link> */
