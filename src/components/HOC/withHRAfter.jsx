const withHRAfter = (WrappedComponent) => {
  return function enhancedComponent(props) {
    return (
      <>
        <WrappedComponent {...props} />
        <hr />
        <hr />
      </>
    );
  };
};

export default withHRAfter;
