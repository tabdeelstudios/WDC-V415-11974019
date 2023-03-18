import axios from "axios";
import React from "react";

class SubscriptionForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      useremail: "",
      isChecked: false,
      isSubscribed: false,
    };
  }

  readFormData = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state);
  };

  saveSubscriber = (e) => {
    e.preventDefault();
    // post data
    axios
      .post(
        "https://crudcrud.com/api/ba0e46de9df844caac7493fa3055b82c/subscribers",
        this.state
      )
      .then(() => {
        this.setState({ isSubscribed: true });
      });
  };

  render() {
    return (
      <>
        <h3>{this.state.isSubscribed ? "You are now subscribed!" : ""}</h3>
        <form action="#" method="POST" onSubmit={this.saveSubscriber}>
          <div>
            <label htmlFor="username">Name : </label>
            <input
              type="text"
              id="username"
              placeholder="Your name"
              onChange={this.readFormData}
            />
          </div>
          <div>
            <label htmlFor="useremail">Email : </label>
            <input
              type="email"
              id="useremail"
              placeholder="Your email"
              onChange={this.readFormData}
            />
          </div>
          <div>
            <p>
              <input
                type="checkbox"
                onClick={() => {
                  this.setState({ isChecked: true });
                  console.log(this.state);
                }}
              />
              I agree to terms and conditions
            </p>
          </div>
          <input type="submit" value="Subscribe Now" />
        </form>
      </>
    );
  }
}

export default SubscriptionForm;
