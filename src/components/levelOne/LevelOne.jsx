import { WithHRCounter } from "./Counter";
import { GetAPIDataWithHR } from "./GetAPIData";
import { WithHRControlledForm } from "./ControlledForm";
import { WithHRToggleTextButton } from "./ToggleTextButton";
import { WithHRChildComponent } from "./ChildComponent";
import Question from "../Question";

const questions = [
  {
    text: "Create a simple counter component in React that increments and decrements a value on button clicks.",
    Component: WithHRCounter,
  },
  {
    text: "Create a component that fetches data from an API and displays it. Use the useEffect hook for the API call.",
    Component: GetAPIDataWithHR,
  },
  {
    text: "Create a controlled form component in React that updates its state as the user types.",
    Component: WithHRControlledForm,
  },
  {
    text: "Create a toggle button component that changes its text between ON and OFF on each click.",
    Component: WithHRToggleTextButton,
  },
  {
    text: "Create a parent and a child component where the parent passes data as props to the child component.",
    Component: WithHRChildComponent,
    props: { content: "Hi from Parent To Child" },
  },
];

const LevelOne = () => {
  return (
    <>
      {questions.map(({ text, Component, props = {} }, index) => (
        <div key={index}>
          <Question>{text}</Question>
          <Component {...props} />
        </div>
      ))}
    </>
  );
};

export default LevelOne;
