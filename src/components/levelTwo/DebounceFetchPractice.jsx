import React, { useEffect } from "react";
import { use } from "react";

const DebounceFetchPractice = () => {
  const [ip, setIp] = React.useState("");
  const [debounceIp, setDebounceIp] = React.useState("");
  const [apiCallCounnt, setApiCallCount] = React.useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounceIp(ip);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [ip]);

  useEffect(() => {
    if (!debounceIp) return; // Avoid unnecessary API call

    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setApiCallCount((prevCount) => prevCount + 1);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [debounceIp]);

  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => setIp(e.target.value)}
      />
      API Call Count: {apiCallCounnt}
    </div>
  );
};

export default DebounceFetchPractice;
