import Question from "../Question";
import StarRating, { StarRatingOptimzed } from "./StarRating";
import TicTakToe from "./TicTakToe";

const LevelFour = () => {
  return (
    <div>
      <Question>Implement Star Rating functionality</Question>
      <StarRatingOptimzed />
      <Question>Create a simple Tic-Tac-Toe game in React/JavaScript.</Question>
      <TicTakToe />
    </div>
  );
};

export default LevelFour;
