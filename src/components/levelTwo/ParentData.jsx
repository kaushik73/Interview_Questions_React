import React from "react";
import ChildData from "./ChildData";

const ParentData = () => {
  const [childData, setChildData] = React.useState(null);
  const setChildDAta = (data) => {
    console.log("Data from child", data);
    setChildData(data);
  };
  return (
    <div>
      ParentData Data from Child : {childData}
      <ChildData onSend={setChildDAta} />
    </div>
  );
};

export default ParentData;
