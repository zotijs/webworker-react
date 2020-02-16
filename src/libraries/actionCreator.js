export default type => {
  const actionCreatorFunc = payload => ({
    type,
    payload
  });

  actionCreatorFunc.type = type;

  return actionCreatorFunc;
};
