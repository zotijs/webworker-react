const expensiveOperation = () => {
  let count = 1;
  setInterval(
    () =>
      postMessage({
        id: count,
        message: `expensive operation ${count++} completed from web worker`
      }),
    4000
  );
};

expensiveOperation();
