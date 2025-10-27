import { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["Learn Javascript projects"]);
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e) => setUserInput(e.target.value);

  const addTodo = () => {
    if (userInput.trim() === "") return;
    setTodos([...todos, userInput]);
    setUserInput("");
  };

  return (
    <div id="container">
      <h2>ToDo-List 📝</h2>

      <div id="add-section">
        <input
          placeholder="Add your task"
          value={userInput}
          onChange={handleUserInput}
        />

        <button onClick={addTodo}>Lägg till</button>
      </div>
        <TodoList toDos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
