import Question from "../Question";
import { StarRatingOptimzed } from "./StarRating";
import TicTakToe from "./TicTakToe";
import UseStatePollyfill from "./UseStatePollyfill";

const LevelFour = () => {
  return (
    <div>
      <Question>Implement Star Rating functionality</Question>
      <StarRatingOptimzed />
      <Question>Create a simple Tic-Tac-Toe game in React/JavaScript.</Question>
      <TicTakToe />
      <Question>Create a custom useState hook using React useReducer.</Question>
      <UseStatePollyfill />
    </div>
  );
};

export default LevelFour;
