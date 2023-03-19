import axios from "axios";
import React from "react";

class AllSubscribers extends React.Component {
  constructor() {
    super();
    this.state = {
      subscribers: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://crudcrud.com/api/ba0e46de9df844caac7493fa3055b82c/subscribers"
      )
      .then((res) => {
        this.setState({ subscribers: res.data });
      });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>S No</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {this.state.subscribers
            ? this.state.subscribers.map((subscriber, i) => (
                <tr>
                  <td>{++i}</td>
                  <td>{subscriber.username}</td>
                  <td>{subscriber.useremail}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    );
  }
}

export default AllSubscribers;
