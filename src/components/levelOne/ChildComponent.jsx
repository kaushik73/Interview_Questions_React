/* eslint-disable react/prop-types */
import withHRAfter from "../HOC/withHRAfter";

// Both ways are correct.
const ChildComponent = (props) => {
  return <div>{props.content}</div>;
};
// const ChildComponent = ({ content: contentWithNewName }) => {
//   return <div>{contentWithNewName}</div>;
// };

export const WithHRChildComponent = withHRAfter(ChildComponent);
