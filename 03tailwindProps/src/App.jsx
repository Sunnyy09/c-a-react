import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./Components/Card";
import "./App.css";

function App() {
  // let Obj = {
  //   name: "John",
  //   age: 21,
  // };

  return (
    <>
      {
        <h1 className="pb-10 text-orange-500 text-2xl">
          React With Tailwind and Props
        </h1>
      }
      {/* <Card someObj={Obj} /> */}
      <Card userName="Sunny" paraText="Hello from React" />
      <Card userName="john" paraText="lorem ko lekar ayo" />
    </>
  );
}

export default App;
