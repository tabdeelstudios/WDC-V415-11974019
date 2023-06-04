import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeUser } from "../redux/userSlice";

const LoginStudent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const dispatch = useDispatch();
  const checkLoggedIn = useSelector((state) => state.users.userData);

  if (checkLoggedIn) {
    return (window.location.href = "/");
  } else {
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
              .then((res) => {
                if (res.data.success === true) {
                  dispatch(storeUser({ username: username }));
                  window.location.href = "/";
                } else {
                  setUserMessage(res.data.message);
                }
              });
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
  }
};

export default LoginStudent;
