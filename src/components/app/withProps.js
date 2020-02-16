import React, { memo } from "react";
import { useStore } from "libraries";
import { mapDispatchToProps } from "models/app/props";
import { withWebWorker, terminateWorker } from "libraries/withWebWorker";

const withProps = Component => {
  const MemoizedComponent = memo(Component);

  return props => {
    const { StoreContext } = props.options;
    const { state, dispatch } = useStore(StoreContext);
    const { messageFulfilled, messageRejected } = mapDispatchToProps(dispatch);
    const storeProps = { state, messageFulfilled, messageRejected }; //TO-DO state to selectors in props
    withWebWorker(messageFulfilled);
    const onTerminateWorker = () => terminateWorker();

    return (
      <MemoizedComponent
        {...props}
        {...storeProps}
        onTerminateWorker={onTerminateWorker}
      />
    );
  };
};

export default withProps;
