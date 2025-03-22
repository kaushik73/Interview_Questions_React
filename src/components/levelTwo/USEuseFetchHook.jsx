import { useState } from "react";
import { useFetch } from "./useFetch";

const USEuseFetchHook = () => {
  const [title, setTitle] = useState("");
  const [result, isLoading, error] = useFetch(title);
  console.log("ooooo", result);

  return (
    <div>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        value={title}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {result.slice(0,10).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default USEuseFetchHook;
