import { useState } from 'react'
import './App.css'

function App() {

  // eslint-disable-next-line no-unused-vars
  const [key,setKey] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [count,setCount] = useState(0)
;
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setKey(e.target.value);
        }}
      />
      <h1>Your key is - {key}</h1>

      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>

      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
    </>
  );
}

export default App
