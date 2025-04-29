import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [points, setCount] = useState(0)

  const increaseValue = () =>{
    if(points >= 10){
      return 
    }
    points = points + 1;
    setCount(points);
    console.log("something"+points);
  };

  const decreaseValue = () =>{
    if(points<=0){
      return 
    }
    points--
    setCount(points)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>CounTerX</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

          <h2>Points : {points}</h2>
        <button onClick={increaseValue} >Click Up {points}</button>

        <button onClick={decreaseValue}>click down {points}</button>
      </div>

    </>
  )
}

export default App
