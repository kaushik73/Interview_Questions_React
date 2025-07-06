import { useEffect, useState } from "react";

const GetAPIData2 = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return await response.json();
  };
  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      const d = await getData();
      setData(d);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data &&
        data.slice(0, 10).map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}
    </div>
  );
};

const GetAPIData3 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      {data &&
        data.slice(0, 10).map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}
    </div>
  );
};

export default GetAPIData2;
export { GetAPIData3 };
