import { useState } from "react";

export default function DerivedState() {
  const [state, setState] = useState([
    { id: 1, name: "John", age: 24, job: "Developer" },
    { id: 2, name: "Doe", age: 30, job: "Designer" },
    { id: 3, name: "Smith", age: 28, job: "Manager" },
  ]);
  const stateCount = state.length;
  const stateAverageAge = state.reduce((acc, curr) => acc + curr.age, 0) / stateCount;
  console.log("Average Age:", stateAverageAge);
  return (
    <>
      <h1>Derived State</h1>
      <ul>
        {state.map((currentItem) => (
          <li key={currentItem.id}>
            {currentItem.name} is a {currentItem.job} and is {currentItem.age} years old.
          </li>
        ))}
      </ul>
    </>
  );
}
