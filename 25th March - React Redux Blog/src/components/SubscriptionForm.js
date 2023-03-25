import { useState } from "react";
import { connect } from "react-redux";
import { addSubscribers } from "../redux/reducer";
import AllSubscribers from "./AllSubscribers";

const mapStateToProps = (state) => {
  return {
    subscribers: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSubscriber: (obj) => dispatch(addSubscribers(obj)),
  };
};

const SubscriptionForm = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    useremail: "",
    isChecked: false,
    isSubscribed: false,
  });

  const add = (e) => {
    e.preventDefault();
    props.addSubscriber({
      id: Math.floor(Math.random() * 100),
      username: userData.username,
      useremail: userData.useremail,
      isChecked: userData.isChecked,
      isSubscribed: userData.isSubscribed,
    });
    setUserData({
      username: "",
      useremail: "",
      isChecked: false,
      isSubscribed: false,
    });
  };

  const readFormData = (e) => {
    setUserData({ [e.target.id]: e.target.value });
  };

  // saveSubscriber = (e) => {
  //   e.preventDefault();
  //   // post data
  //   axios
  //     .post(
  //       "https://crudcrud.com/api/ba0e46de9df844caac7493fa3055b82c/subscribers",
  //       this.state
  //     )
  //     .then(() => {
  //       this.setState({
  //         isSubscribed: true,
  //         useremail: "",
  //         username: "",
  //         isChecked: false,
  //       });
  //     });
  // };

  return (
    <>
      <h3>{userData.isSubscribed ? "You are now subscribed!" : ""}</h3>
      <form
        action="#"
        method="POST"
        onSubmit={(e) => {
          add(e);
        }}
      >
        <div>
          <label htmlFor="username">Name : </label>
          <input
            type="text"
            id="username"
            value={userData.username}
            placeholder="Your name"
            onChange={(e) => {
              readFormData(e);
            }}
          />
        </div>
        <div>
          <label htmlFor="useremail">Email : </label>
          <input
            type="email"
            id="useremail"
            value={userData.useremail}
            placeholder="Your email"
            onChange={(e) => {
              readFormData(e);
            }}
          />
        </div>
        <div>
          <p>
            {userData.isChecked ? (
              <input
                type="checkbox"
                checked
                onClick={() => {
                  setUserData({ isChecked: true });
                  console.log(userData.state);
                }}
              />
            ) : (
              <input
                type="checkbox"
                onClick={() => {
                  setUserData({ isChecked: true });
                  console.log(userData.state);
                }}
              />
            )}
            I agree to terms and conditions
          </p>
        </div>
        <input type="submit" value="Subscribe Now" />
      </form>
      <hr />
      <AllSubscribers />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionForm);
