import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState({user:"harsh",age:"19"})

  const btnclicked = () =>{
    // const newnum = {...num};
    // newnum.user = "xyz"
    // newnum.age =18
    // console.log(newnum);
    // setnum(newnum)
    setnum(prev=>({...prev,age:18}))
    
  }
  return (
    <div>
      <h1>{num.user} {num.age}</h1>
      <button onClick={btnclicked}>click</button>
    </div>
  )
}

export default App