/* eslint-disable react/prop-types */
import React from "react";
const ReRenderChild = ({ onClick, count }) => {
  console.log("ChildComponent re-rendered");
  return (
    <>
      <button onClick={onClick}>Click count: {count}</button>
      <div>ReRenderChild</div>
    </>
  );
};

export default React.memo(ReRenderChild);
