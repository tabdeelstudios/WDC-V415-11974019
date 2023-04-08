import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Counter from "./components/Counter";
// import Login from "./components/Login";
// import ToDoList from "./components/ToDoList";
// import UserProfile from "./components/UserProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import ProfilePage from "./components/pages/ProfilePage";
import CounterPage from "./components/pages/CounterPage";
import LoginPage from "./components/pages/LoginPage";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <Login /> */}
    {/* <ToDoList /> */}
    {/* <UserProfile /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
