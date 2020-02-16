import React from "react";
import ReactDOM from "react-dom";
import App from "components/app";
import { createStore, StoreProvider } from "libraries";
import { reducers } from "models/app";
import * as serviceWorker from "./workers/serviceWorker";

const initialState = { messages: [], error: null };
const StoreContext = createStore(initialState);
//TO-DO make a combinereducers function

const options = {
  reducers,
  initialState,
  StoreContext
};

ReactDOM.render(
  <StoreProvider options={options}>
    <App options={options} />
  </StoreProvider>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
