import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/betman'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-700 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username="Cheemx"/>
    </>
  )
}

export default App
