import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const DisplayToDos = (props) => {
  return (
    <div>
      <hr />
      <ul>
        {props.todos.length > 0 &&
          props.todos.map((item) => {
            return <li key={item.id}>{item.item}</li>;
          })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, null)(DisplayToDos);
