import { actionCreator } from "libraries";

const message = actionCreator("WORKER_MESSAGE");
const messageFulfilled = actionCreator("WORKER_MESSAGE_FULFILLED");
const messageRejected = actionCreator("WORKER_MESSAGE_REJECTED");

export { message, messageFulfilled, messageRejected };
