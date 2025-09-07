import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Test() {
  let [arr, setArr] = useState([1, 2, 3]);
  let [str, setStr] = useState("my string");

  // console.log(count);
  console.log(arr, "before");
  console.log(str, "str before");
  arr[0] = "23";
  str = "my new string";
  console.log(arr, "after");
  console.log(str, "str after");

  const [, setState] = useState("some value");

  const increment = () => {
    setState("some other value");
  };
  // const increment = () => {
  //     count = count + 1
  //     setCount(count)
  //     // dom manipulation
  //     // document.querySelector('h1').innerHTML = `Count is: ${count}`
  // }

  // const decrement = () => {
  //     count = count - 1
  //     // setCount(count)
  //     // dom manipulation
  //     // document.querySelector('h1').innerHTML = `Count is: ${count}`
  // }

  return (
    <div id="card">
      <h1>Count is: {arr}</h1>
      <div>
        <button onClick={increment}>Increment {arr}</button>
        <button>Decrement {arr}</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Test />);
