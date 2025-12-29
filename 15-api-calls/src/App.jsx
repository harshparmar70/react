import axios from 'axios';
import { useState } from 'react';

const App = () => {

  const [data, setdata] = useState([])

  // using fatch
  const getDataUsingfatch = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/2')
    const data =await response.json()
    console.log(data);
    
  }
  // using axios
  const getDataUsingAxios = async() => {
    // const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/2')
    // console.log(data);
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/2')
    console.log(response.data);
  }
  const getdata = async () =>{
    const responce2 = await axios.get("https://picsum.photos/v2/list")
    console.log(responce2.data);
    setdata(responce2.data)
    
  }




  return (
    <div className="gap-4">
      <button onClick={getDataUsingfatch}>Get Data using fatch </button>
      <br />
      <button onClick={getDataUsingAxios}>Get Data using axios</button>
      <br />
      <button onClick={getdata}>Get Data using axios</button>

      <div>
        {data.map(function(elem,idx){

          return <h1 key={idx}> {idx} {elem.author}</h1>
        })}
      </div>
    </div>
  )
}

export default App
