import { useState } from "react";
import withHRAfter from "../HOC/withHRAfter";

const ToggleTextButton = () => {
  const [buttonContent, setButtonContent] = useState("OFF");
  const toggleTEXT = () => {
    buttonContent == "ON" ? setButtonContent("OFF") : setButtonContent("ON");
  };
  return (
    <div>
      <button id="buttonOnOff" onClick={toggleTEXT}>{buttonContent}</button>
    </div>
  );
};

export const WithHRToggleTextButton = withHRAfter(ToggleTextButton);
