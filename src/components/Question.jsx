import { useTheme } from "./levelTwo/ThemeContext";

/* eslint-disable react/prop-types */
const Question = ({ children }) => {
  const themeState = useTheme();
  return (
    <div
      style={{
        background: themeState.isLightTheme ? "#fff" : "#000",
        color: themeState.isLightTheme ? "#000" : "#fff",
      }}
      className="question-container"
    >
      Q. {children}
    </div>
  );
};

export default Question;
