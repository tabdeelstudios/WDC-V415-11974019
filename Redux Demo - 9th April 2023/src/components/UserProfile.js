import { useEffect, useState } from "react";

function UserProfile(props) {
  const [userData, setUserData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let loaded = true;
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => {
        if (loaded) {
          setUserData(data);
          setIsLoaded(true);
        }
      });
    return () => (loaded = false);
  }, []);

  return (
    <>
      {isLoaded ? (
        <div>
          <h1>User ID : {props.id}</h1>
          <img src={userData.results[0].picture.medium} />
          <h1>{userData.results[0].name.first}</h1>
          <p>{userData.results[0].email}</p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default UserProfile;
