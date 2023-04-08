import Button from "./Button";
import Panel from "./Panel";
import AuthContext from "../AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Form() {
  const isLoggedIn = useContext(AuthContext);
  return (
    <>
      {!isLoggedIn ? (
        <Panel title="Welcome">
          <Button>Sign Up</Button>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </Panel>
      ) : (
        <Panel>
          <Link to="/profile/12345">
            <Button>Profile</Button>
          </Link>
          <Link to="/counter">
            <Button>Counter</Button>
          </Link>
        </Panel>
      )}
    </>
  );
}

export default Form;
