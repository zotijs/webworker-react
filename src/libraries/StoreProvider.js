import React, { useReducer } from "react";

const StoreProvider = ({ children, options }) => {
  const { reducers, initialState, StoreContext } = options;
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
