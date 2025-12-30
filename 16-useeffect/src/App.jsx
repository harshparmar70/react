import React, { useEffect, useState } from 'react'

const App = () => {

  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(0)

  // useEffect(function(){
  //   console.log('use effect is running...');
  // })

  // useEffect(function(){
  //   console.log('use effect is running...');
  // },[])

  useEffect(function(){
    console.log('use effect is running... num 2');
  },[num2])

  return (
    <div>
      <h1>num 1 : {num1}</h1>
      <h1>num 2 : {num2}</h1>
      <button onMouseEnter={()=>{
        setnum1(num1+1)
      }}
      onMouseLeave={()=>{
        setnum2(num2+2)
      }}
      >click</button>
    </div>
  )
}

export default App
