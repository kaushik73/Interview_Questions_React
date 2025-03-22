const withHRAfter = (WrappedComponent) => {
  return function enchanceCompoent(props) {
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
