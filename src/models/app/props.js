import { messageFulfilled, messageRejected } from "./actions";

//state creators
const createMessages = (state, { id, message }) => ({
  ...state,
  messages: [...state.messages, { id, message }],
  error: null
});

const createError = (state, payload) => ({
  ...state,
  error: payload
});

//dispatch to props
const mapDispatchToProps = dispatch => {
  return {
    messageFulfilled: payload => {
      dispatch(messageFulfilled(payload));
    },
    messageRejected: payload => {
      dispatch(messageRejected(payload));
    }
  };
};

export { createMessages, createError, mapDispatchToProps };
