import Workerized from "workerize-loader!workers/webWorker"; // eslint-disable-line import/no-webpack-loader-syntax

//TO-DO consume messages with an observer
let worker;

const createWebWorker = action => {
  worker = Workerized();

  worker.onmessage = event => action(event.data);
};

const terminateWorker = () => {
  worker.terminate();
  worker = undefined;
};

const withWebWorker = (workerPath, action) => {
  !worker && createWebWorker(workerPath, action);
};

export { withWebWorker, terminateWorker };
