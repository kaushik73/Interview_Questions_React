import { useState, useEffect } from "react";

export function useFetch(titleLike = "") {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState("true");
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${titleLike}`)
      .then((data) => data.json())
      .then((data) => {
        console.log("data from api", data);
        setResult(data);
      })
      .catch(() => {
        setError("Not able to fetch anything");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [titleLike]);
  return [result, isLoading, error];
}
