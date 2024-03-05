import { useState } from "react";

export default function Todo() {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Next.js", done: true },
    { id: 2, title: "Learn React", done: true },
    { id: 3, title: "Learn Node.js", done: false },
  ]);

  function handleChange(e) {
    setUserInput(e.target.value);
  }
  function handleSubmit(e) {
    setTodos([...todos, { id: Date.now(), title: userInput, done: false }]);
    setUserInput("");
    e.preventDefault();
  }

  function handleDelete(id) {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
  }

  function handleDone(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: true };
      }
      return todo;
    });

    setTodos(newTodos);
  }

  return (
    <div>
      <h1 className="text-3xl">Todo</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          onChange={handleChange}
          value={userInput}
          placeholder="Add new todo..."
          className="border p-1"
        />
        <button type="submit" className="bg-gray-400 p-1">
          Add
        </button>
      </form>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="border m-1 p-1 flex flex-row gap-2 justify-between"
        >
          <span className={todo.done ? "line-through" : ""}>{todo.title}</span>
          <div className="flex gap-2">
            <button onClick={() => handleDelete(todo.id)} className="">
              Delete
            </button>
            {!todo.done && (
              <button onClick={() => handleDone(todo.id)}>Done</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
