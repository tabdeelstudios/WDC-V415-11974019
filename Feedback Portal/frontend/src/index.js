import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCourses from "./components/AllCourses";
import IndividualCourse from "./components/IndividualCourse";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginStudent from "./components/LoginStudent";
import SignupStudent from "./components/SignupStudent";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <>
  //   <button
  //     onClick={() =>
  //       (document.cookie =
  //         "useremail" +
  //         "=" +
  //         "john@123.com" +
  //         ";" +
  //         "expires=" +
  //         new Date(Date.now() + 900000))
  //     }
  //   >
  //     Save Cookie
  //   </button>
  //   <button onClick={() => console.log(decodeURIComponent(document.cookie))}>
  //     Get Cookie
  //   </button>
  //   <button onClick={() => localStorage.setItem("useremail", "john@123.com")}>
  //     Save Data
  //   </button>
  //   <button onClick={() => console.log(localStorage.getItem("useremail"))}>
  //     Fetch Data
  //   </button>
  // </>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllCourses />} />
        <Route path="/login" element={<LoginStudent />} />
        <Route path="/signup" element={<SignupStudent />} />
        <Route path="/course/:id" element={<IndividualCourse />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// 1. Course List
// 2. Individual Course Page
// 3. Write a feedback Form
// 4. Submission Form
