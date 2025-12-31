
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-8 bg-cyan-900'>
      <h2 className='text-xl font-bold'>PickZon</h2>
      <div className='flex gap-8 '>
        <Link className='text-lg font-bold' to='/' >Home</Link>
        <Link className='text-lg font-bold' to='/about'>About</Link>
        <Link className='text-lg font-bold' to='/product'>Product</Link>
        <Link className='text-lg font-bold' to='/Courses'>Couses</Link>
      </div>
    </div>
  )
}

export default Navbar
