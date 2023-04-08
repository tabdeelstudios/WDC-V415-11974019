import Button from "./Button";
import Panel from "./Panel";
import AuthContext from "../AuthContext";
import { useContext } from "react";

function Form() {
  const isLoggedIn = useContext(AuthContext);
  return (
    <>
      {!isLoggedIn ? (
        <Panel title="Welcome">
          <Button>Sign Up</Button>
          <Button>Login</Button>
        </Panel>
      ) : (
        <h1>You are already logged in</h1>
      )}
    </>
  );
}

export default Form;
