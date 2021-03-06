import { createSignal } from "solid-js";

import type { WithChildren } from "~/types";

interface CounterProps extends WithChildren {}

export function Counter({ children }: CounterProps) {
  const [count, setCount] = createSignal(0);

  const add = () => setCount(count() + 1);
  const subtract = () => setCount(count() - 1);

  return (
    <>
      <div>
        <button onClick={subtract}>-</button>
        <pre>{count()}</pre>
        <button onClick={add}>+</button>
      </div>
      <div>{children}</div>
    </>
  );
}
