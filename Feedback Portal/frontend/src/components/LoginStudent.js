import axios from "axios";
import { useState } from "react";

const LoginStudent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userMessage, setUserMessage] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post("http://localhost:3001/login", {
              username: username,
              password: password,
            })
            .then((res) =>
              res.data.success === true
                ? (window.location.href = "/")
                : setUserMessage(res.data.message)
            );
        }}
      >
        <input
          type="username"
          placeholder="Name"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="Login" />
      </form>
      <p>{userMessage}</p>
    </>
  );
};

export default LoginStudent;
