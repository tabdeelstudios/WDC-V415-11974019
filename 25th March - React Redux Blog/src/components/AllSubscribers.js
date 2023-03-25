import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    subscribers: state,
  };
};

const AllSubscribers = (props) => {
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
        {props.subscribers.length > 0 &&
          props.subscribers.map((subscriber, i) => (
            <tr>
              <td>{++i}</td>
              <td>{subscriber.username}</td>
              <td>{subscriber.useremail}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default connect(mapStateToProps, null)(AllSubscribers);
