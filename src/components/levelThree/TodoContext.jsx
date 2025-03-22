// /* eslint-disable react/prop-types */
// import { createContext, useContext, useState } from "react";

// const TodoContext = createContext([]);

// export const useTodo = () => {
//   const todoContext = useContext(TodoContext);
//   return todoContext;
// };

// export const TodoContextProvider = (props) => {
//   const [todos, setTodos] = useState([
//     { title: "one" },
//     { title: "two" },
//     { title: "three" },
//   ]);

//   const addTodo = (todo) => {
//     setTodos(...todos, todo);
//   };
//   const updateTodo = (todo) => {
//     todos.map((todoItem) =>
//       todoItem == todo
//         ? setTodos(...todo, (todoItem = todo))
//         : setTodos(...todoItem)
//     );
//   };

//   const doneTodo = (todo) => {
//     setTodos(todos.filter((todoItem) => todoItem != todo));
//   };

//   return (
//     <TodoContext.Provider
//       value={{
//         todos,
//         addTodo,
//         updateTodo,
//         doneTodo,
//       }}
//     >
//       {props.children}
//     </TodoContext.Provider>
//   );
// };

/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const TodoContext = createContext([]);

export const useTodo = () => {
  const todoContext = useContext(TodoContext);
  return todoContext;
};

export const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { index: 1, title: "one", isDone: false },
    { index: 2, title: "two", isDone: false },
  ]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todoItem) =>
        todoItem.index === updatedTodo.index ? updatedTodo : todoItem
      )
    );
    console.log("Updated", todos);
  };

  const doneTodo = (todoToDone) => {
    setTodos((prevTodos) =>
      prevTodos.map((todoItem) =>
        todoItem.index === todoToDone.index
          ? { ...todoItem, isDone: true }
          : todoItem
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        doneTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
