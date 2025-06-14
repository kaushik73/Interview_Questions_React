import React from "react";

// eslint-disable-next-line react/prop-types
const ChildData = ({ onSend }) => {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <>
      <div>ChildData</div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        onClick={() => {
          onSend(inputValue);
          setInputValue("");
        }}
      >
        Send
      </button>
    </>
  );
};

export default ChildData;
