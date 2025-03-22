import { useState, useEffect } from "react";
const DebounceFetch = () => {
  const [title, setTitle] = useState("");
  const [result, setResult] = useState([]);
  const [debounceFetch, setDebounceFetch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceFetch(title);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [title]);

  useEffect(() => {
    if (debounceFetch != "") {
      fetch(
        `https://jsonplaceholder.typicode.com/posts?title_like=${debounceFetch}`
      )
        .then((data) => data.json())
        .then((data) => {
          setResult(data);
          console.log(data);
        });
    } else {
      setResult([]);
    }
  }, [debounceFetch]);

  return (
    <div>
      <input
        type="search"
        name="title"
        value={title}
        placeholder="Enter Data to Search..........."
        onChange={(e) => setTitle(e.target.value)}
      />
      {}
      {
        <ul>
          {result.map((item) => {
            return <li key={item.id}>${item.title}</li>;
          })}
        </ul>
      }
    </div>
  );
};

export default DebounceFetch;
