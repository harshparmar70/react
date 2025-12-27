import React from 'react'

const rightcardcontent = () => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
                <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-bold'>1</h2>

                <div>
                    <p className='text-lg leading-normal text-white mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut itaque repudiandae deserunt mollitia id?</p>
                    <div className='flex justify-between'>
                        <button className='bg-blue-600 text-white px-7 py-3 rounded-full text-lg'>setisfied</button>
                        <button  className='bg-blue-600 text-white px-4 py-3 rounded-full text-lg'><i className="ri-arrow-right-fill"></i></button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default rightcardcontent
