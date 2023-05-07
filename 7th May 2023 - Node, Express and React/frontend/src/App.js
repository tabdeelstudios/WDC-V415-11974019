// npm install axios

import { useState, useEffect } from "react";
import axios from "axios";

// Display 5 tasks from the backend as a list on the frontend

function App() {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/tasks/")
      .then((response) => setTasks(response.data.tasks));
  }, []);
  return (
    <ul>
      {tasks.map((task) => (
        <li id={task.id}>
          {task.title} {task.status}
        </li>
      ))}
    </ul>
  );
}

export default App;
