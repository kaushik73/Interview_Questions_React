const ConsoleHOC = (WrappedCompomnent) => {
  return function enchanceCompoent(props) {
    return (
      <>
        <WrappedCompomnent {...props} />
        {console.log(WrappedCompomnent()._source.fileName)}
      </>
    );
  };
};

export default ConsoleHOC;
