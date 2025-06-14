import Question from "../Question";
import CounterApp from "./CounterApp";
import DebounceFetch from "./DebounceFetch";
import DebounceFetchPractice from "./DebounceFetchPractice";
import { HOCUseComp } from "./HOCUse";
import ParentData from "./ParentData";
import ReRenderParent from "./ReRenderParent";
import ThemeSwitcher from "./ThemeSwitcher";
import USEuseFetchHook from "./USEuseFetchHook";

const LevelTwo = () => {
  return (
    <>
      <Question>
        Create a search input that fetches results from an API. Implement
        debouncing to limit the number of API calls as the user types.
      </Question>
      <DebounceFetchPractice />
      <Question>
        Create a Higher-Order Component (HOC) that logs props and wraps a given
        component.
      </Question>
      <HOCUseComp />
      <Question>
        Create a theme switcher using the Context API that allows toggling
        between light and dark themes.
      </Question>
      <ThemeSwitcher />
      <Question>
        Create a custom hook useFetch that fetches data from an API and returns
        the data, loading state, and error state.
      </Question>
      <USEuseFetchHook />
      <Question>
        Create a parent and child component where the child component only
        re-renders when specific props change. Use React.memo and useCallback to
        achieve this.
      </Question>
      <ReRenderParent />
      <Question>Counter App with start and pause btn</Question>
      <CounterApp />

      <Question>Example: Passing data from child to parent</Question>
      <ParentData />
    </>
  );
};

export default LevelTwo;
