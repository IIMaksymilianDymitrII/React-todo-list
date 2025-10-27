import { useState } from "react";
import "./App.css";

function TodoList({ toDos, setTodos }) {
  const [completed, setCompleted] = useState({});

  const handleTaskCompleted = (todo) => {
    setCompleted((prev) => ({
      ...prev,
      [todo]: !prev[todo],
    }));
  };

  const removeTask = (todo) => {
    setTodos(toDos.filter((task) => task !== todo)); // use setTodos
    setCompleted((prev) => {
      const copy = { ...prev };
      delete copy[todo];
      return copy;
    });
  };

  return (
    <div id="todos-section">
      {toDos.map((todo) => (
        <div key={todo} style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
          <button onClick={() => handleTaskCompleted(todo)} style={{ marginRight: "5px" }}>
            {completed[todo] ? "🔴" : "🟢"}
          </button>
          {completed[todo] ? <del style={{ flex: 1 }}>{todo}</del> : <span style={{ flex: 1 }}>{todo}</span>}
          <button onClick={() => removeTask(todo)} style={{ marginLeft: "5px" }}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

