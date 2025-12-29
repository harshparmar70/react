import React, { useState } from 'react'
import { X } from 'lucide-react';
const App = () => {
  
  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])

  const submitehendler = (e) =>{
    e.preventDefault()
    if (!title.trim() || !details.trim()) return

    const copytask = [...task];
    copytask.push({title,details})
    settask(copytask)
    
    
    
    settitle('')
    setdetails('')
    
  }

  const deletenote = (idx) => {
    const copytask = [...task]
    copytask.splice(idx,1)
    settask(copytask)
        
  }
  

  return (
    <div className='h-screen lg:flex bg-black text-white  ' >
      
      <form className='flex items-start  lg:w-1/2 gap-3 flex-col p-10' 
      onSubmit={(e)=>{
        submitehendler(e)
      }}>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
         {/* input value */}
         <input 
        type="text"
        onChange={(e)=>{
          settitle(e.target.value);
          
        }}
        value={title}
        placeholder='Enter Notes Heading'
        className='px-5  py-2 w-full font-medium border-2 rounded outline-none'
        />

        {/* detail valuse input */}
        <textarea 
        value={details}
        placeholder='Write Detail'
        className='px-5 h-32 w-full font-medium py-2 border-2 rounded outline-none'
        onChange={(e)=>{
          setdetails(e.target.value);}}
        >
          
        </textarea>
        
        <button className='bg-white active:scale-95 hover:bg-gray-200 w-full font-medium text-black px-5 py-2 rounded outline-none'>Add notes</button>
      </form>
      
      <div className=' lg:w-1/2 lg:border-l-2  p-10  '>
        <h1 className='text-3xl font-bold'> Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-4 mt-5 h-90% overflow-auto'>
           
           {task.map(function(elem,idx){
            return <div key={idx} className='relative h-52 w-42 rounded-2xl bg-cover  text-black py-8 px-4 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
              <h2 className='absolute top-5 right-5 bg-red-200 text-xs p-1 rounded-full cursor-pointer active:scale-95' 
              onClick={()=>{
                deletenote(idx)
              }}
              ><X size={28} strokeWidth={2.5} /></h2>

              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-4 leading-tight font-medium text-gray-800'>{elem.details}</p>
            </div>  
           })}
            
        </div>
       

      </div>
    </div>
  )
}

export default App
