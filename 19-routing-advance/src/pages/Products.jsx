import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      {/* <h1 >Product Page</h1> */}
      <div className='flex justify-center gap-8 py-4'>
        <Link className='text-xl font-semibold' to='/product/Man' >Man</Link>
        <Link className='text-xl font-semibold' to='/product/girl'>Girl</Link>
        <Link className='text-xl font-semibold' to='/product/kids'>Kids</Link>
      </div>
      <Outlet/>
      
    </div>
  )
}

export default Products
