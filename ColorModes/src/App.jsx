import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  let [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center px-4 py-4 bg-white shadow-lg gap-3 rounded-3xl">
            <button 
              onClick={() => setColor("red")}
              className="px-4 py-1 rounded-full outline-none text-white shadow-lg" 
              style={{ backgroundColor: "red" }}>
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >green</button>
            <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >black</button>
          <button
          onClick={() => setColor("gray")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "gray"}}
          >gray</button>
          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}
          >yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
