import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1); //Counter is a value at 0th index, setCounter: is a function

  //let counter = 5;

  const addValue = () => {
    // if (counter < 20) {
    //   counter = counter + 1;
    //   setCounter(counter);
    // }

    setCounter((prevCounter) => (prevCounter < 20 ? prevCounter + 1 : 0));
  };

  const subtractValue = () => {
    // if (counter > 0) {
    //   counter = counter - 1;
    //   setCounter(counter);
    // }
    //Another method to subtract a value in a cleaner way
    setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
  };

  return (
    <>
      <h1>Count the Counter</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
