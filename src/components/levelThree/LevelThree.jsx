import Question from "../Question";
import InfiniteScroll from "./InfiniteScroll";
import TodoApp from "./TodoApp";
import TodoAppOptimized from "./TodoAppOptimized";
import UseuseLocalStorHook from "./UseuseLocalStorHook";

const LevelThree = () => {
  return (
    <div>
      <Question>
        Create a custom hook that syncs a state variable with local storage.
      </Question>
      <UseuseLocalStorHook />
      <Question>
        Create a simple Todo list application using React Context API to manage
        the state.
      </Question>
      <TodoApp />
      <TodoAppOptimized />
      <Question>
        Create a component that fetches and displays data with infinite
        scrolling.
      </Question>
      <InfiniteScroll />{" "}
    </div>
  );
};

export default LevelThree;
