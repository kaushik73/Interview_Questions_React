import { useState, useCallback } from "react";
import  ReRenderChild  from "./ReRenderChild";
const ReRenderParent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <ReRenderChild onClick={increment} count={count} />
    </div>
  );
};

export default ReRenderParent;
