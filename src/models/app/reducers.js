import { messageFulfilled, messageRejected } from "./actions";
import { createMessages, createError } from "./props";

export default (state, action) => {
  switch (action.type) {
    case messageFulfilled.type:
      return createMessages(state, action.payload);
    case messageRejected.type:
      return createError(state, action.payload);
    default:
      return state;
  }
};
