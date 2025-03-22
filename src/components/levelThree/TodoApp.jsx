import { useState } from "react";
import { useTodo } from "./TodoContext";

const TodoApp = () => {
  const { todos, addTodo, updateTodo, doneTodo } = useTodo();
  const [newTodo, setNewTodo] = useState("");
  const [updateIndex, setUpdateIndex] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      if (updateIndex !== null) {
        updateTodo({
          index: updateIndex,
          title: newTodo,
        });
        setUpdateIndex(null);
      } else {
        const newIndex = todos.length + 1; // Get the next index based on the length of the todos array
        addTodo({
          index: newIndex,
          title: newTodo,
        });
      }
      setNewTodo("");
    }
  };

  const handleUpdateClick = (todo) => {
    setNewTodo(todo.title);
    setUpdateIndex(todo.index);
  };

  return (
    <>
      <div>Todo App:</div>
      <input
        placeholder="Enter Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>
        {updateIndex !== null ? "Update Todo" : "Add Todo"}
      </button>

      <ol>
        {todos &&
          todos.map((todo) => (
            <li key={todo.index}>
              <strong>ID :</strong>
              {todo.index} ---
              {!todo.isDone && (
                <span>
                  <strong>Title :</strong> {todo.title}{" "}
                </span>
              )}
              {todo.isDone && (
                <span>
                  <strong>Title :</strong> <s>{todo.title} </s>
                </span>
              )}
              {todo.isDone ? (
                <>
                  <button disabled onClick={() => doneTodo(todo)}>
                    Done
                  </button>

                  <button disabled onClick={() => handleUpdateClick(todo)}>
                    Update
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => doneTodo(todo)}>Done</button>
                  <button onClick={() => handleUpdateClick(todo)}>
                    Update
                  </button>
                </>
              )}
            </li>
          ))}
      </ol>
    </>
  );
};

export default TodoApp;
