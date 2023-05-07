// Make a form which reads task title from the user
import axios from "axios";
import { useState } from "react";

const AddTaskForm = () => {
  const [taskTitle, setTaskTitle] = useState();
  const [responseData, setResponseData] = useState();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post("http://localhost:3000/addTask", { title: taskTitle })
            .then((response) => setResponseData(response.data.message));
        }}
      >
        <input
          type="text"
          id="taskTitle"
          name="taskTitle"
          placeholder="Enter title"
          value={taskTitle}
          onChange={(e) => {
            setTaskTitle(e.target.value);
          }}
        />
        <input type="submit" value="Add Task" />
      </form>
      <p>{responseData}</p>
    </div>
  );
};

export default AddTaskForm;
