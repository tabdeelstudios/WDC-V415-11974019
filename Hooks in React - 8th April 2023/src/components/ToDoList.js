import { useState } from "react";

function ToDoList() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  return (
    <>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button
        onClick={() => {
          //   console.log(list);
          //   console.log(typeof list);
          //   setList(list.push(item));
          //   console.log(list);
          setList([...list, item]);
          setItem("");
        }}
      >
        Add item
      </button>
      <hr />
      {list.map((i) => (
        <p>{i}</p>
      ))}
    </>
  );
}

export default ToDoList;
