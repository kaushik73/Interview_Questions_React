/*
useReducer takes two or three arguments:
reducer: A pure function that defines how the state changes in response to actions. It takes the current state and an action as arguments and returns the new state.
initialState: The initial value of the state.

It returns an array containing:
state: The current state value.
dispatch: A function used to dispatch actions to the reducer.
*/
import { useReducer } from "react";

function UseStatePollyfill(initialValue) {
  const [state, dispatch] = useReducer(
    (prevState, newState) => newState,
    initialValue
  );

  function setState(newValue) {
    let updatedValue;
    if (typeof newValue === "function") {
      //callback is being passed in state updater functioon
      updatedValue = newValue(state);
    } else {
      updatedValue = newValue;
    }

    const isStateValueUpdated = !Object.is(state, updatedValue);
    if (isStateValueUpdated) {
      dispatch(updatedValue);
    }
  }

  return [state, setState];
}

export default UseStatePollyfill;
