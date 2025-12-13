import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-black">
        <div className="text-white opacity-50 font-bold text-s text-center">The developer is probably binge-watching something instead of coding 😴</div>
      </div>
    </>
  )
}

export default App
