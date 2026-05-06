import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>📝 Todo App</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
        style={{ padding: "8px", width: "250px" }}
      />
      <button
        onClick={addTodo}
        style={{ padding: "8px", marginLeft: "10px" }}
      >
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginTop: "10px" }}>
            {todo}
            <button
              onClick={() => deleteTodo(index)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;