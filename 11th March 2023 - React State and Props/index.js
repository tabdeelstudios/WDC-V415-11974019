import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";
import Stats from "./components/Stats";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Stats />
    <Counter />
    <CounterClass />
  </>
);
