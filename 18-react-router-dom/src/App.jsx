import About from './pages/about'
import Contect from './pages/contect'
import Home from './pages/Home'
import {Link, Route,Routes} from 'react-router-dom'
import Product from './pages/Product'


const App = () => {
  return (
    <div >
      
      <div className='nav'>
        <h3>PickZon</h3>
        <div className='navCo'>
          {/* <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contect">Contact</a> */}
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contect'>Contact</Link>
          <Link to = '/product'> Products</Link>
          
        </div>
      </div>

      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contect' element={<Contect />}/>
        <Route path='/product' element={<Product />} />
      </Routes>
      <footer> this is footer</footer>
    </div>
  )
}

export default App
