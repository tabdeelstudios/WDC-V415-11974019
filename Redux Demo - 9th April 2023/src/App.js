import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Button from "./components/Button";
import ThemeContext from "./ThemeContext";
import AuthContext from "./AuthContext";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AuthContext.Provider value={isLoggedIn}>
        <ThemeContext.Provider value={theme}>
          <Form />
        </ThemeContext.Provider>
      </AuthContext.Provider>
      <Button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Toggle theme
      </Button>
      <Button
        onClick={() => {
          setIsLoggedIn(isLoggedIn === true ? false : true);
        }}
      >
        Toggle Login
      </Button>
    </>
  );
}
