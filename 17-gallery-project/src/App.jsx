import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card';

const App = () => {

  const [userData, setuserData] = useState([])

  const [index, setindex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setuserData(response.data);
    console.log(response.data);


  }

  useEffect(function(){
    getData()
  },[index])

  let printUserdata = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 '>Loading...</h3>
  if (userData.length > 0) {
    printUserdata = userData.map((elem, idx) => {

      return <div key={idx} >
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen p-4 text-white overflow-auto'>
      

      <div className='flex flex-wrap gap-2  h-[88%]'>
        {printUserdata}
      </div>

      <div className=' flex justify-center items-center gap-6 p-4'>
        <button
        style={{opacity: index==1 ? 0.5 :1}}
        className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'
        onClick={()=>{
          if (index>1) {
            setuserData([])
            setindex(index-1)
          }
          
        }}
        >
          Prev
        </button>

        <h2>{index}</h2>
        <button className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'
        onClick={()=>{
          setuserData([])
          setindex(index+1)
        }}>
          next
        </button>
      </div>
    </div>
  )
}

export default App
