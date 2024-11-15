import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [characterAllow, setCharacterAllow] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) {
      str += "0123456789";
    }
    if (characterAllow) {
      str += "*#@&-+!";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, characterAllow, setPassword]);

  const copyPassword = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, characterAllow, passwordGenerator]);

  return (
    <>
      <div className="auto flex flex-col align-middle shadow-md rounded-lg justify-center bg-violet-300">
        <h1 className="px-10 py-3 font-semibold mt-3 text-black text-4xl text-center ">
          Password Generator
        </h1>
        <div className="w-4/5 my-5 flex justify-center rounded-lg mx-auto overflow-hidden shadow-md">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="w-full p-2 text-black text-lg outline-none rounded-s-md"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="bg-blue-800 px-5 py-2 rounded-e-md"
          >
            Copy
          </button>
        </div>
        <div className="w-full mx-5 my-5 flex text-sm gap-x-2  justify-around">
          <div className="w-1/2">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="value" className="text-xl ml-2">
              Length: {length}
            </label>
          </div>
          <div className="flex gap-x-2 w-80 justify-center text-xl">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              className="w-5"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">
              <i>Numbers</i>
            </label>
            <input
              type="checkbox"
              defaultChecked={characterAllow}
              id="characterInput"
              onChange={() => {
                setCharacterAllow((prev) => !prev);
              }}
              className="w-5"
            />
            <label htmlFor="characterInput">
              <i>Characters</i>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
