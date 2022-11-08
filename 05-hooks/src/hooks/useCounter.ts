import React from "react";

interface CounterHookProps {
  initialValue: number;
  pace: number;
}

type CounterHookReturnType = [
  number,
  () => void,
  () => void
];

const useCounter = (props: CounterHookProps): CounterHookReturnType => {
  const [count, setCount] = React.useState(props.initialValue);

  function inc(): void {
    setCount(count + props.pace);
  }

  function dec(): void {
    setCount(count - props.pace);
  }

  return [count, inc, dec];
};

export default useCounter;
