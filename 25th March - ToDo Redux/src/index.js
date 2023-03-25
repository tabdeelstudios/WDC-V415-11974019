import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AddItem from "./components/AddItem";
import { Provider } from "react-redux";
import store from "./redux/store";
import DisplayToDos from "./components/DisplayToDos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AddItem />
      <DisplayToDos />
    </Provider>
  </React.StrictMode>
);
