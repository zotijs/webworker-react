import React from "react";
import "./App.css";

const App = ({ state, onTerminateWorker }) => {
  const { messages, error } = state; //TO-DO make it cleaner

  if (error) return <div>{error}</div>;

  return (
    <div>
      {messages &&
        messages.map(({ id, message }) => {
          if (id) return <p key={id}>{message}</p>;

          return (
            <p key={0}>
              {" "}
              <strong>Web worker started!</strong>
            </p>
          );
        })}
    </div>
  );
};

export default App;
