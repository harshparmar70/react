import React, { useState } from 'react'
import './index.css'

const App = () => {
  const [num, setNum] = useState(0)
  const [username, setUsername] = useState('Harsh')
  
  const [count, setCount] = useState(0)

  function changeData() {
    setNum(70)
    setUsername("Kuldip")
  }

  return (
    <div className="container">

      {/* Profile Card */}
      <div className="card">
        <h2>
          Value: <span>{num}</span>
        </h2>
        <p>Username: <b>{username}</b></p>
        <button className="btn primary" onClick={changeData}>
          Change Data
        </button>
      </div>

      {/* Counter Card */}
      <div className="card counter">
        <h1>{count}</h1>
        <div className="btn-group">
          <button className="btn success" onClick={() => setCount(count + 1)}>
            +
          </button>
          <button className="btn danger" onClick={() => setCount(count - 1)}>
            -
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
