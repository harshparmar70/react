import React from 'react'

const App = () => {

  // localStorage.clear()
  // sessionStorage.clear()

  // localStorage.setItem('user','harsh')
  // localStorage.setItem('age','19')

  // localStorage.removeItem('user')

  // const userdata = {
  //   name : 'harsh',
  //   age :  '19',
  //   sem : '4'
  // }
  
  
  // localStorage.setItem('userdata',JSON.stringify(userdata)) //obj to string
  
  // const user = localStorage.getItem('user');
  // const age = localStorage.getItem('age');
  
  const userda = JSON.parse(localStorage.getItem('userdata')); //string to obj
  return (
    <div>
      
      <br /> {userda.name}
    </div>
  )
}

export default App
