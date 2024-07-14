import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  const addValue = ()=>{
    // counter = counter + 1;
    setCounter(counter++)
  }
  const removeValue = () => {
    setCounter(counter--)
  }

  return (
    <>
          <h1>Jai Shree Ram!</h1>
          <h2>Counter Value: {counter}</h2>

          <button
          onClick={addValue}>Add Value</button> 
          <br /><br />
          <button
          onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
