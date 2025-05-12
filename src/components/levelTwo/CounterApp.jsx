import { useEffect, useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // Start the interval on mount
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    setIntervalId(id);

    // Cleanup on unmount
    return () => clearInterval(id);
  }, []);

  const stopIt = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null); // avoid multiple clears
    }
  };

  const resume = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={stopIt}>Stop</button>
      <button onClick={resume}>Resume</button>
    </div>
  );
};

export default CounterApp;
