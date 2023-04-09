import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/reducers/userReducer";
import IndividualUser from "./IndividualUser";
import "./AllUsers.css";

function FetchUsers() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  let content;
  if (loading === "pending") {
    content = <h1>Loading...</h1>;
  }

  if (loading === "idle") {
    content = data.map((user) => (
      <IndividualUser id={user.id} name={user.name} email={user.email} />
    ));
  }

  if (error != null) {
    content = <h1>{error}</h1>;
  }

  return <div id="allUsers">{content}</div>;
}

export default FetchUsers;
