import { useState, useEffect } from "react";
import axios from "axios";

const AllTasks = () => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/allTasks/")
      .then((response) => setTasks(response.data.allTasks));
  }, []);
  return (
    <ul>
      {tasks &&
        tasks.map((task) => (
          <li id={task.id}>
            {task.title} {task.status}
          </li>
        ))}
    </ul>
  );
};

export default AllTasks;
