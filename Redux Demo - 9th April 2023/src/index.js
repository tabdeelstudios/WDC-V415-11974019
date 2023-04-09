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
import AllUsers from "./components/AllUsers";
import UserDetails from "./components/UserDetails";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import FetchUsers from "./components/FetchUsers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <Login /> */}
    {/* <ToDoList /> */}
    {/* <UserProfile /> */}
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/fetch" element={<FetchUsers />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
