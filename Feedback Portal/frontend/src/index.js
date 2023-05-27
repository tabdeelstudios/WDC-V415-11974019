import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCourses from "./components/AllCourses";
import IndividualCourse from "./components/IndividualCourse";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AllCourses />} />
      <Route path="/course/:id" element={<IndividualCourse />} />
    </Routes>
  </BrowserRouter>
);

// 1. Course List
// 2. Individual Course Page
// 3. Write a feedback Form
// 4. Submission Form
