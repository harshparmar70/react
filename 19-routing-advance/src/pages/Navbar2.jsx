import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    
    const navigate = useNavigate()
  return (
    <div className=' py-1 bg-cyan-600 px-5'>
         <button className='bg-cyan-700 px-5 py-2 m-2 rounded cursor-pointer active:scale-95'
      onClick={() => {
        navigate('/')
      }}
      >Return TO Home Page</button>
      

      <button className='bg-cyan-700 px-5 py-2 m-2 rounded cursor-pointer active:scale-95'
      onClick={function(){
        navigate(-1)
      }}
      >Back</button>
    </div>
  )
}

export default Navbar2