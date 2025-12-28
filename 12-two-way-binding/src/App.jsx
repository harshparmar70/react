import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState("")
  const submiteform = (e) =>{
    e.preventDefault()
    console.log("form submite",title);
    settitle("")
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submiteform(e)
      }}>
        <input 
        type="text" 
        placeholder='Enter your name :' 
        value={title}
        onChange={(e)=>{
          settitle(e.target.value);
          
        }}
        />
        <button>Submit</button>
      </form>
      <h1>Form submited by : {title}</h1>
    </div>
  )
}

export default App
