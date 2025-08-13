import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Increment Decrement Value {counter} </h1>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increment Decrement Button
      </button>
      <button type="button" onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>
        Decrement Button
      </button>
    </>
  );
}
