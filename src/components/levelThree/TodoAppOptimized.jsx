import { useState, useCallback } from "react";

const TodoAppOptimized = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [updateIndex, setUpdateIndex] = useState(null);

  const handleAddTodo = useCallback(() => {
    if (updateIndex !== null) {
      setTodos((prevTodos) =>
        prevTodos.map((todo, index) =>
          index === updateIndex ? { ...todo, title: newTodo } : todo
        )
      );
      setUpdateIndex(null);
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        { index: prevTodos.length, title: newTodo, isDone: false },
      ]);
    }
    setNewTodo("");
  }, [newTodo, updateIndex]);

  const doneTodo = useCallback((todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.index === todo.index ? { ...t, isDone: true } : t
      )
    );
  }, []);

  const handleUpdateClick = useCallback((todo) => {
    setNewTodo(todo.title);
    setUpdateIndex(todo.index);
  }, []);

  return (
    <>
      <div>Todo App Optimized :</div>
      <input
        placeholder="Enter Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>
        {updateIndex !== null ? "Update Todo" : "Add Todo"}
      </button>

      <ol>
        {todos.map((todo) => (
          <li key={todo.index}>
            <strong>ID :</strong> {todo.index} ---
            <span>
              <strong>Title :</strong>{" "}
              {todo.isDone ? <s>{todo.title}</s> : todo.title}
            </span>
            <button onClick={() => doneTodo(todo)} disabled={todo.isDone}>
              Done
            </button>
            <button
              onClick={() => handleUpdateClick(todo)}
              disabled={todo.isDone}
            >
              Update
            </button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default TodoAppOptimized;
