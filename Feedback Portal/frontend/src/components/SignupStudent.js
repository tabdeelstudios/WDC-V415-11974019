import axios from "axios";
import { useState } from "react";

const SignupStudent = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userMessage, setUserMessage] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        axios
          .post("http://localhost:3001/register", {
            username: username,
            email: email,
            password: password,
          })
          .then((res) =>
            res.data.success === true
              ? (window.location.href = "/login")
              : setUserMessage(res.data.message)
          );
      }}
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
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
      <input type="submit" value="Signup" />
      <p>{userMessage}</p>
    </form>
  );
};

export default SignupStudent;
