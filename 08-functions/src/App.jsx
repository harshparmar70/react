

const App = () => {
 
  function pagescrolling(val) {
    console.log(val);
    
  }
  return (
    <div onWheel={(eleme)=>{
      pagescrolling(eleme.deltaY)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
      
    </div>
  )
}

export default App
