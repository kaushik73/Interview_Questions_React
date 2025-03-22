import { useEffect, useState } from "react";
import withHRAfter from "../HOC/withHRAfter";

const GetAPIData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);
  if (!data) {
    return <p>loading....</p>;
  }
  return (
    <div>
      GetAPIData :
      <ul>
        {data
          .filter((post) => post.id % 2 !== 0)
          .slice(0, 6)
          .map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
      </ul>
    </div>
  );
};

export const GetAPIDataWithHR = withHRAfter(GetAPIData);
