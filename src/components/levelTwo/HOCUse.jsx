import ConsoleHOC from "./ConsoleHOC";
import { useTheme } from "./ThemeContext";

const HOCUse = () => {
  const themeState = useTheme();
  return (
    <>
      <div
        style={{
          background: themeState.isLightTheme ? "#fff" : "#333",
          color: themeState.isLightTheme ? "#000" : "#fff",
        }}
      >
        Current Theme: {themeState.isLightTheme ? "Light" : "Dark"}
      </div>
      <div>See Console</div>
    </>
  );
};

export const HOCUseComp = ConsoleHOC(HOCUse);
