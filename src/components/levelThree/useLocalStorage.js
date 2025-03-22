// export function useLocalStorage(key, value) {
//   let result = "";
//   if (localStorage.getItem(key)) {
//     result = JSON.parse(localStorage.getItem(key));
//   } else {
//     localStorage.setItem(key, JSON.stringify(value));
//   }
//   console.log("local" , result);
//   return result;
// }

import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue !== null ? JSON.parse(savedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
