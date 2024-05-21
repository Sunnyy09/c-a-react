import { useCallback, useState, useEffect, useRef } from "react";

function App(){
  const [length, setLength] = useState(8)
  const [numAllowed,  setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  //using the callback hook for optimize the code or method
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "~!@#$%^&*()_"

    for (let i = 1; i <= length; i++) {
      let char =  Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,4) - for selection the range of password
    window.navigator.clipboard.writeText(password)
  }, [password])

  //using of useEffect hook for run the code
 useEffect(() => {
   passwordGenerator()
 },[length, numAllowed, charAllowed, passwordGenerator])


  return(
    <>

    <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
    <h1 className="text-center text-3xl text-white p-4 my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text" 
        value={password}
        className='outline-none w-full px-3 py-1'
        placeholder="password"
        readOnly
        ref={passwordRef}/>
        <button 
        onClick={copyPasswordToClip}
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-900">copy</button>
      </div>
      <div className="flex text-sm gap-x-2 pb-5">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={8}
          max={100}
          value={length}
          className='cursor-pointer' 
          onChange={(e) => {setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numAllowed}
          id='numInput'
          onChange={() => {
            setNumAllowed((prev) => !prev);
          }} />
          <label htmlFor="numInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='charInput'
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }} />
          <label htmlFor="charInput">Characters</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App