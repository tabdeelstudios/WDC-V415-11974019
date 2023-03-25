import { useState } from "react";
import { connect } from "react-redux";
import { addToDos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (obj) => dispatch(addToDos(obj)),
  };
};

const AddItem = (props) => {
  console.log(props);
  const [toDo, setTodo] = useState("");

  const add = () => {
    if (toDo === "") {
      alert("Input is empty");
    } else {
      props.addToDo({
        id: Math.floor(Math.random() * 100),
        item: toDo,
        completed: false,
      });
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} value={toDo} />
      <button onClick={() => add()}>Add Item</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
