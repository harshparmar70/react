
import Cards from './Components/card'
const App = () => {
  return (
    <div className='parent'>
      
      <Cards user="Harsh" age={18} img='https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Cards user="kuldip" age={21} img='https://media.istockphoto.com/id/960303278/photo/attractive-young-bearded-hipster-looking-away-in-the-park.jpg?s=2048x2048&w=is&k=20&c=HfntzEd-weM4yqIlt2WYUC3zxoXa1DPbERTEi8EfGOc='/>
      <Cards user="Meet" age={14} img='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      
    </div>
  )
}

export default App