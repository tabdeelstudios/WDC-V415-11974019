import { useEffect, useState } from "react";
import IndividualUser from "./IndividualUser";
import "./AllUsers.css";

function AllUsers() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);

  return (
    <>
      <section id="allUsers">
        {allUsers.map((user) => (
          <IndividualUser id={user.id} name={user.name} email={user.email} />
        ))}
      </section>
    </>
  );
}

export default AllUsers;
