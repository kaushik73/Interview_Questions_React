/* eslint-disable react/prop-types */

const ReRenderChild = ({ onClick, count }) => {
  console.log("ChildComponent re-rendered");
  return (
    <>
      <button onClick={onClick}>Click count: {count}</button>
      <div>ReRenderChild</div>
    </>
  );
};

export default ReRenderChild;
