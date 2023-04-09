import { Link } from "react-router-dom";

function IndividualUser(props) {
  return (
    <div id={props.id} className="individual-user">
      <h2>Name : {props.name}</h2>
      <h3>Email : {props.email}</h3>
      <Link to={"/users/" + props.id}>
        <button>View details</button>
      </Link>
    </div>
  );
}

export default IndividualUser;
