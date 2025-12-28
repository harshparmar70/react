import React from 'react'

const App = () => {

  const submiteform = (e) =>{
    e.preventDefault()
    console.log("form submite");
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submiteform(e)
      }}>
        <input type="text" placeholder='Enter your name :' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
