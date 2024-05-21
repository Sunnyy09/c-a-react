import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(1) //Counter is a value at 0th index, setCounter: is a function

  //let counter = 5;

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
    console.log("Clicked", counter)
  }

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter)
    //console.log("Clicked", counter)
  }
  
  return (
    <>
    <h1>Count the Counter</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue }>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
