import { connect } from "react-redux";
import { completedToDos } from "../redux/reducer";
import "./DisplayToDos.css";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    completedToDo: (obj) => dispatch(completedToDos(obj)),
  };
};

const DisplayToDos = (props) => {
  const markComplete = (id) => {
    props.completedToDo({ id });
    console.log(props);
  };

  return (
    <div>
      <hr />
      <ul>
        {props.todos.length > 0 &&
          props.todos.map((item) => {
            return (
              <li key={item.id} className={item.completed ? "completed" : ""}>
                {item.item}
                <input
                  type="checkbox"
                  id={item.id}
                  onClick={(e) => {
                    markComplete(e.target.id);
                  }}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayToDos);
