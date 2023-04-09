import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const [allUsers, setAllUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
      });
  }, []);

  return (
    <>
      {allUsers
        .filter((user) => user.id == id)
        .map((filteredUser) => (
          <ul id={filteredUser.id}>
            <li>Name : {filteredUser.name}</li>
            <li>Email : {filteredUser.email}</li>
            <li>Username : {filteredUser.username}</li>
            <li>City : {filteredUser.address.city}</li>
            <li>Phone : {filteredUser.phone}</li>
          </ul>
        ))}
    </>
  );
}

export default UserDetails;
