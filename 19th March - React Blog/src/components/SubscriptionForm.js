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
        this.setState({
          isSubscribed: true,
          useremail: "",
          username: "",
          isChecked: false,
        });
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
              value={this.state.username}
              placeholder="Your name"
              onChange={this.readFormData}
            />
          </div>
          <div>
            <label htmlFor="useremail">Email : </label>
            <input
              type="email"
              id="useremail"
              value={this.state.useremail}
              placeholder="Your email"
              onChange={this.readFormData}
            />
          </div>
          <div>
            <p>
              {this.state.isChecked ? (
                <input
                  type="checkbox"
                  checked
                  onClick={() => {
                    this.setState({ isChecked: true });
                    console.log(this.state);
                  }}
                />
              ) : (
                <input
                  type="checkbox"
                  onClick={() => {
                    this.setState({ isChecked: true });
                    console.log(this.state);
                  }}
                />
              )}
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
