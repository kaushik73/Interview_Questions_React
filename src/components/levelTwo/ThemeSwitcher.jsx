import { useTheme } from "./ThemeContext";

const ThemeSwitcher = () => {
  const themeState = useTheme();
  <div>ThemeSwitcher</div>;
  return (
    <>
      Selected Theme : {themeState.isLightTheme ? "Light" : "Dark"}{" "}
      <button
        onClick={() => themeState.setIsLightTheme(!themeState.isLightTheme)}
      >
        Switch to {themeState.isLightTheme ? "Dark" : "Light"}{" "}
      </button>
    </>
  );
};

export default ThemeSwitcher;
